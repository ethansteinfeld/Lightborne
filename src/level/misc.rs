use bevy::prelude::*;
use bevy_ecs_ldtk::prelude::*;

use crate::light::sensor::LightSensorBundle;

/// [`Component`] to mark buttons in the level.
#[derive(Default, Component)]
pub struct ButtonMarker;

/// [`Bundle`] registered with Ldtk to spawn buttons.
#[derive(Default, Bundle, LdtkEntity)]
pub struct ButtonBundle {
    marker: ButtonMarker,
    #[sprite_sheet]
    sprite_sheet: Sprite,
    #[from_entity_instance]
    light_sensor: LightSensorBundle,
}

/// [`Component`] to mark start flags in the level. Used to query for when start flags are loaded
/// by Ldtk.
#[derive(Default, Component)]
pub struct StartMarker;

/// [`Component`] to hold information about start flags in the level. Initialized after Ldtk spawns
/// the entity, as the [`level_iid`](StartFlag::level_iid) needs to be retrieved from the level entity.
#[derive(Default, Component)]
pub struct StartFlag {
    /// The `level_iid` of the `StartFlag`'s level.
    pub level_iid: String,
}

impl LdtkEntity for StartFlag {
    fn bundle_entity(
        _: &EntityInstance,
        _: &LayerInstance,
        level: ldtk::loaded_level::LoadedLevel,
        _: Option<&Handle<Image>>,
        _: Option<&TilesetDefinition>,
        _: &AssetServer,
        _: &mut Assets<TextureAtlasLayout>,
    ) -> Self {
        StartFlag {
            level_iid: level.iid().to_string(),
        }
    }
}
