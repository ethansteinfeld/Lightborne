(function() {
    var type_impls = Object.fromEntries([["bevy",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AdapterSystem%3CFunc,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#107-110\">Source</a><a href=\"#impl-AdapterSystem%3CFunc,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, S&gt; <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\">Adapt</a>&lt;S&gt;,\n    S: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#113\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"bevy/ecs/system/struct.AdapterSystem.html#tymethod.new\" class=\"fn\">new</a>(\n    func: Func,\n    system: S,\n    name: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\"><code>System</code></a> that uses <code>func</code> to adapt <code>system</code>, via the <a href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\"><code>Adapt</code></a> trait.</p>\n</div></details></div></details>",0,"bevy::ecs::schedule::NotSystem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AdapterSystem%3CFunc,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#100\">Source</a><a href=\"#impl-Clone-for-AdapterSystem%3CFunc,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#100\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy::ecs::schedule::NotSystem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadOnlySystem-for-AdapterSystem%3CFunc,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#214-217\">Source</a><a href=\"#impl-ReadOnlySystem-for-AdapterSystem%3CFunc,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, S&gt; <a class=\"trait\" href=\"bevy/ecs/prelude/trait.ReadOnlySystem.html\" title=\"trait bevy::ecs::prelude::ReadOnlySystem\">ReadOnlySystem</a> for <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\">Adapt</a>&lt;S&gt;,\n    S: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.ReadOnlySystem.html\" title=\"trait bevy::ecs::prelude::ReadOnlySystem\">ReadOnlySystem</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_readonly\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#186\">Source</a><a href=\"#method.run_readonly\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.ReadOnlySystem.html#method.run_readonly\" class=\"fn\">run_readonly</a>(\n    &amp;mut self,\n    input: &lt;Self::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.In\" title=\"type bevy::ecs::prelude::System::In\">In</a> as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemInput.html\" title=\"trait bevy::ecs::prelude::SystemInput\">SystemInput</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.SystemInput.html#associatedtype.Inner\" title=\"type bevy::ecs::prelude::SystemInput::Inner\">Inner</a>&lt;'_&gt;,\n    world: &amp;<a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>,\n) -&gt; Self::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.Out\" title=\"type bevy::ecs::prelude::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs this system with the given input in the world. <a href=\"bevy/ecs/prelude/trait.ReadOnlySystem.html#method.run_readonly\">Read more</a></div></details></div></details>","ReadOnlySystem","bevy::ecs::schedule::NotSystem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-System-for-AdapterSystem%3CFunc,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#118-121\">Source</a><a href=\"#impl-System-for-AdapterSystem%3CFunc,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, S&gt; <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a> for <a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\">Adapt</a>&lt;S&gt;,\n    S: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.In\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#123\">Source</a><a href=\"#associatedtype.In\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/prelude/trait.System.html#associatedtype.In\" class=\"associatedtype\">In</a> = &lt;Func as <a class=\"trait\" href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\">Adapt</a>&lt;S&gt;&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/system/trait.Adapt.html#associatedtype.In\" title=\"type bevy::ecs::system::Adapt::In\">In</a></h4></section></summary><div class='docblock'>The system’s input.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Out\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#124\">Source</a><a href=\"#associatedtype.Out\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/prelude/trait.System.html#associatedtype.Out\" class=\"associatedtype\">Out</a> = &lt;Func as <a class=\"trait\" href=\"bevy/ecs/system/trait.Adapt.html\" title=\"trait bevy::ecs::system::Adapt\">Adapt</a>&lt;S&gt;&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/system/trait.Adapt.html#associatedtype.Out\" title=\"type bevy::ecs::system::Adapt::Out\">Out</a></h4></section></summary><div class='docblock'>The system’s output.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#126\">Source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s name.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#130\">Source</a><a href=\"#method.component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.component_access\" class=\"fn\">component_access</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bevy/ecs/query/struct.Access.html\" title=\"struct bevy::ecs::query::Access\">Access</a>&lt;<a class=\"struct\" href=\"bevy/ecs/component/struct.ComponentId.html\" title=\"struct bevy::ecs::component::ComponentId\">ComponentId</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s component <a href=\"bevy/ecs/query/struct.Access.html\" title=\"struct bevy::ecs::query::Access\"><code>Access</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.archetype_component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#135-137\">Source</a><a href=\"#method.archetype_component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.archetype_component_access\" class=\"fn\">archetype_component_access</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bevy/ecs/query/struct.Access.html\" title=\"struct bevy::ecs::query::Access\">Access</a>&lt;<a class=\"struct\" href=\"bevy/ecs/archetype/struct.ArchetypeComponentId.html\" title=\"struct bevy::ecs::archetype::ArchetypeComponentId\">ArchetypeComponentId</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s archetype component <a href=\"bevy/ecs/query/struct.Access.html\" title=\"struct bevy::ecs::query::Access\"><code>Access</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_send\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#141\">Source</a><a href=\"#method.is_send\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.is_send\" class=\"fn\">is_send</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if the system is <a href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\"><code>Send</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_exclusive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#145\">Source</a><a href=\"#method.is_exclusive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.is_exclusive\" class=\"fn\">is_exclusive</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if the system must be run exclusively.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#149\">Source</a><a href=\"#method.has_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.has_deferred\" class=\"fn\">has_deferred</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if system has deferred buffers.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_unsafe\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#154-158\">Source</a><a href=\"#method.run_unsafe\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.run_unsafe\" class=\"fn\">run_unsafe</a>(\n    &amp;mut self,\n    input: &lt;&lt;<a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt; as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.In\" title=\"type bevy::ecs::prelude::System::In\">In</a> as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemInput.html\" title=\"trait bevy::ecs::prelude::SystemInput\">SystemInput</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.SystemInput.html#associatedtype.Inner\" title=\"type bevy::ecs::prelude::SystemInput::Inner\">Inner</a>&lt;'_&gt;,\n    world: <a class=\"struct\" href=\"bevy/ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy::ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt; as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.Out\" title=\"type bevy::ecs::prelude::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs the system with the given input in the world. Unlike <a href=\"bevy/ecs/prelude/trait.System.html#method.run\" title=\"method bevy::ecs::prelude::System::run\"><code>System::run</code></a>, this function\ncan be called in parallel with other systems and may break Rust’s aliasing rules\nif used incorrectly, making it unsafe to call. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.run_unsafe\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#166\">Source</a><a href=\"#method.run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#method.run\" class=\"fn\">run</a>(\n    &amp;mut self,\n    input: &lt;&lt;<a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt; as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.In\" title=\"type bevy::ecs::prelude::System::In\">In</a> as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemInput.html\" title=\"trait bevy::ecs::prelude::SystemInput\">SystemInput</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.SystemInput.html#associatedtype.Inner\" title=\"type bevy::ecs::prelude::SystemInput::Inner\">Inner</a>&lt;'_&gt;,\n    world: &amp;mut <a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/system/struct.AdapterSystem.html\" title=\"struct bevy::ecs::system::AdapterSystem\">AdapterSystem</a>&lt;Func, S&gt; as <a class=\"trait\" href=\"bevy/ecs/prelude/trait.System.html\" title=\"trait bevy::ecs::prelude::System\">System</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/prelude/trait.System.html#associatedtype.Out\" title=\"type bevy::ecs::prelude::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs the system with the given input in the world. <a href=\"bevy/ecs/prelude/trait.System.html#method.run\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#172\">Source</a><a href=\"#method.apply_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.apply_deferred\" class=\"fn\">apply_deferred</a>(&amp;mut self, world: &amp;mut <a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>)</h4></section></summary><div class='docblock'>Applies any <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> system parameters (or other system buffers) of this system to the world. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.apply_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.queue_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#177\">Source</a><a href=\"#method.queue_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.queue_deferred\" class=\"fn\">queue_deferred</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy/ecs/world/struct.DeferredWorld.html\" title=\"struct bevy::ecs::world::DeferredWorld\">DeferredWorld</a>&lt;'_&gt;)</h4></section></summary><div class='docblock'>Enqueues any <a href=\"bevy/ecs/prelude/struct.Deferred.html\" title=\"struct bevy::ecs::prelude::Deferred\"><code>Deferred</code></a> system parameters (or other system buffers)\nof this system into the world’s command buffer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_param_unsafe\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#182\">Source</a><a href=\"#method.validate_param_unsafe\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.validate_param_unsafe\" class=\"fn\">validate_param_unsafe</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy/ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy::ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Validates that all parameters can be acquired and that system can run without panic.\nBuilt-in executors use this to prevent invalid systems from running. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.validate_param_unsafe\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#187\">Source</a><a href=\"#method.initialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.initialize\" class=\"fn\">initialize</a>(&amp;mut self, world: &amp;mut <a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>)</h4></section></summary><div class='docblock'>Initialize the system.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_archetype_component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#192\">Source</a><a href=\"#method.update_archetype_component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.update_archetype_component_access\" class=\"fn\">update_archetype_component_access</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy/ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy::ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;)</h4></section></summary><div class='docblock'>Update the system’s archetype component <a href=\"bevy/ecs/query/struct.Access.html\" title=\"struct bevy::ecs::query::Access\"><code>Access</code></a>. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.update_archetype_component_access\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_change_tick\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#196\">Source</a><a href=\"#method.check_change_tick\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.check_change_tick\" class=\"fn\">check_change_tick</a>(&amp;mut self, change_tick: <a class=\"struct\" href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\">Tick</a>)</h4></section></summary><div class='docblock'>Checks any <a href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\"><code>Tick</code></a>s stored on this system and wraps their value if they get too old. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.check_change_tick\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_system_sets\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#200\">Source</a><a href=\"#method.default_system_sets\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#method.default_system_sets\" class=\"fn\">default_system_sets</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"bevy/ecs/intern/struct.Interned.html\" title=\"struct bevy::ecs::intern::Interned\">Interned</a>&lt;dyn <a class=\"trait\" href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">SystemSet</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns the system’s default <a href=\"bevy/ecs/prelude/trait.SystemSet.html\" title=\"trait bevy::ecs::prelude::SystemSet\">system sets</a>. <a href=\"bevy/ecs/prelude/trait.System.html#method.default_system_sets\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_last_run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#204\">Source</a><a href=\"#method.get_last_run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.get_last_run\" class=\"fn\">get_last_run</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\">Tick</a></h4></section></summary><div class='docblock'>Gets the tick indicating the last time this system ran.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_last_run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/adapter_system.rs.html#208\">Source</a><a href=\"#method.set_last_run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.set_last_run\" class=\"fn\">set_last_run</a>(&amp;mut self, last_run: <a class=\"struct\" href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\">Tick</a>)</h4></section></summary><div class='docblock'>Overwrites the tick indicating the last time this system ran. <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.set_last_run\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#40\">Source</a><a href=\"#method.type_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#method.type_id\" class=\"fn\">type_id</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a></h4></section></summary><div class='docblock'>Returns the <a href=\"https://doc.rust-lang.org/1.84.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\"><code>TypeId</code></a> of the underlying system type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_param\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#124\">Source</a><a href=\"#method.validate_param\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/prelude/trait.System.html#method.validate_param\" class=\"fn\">validate_param</a>(&amp;mut self, world: &amp;<a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Safe version of <a href=\"bevy/ecs/prelude/trait.System.html#tymethod.validate_param_unsafe\" title=\"method bevy::ecs::prelude::System::validate_param_unsafe\"><code>System::validate_param_unsafe</code></a>.\nthat runs on exclusive, single-threaded <code>world</code> pointer.</div></details></div></details>","System","bevy::ecs::schedule::NotSystem"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[28047]}