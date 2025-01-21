use bevy::{
    input::common_conditions::{input_just_pressed, input_just_released, input_pressed},
    prelude::*,
};
use bevy_ecs_ldtk::prelude::*;
use bevy_rapier2d::prelude::*;

use crate::{input::update_cursor_world_coords, shared::GroupLabel};

use kill::{reset_player_on_level_switch, reset_player_position, KillPlayerEvent};
use light::{handle_color_switch, preview_light_path, shoot_light, PlayerLightInventory};
use movement::{move_player, queue_jump, PlayerMovement};

mod kill;
pub mod light;
pub mod movement;

/// [`Plugin`] for anything player based.
pub struct PlayerManagementPlugin;

impl Plugin for PlayerManagementPlugin {
    fn build(&self, app: &mut App) {
        app.add_event::<KillPlayerEvent>()
            .add_systems(FixedUpdate, move_player)
            .add_systems(
                Update,
                queue_jump
                    .run_if(input_just_pressed(KeyCode::Space))
                    .before(move_player),
            )
            .add_systems(Update, handle_color_switch)
            .add_systems(
                Update,
                (
                    preview_light_path.run_if(input_pressed(MouseButton::Left)),
                    shoot_light.run_if(input_just_released(MouseButton::Left)),
                )
                    .after(handle_color_switch)
                    .after(update_cursor_world_coords),
            )
            .add_systems(Update, reset_player_on_level_switch)
            .add_systems(Update, reset_player_position)
            .add_systems(
                Update,
                quick_reset.run_if(input_just_pressed(KeyCode::KeyR)),
            );
    }
}

/// [`Component`] to signal our own code to finish the initialization of the player (adding sensors, etc)
#[derive(Component, Default)]
pub struct PlayerMarker;

/// [`Bundle`] that will be initialized with [`init_player_bundle`] and inserted to the player
/// [`Entity`] by Ldtk.
#[derive(Default, Bundle)]
pub struct PlayerBundle {
    body: RigidBody,
    controller: KinematicCharacterController,
    controller_output: KinematicCharacterControllerOutput,
    collider: Collider,
    collision_groups: CollisionGroups,
    friction: Friction,
    restitution: Restitution,
    player_movement: PlayerMovement,
    light_inventory: PlayerLightInventory,
    sprite: Sprite,
    worldly: Worldly,
    player_marker: PlayerMarker,
}

impl LdtkEntity for PlayerBundle {
    fn bundle_entity(
        entity_instance: &EntityInstance,
        _layer_instance: &LayerInstance,
        _level: ldtk::loaded_level::LoadedLevel,
        _tileset: Option<&Handle<Image>>,
        _tileset_definition: Option<&TilesetDefinition>,
        asset_server: &AssetServer,
        _texture_atlases: &mut Assets<TextureAtlasLayout>,
    ) -> Self {
        PlayerBundle {
            body: RigidBody::KinematicPositionBased,
            controller: KinematicCharacterController {
                offset: CharacterLength::Absolute(1.0),
                ..default()
            },
            controller_output: KinematicCharacterControllerOutput::default(),
            collider: Collider::cuboid(6.0, 9.0),
            collision_groups: CollisionGroups::new(
                GroupLabel::PLAYER_COLLIDER,
                GroupLabel::TERRAIN,
            ),
            friction: Friction {
                coefficient: 0.,
                combine_rule: CoefficientCombineRule::Min,
            },
            restitution: Restitution {
                coefficient: 0.,
                combine_rule: CoefficientCombineRule::Min,
            },
            player_movement: PlayerMovement::default(),
            light_inventory: PlayerLightInventory::default(),
            sprite: Sprite::from_image(asset_server.load("lyra.png")),
            worldly: Worldly::from_entity_info(entity_instance),
            player_marker: PlayerMarker,
        }
    }

    fn extend_entity<'b, 'a>(
        commands: &'b mut EntityCommands<'a>,
        _: &Self,
    ) -> &'b mut EntityCommands<'a> {
        commands.with_children(|parent| {
            parent
                .spawn(Collider::cuboid(5.0, 6.0))
                .insert(Sensor)
                .insert(CollisionGroups::new(
                    GroupLabel::PLAYER_SENSOR,
                    GroupLabel::HURT_BOX,
                ))
                .insert(PointLight {
                    intensity: 100_000.0,
                    ..default()
                });
        })
    }
}

/// [`System`] that will send a [`KillPlayerEvent`] when the "R" key is pressed.
fn quick_reset(mut ev_kill_player: EventWriter<KillPlayerEvent>) {
    ev_kill_player.send(KillPlayerEvent);
}
