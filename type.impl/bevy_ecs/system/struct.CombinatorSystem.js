(function() {
    var type_impls = Object.fromEntries([["bevy_ecs",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#267-276\">Source</a><a href=\"#impl-Clone-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy_ecs/system/struct.CombinatorSystem.html\" title=\"struct bevy_ecs::system::CombinatorSystem\">CombinatorSystem</a>&lt;Func, A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#273-275\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Clone the combined system. The cloned instance must be <code>.initialize()</code>d before it can run.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy_ecs::schedule::condition::And","bevy_ecs::schedule::condition::Nand","bevy_ecs::schedule::condition::Nor","bevy_ecs::schedule::condition::Or","bevy_ecs::schedule::condition::Xnor","bevy_ecs::schedule::condition::Xor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#121-135\">Source</a><a href=\"#impl-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, A, B&gt; <a class=\"struct\" href=\"bevy_ecs/system/struct.CombinatorSystem.html\" title=\"struct bevy_ecs::system::CombinatorSystem\">CombinatorSystem</a>&lt;Func, A, B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#125-134\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"bevy_ecs/system/struct.CombinatorSystem.html#tymethod.new\" class=\"fn\">new</a>(a: A, b: B, name: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new system that combines two inner systems.</p>\n<p>The returned system will only be usable if <code>Func</code> implements <a href=\"bevy_ecs/system/trait.Combine.html\" title=\"trait bevy_ecs::system::Combine\"><code>Combine&lt;A, B&gt;</code></a>.</p>\n</div></details></div></details>",0,"bevy_ecs::schedule::condition::And","bevy_ecs::schedule::condition::Nand","bevy_ecs::schedule::condition::Nor","bevy_ecs::schedule::condition::Or","bevy_ecs::schedule::condition::Xnor","bevy_ecs::schedule::condition::Xor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadOnlySystem-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#259-265\">Source</a><a href=\"#impl-ReadOnlySystem-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Func, A, B&gt; <a class=\"trait\" href=\"bevy_ecs/system/trait.ReadOnlySystem.html\" title=\"trait bevy_ecs::system::ReadOnlySystem\">ReadOnlySystem</a> for <a class=\"struct\" href=\"bevy_ecs/system/struct.CombinatorSystem.html\" title=\"struct bevy_ecs::system::CombinatorSystem\">CombinatorSystem</a>&lt;Func, A, B&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"bevy_ecs/system/trait.Combine.html\" title=\"trait bevy_ecs::system::Combine\">Combine</a>&lt;A, B&gt; + 'static,\n    A: <a class=\"trait\" href=\"bevy_ecs/system/trait.ReadOnlySystem.html\" title=\"trait bevy_ecs::system::ReadOnlySystem\">ReadOnlySystem</a>,\n    B: <a class=\"trait\" href=\"bevy_ecs/system/trait.ReadOnlySystem.html\" title=\"trait bevy_ecs::system::ReadOnlySystem\">ReadOnlySystem</a>,</div></h3></section></summary><div class=\"docblock\"><p>SAFETY: Both systems are read-only, so any system created by combining them will only read from the world.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_readonly\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#186-193\">Source</a><a href=\"#method.run_readonly\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.ReadOnlySystem.html#method.run_readonly\" class=\"fn\">run_readonly</a>(\n    &amp;mut self,\n    input: <a class=\"type\" href=\"bevy_ecs/system/type.SystemIn.html\" title=\"type bevy_ecs::system::SystemIn\">SystemIn</a>&lt;'_, Self&gt;,\n    world: &amp;<a class=\"struct\" href=\"bevy_ecs/world/struct.World.html\" title=\"struct bevy_ecs::world::World\">World</a>,\n) -&gt; Self::<a class=\"associatedtype\" href=\"bevy_ecs/system/trait.System.html#associatedtype.Out\" title=\"type bevy_ecs::system::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs this system with the given input in the world. <a href=\"bevy_ecs/system/trait.ReadOnlySystem.html#method.run_readonly\">Read more</a></div></details></div></details>","ReadOnlySystem","bevy_ecs::schedule::condition::And","bevy_ecs::schedule::condition::Nand","bevy_ecs::schedule::condition::Nor","bevy_ecs::schedule::condition::Or","bevy_ecs::schedule::condition::Xnor","bevy_ecs::schedule::condition::Xor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-System-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#137-256\">Source</a><a href=\"#impl-System-for-CombinatorSystem%3CFunc,+A,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, Func&gt; <a class=\"trait\" href=\"bevy_ecs/system/trait.System.html\" title=\"trait bevy_ecs::system::System\">System</a> for <a class=\"struct\" href=\"bevy_ecs/system/struct.CombinatorSystem.html\" title=\"struct bevy_ecs::system::CombinatorSystem\">CombinatorSystem</a>&lt;Func, A, B&gt;<div class=\"where\">where\n    Func: <a class=\"trait\" href=\"bevy_ecs/system/trait.Combine.html\" title=\"trait bevy_ecs::system::Combine\">Combine</a>&lt;A, B&gt; + 'static,\n    A: <a class=\"trait\" href=\"bevy_ecs/system/trait.System.html\" title=\"trait bevy_ecs::system::System\">System</a>,\n    B: <a class=\"trait\" href=\"bevy_ecs/system/trait.System.html\" title=\"trait bevy_ecs::system::System\">System</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.In\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#143\">Source</a><a href=\"#associatedtype.In\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy_ecs/system/trait.System.html#associatedtype.In\" class=\"associatedtype\">In</a> = &lt;Func as <a class=\"trait\" href=\"bevy_ecs/system/trait.Combine.html\" title=\"trait bevy_ecs::system::Combine\">Combine</a>&lt;A, B&gt;&gt;::<a class=\"associatedtype\" href=\"bevy_ecs/system/trait.Combine.html#associatedtype.In\" title=\"type bevy_ecs::system::Combine::In\">In</a></h4></section></summary><div class='docblock'>The system’s input.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Out\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#144\">Source</a><a href=\"#associatedtype.Out\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy_ecs/system/trait.System.html#associatedtype.Out\" class=\"associatedtype\">Out</a> = &lt;Func as <a class=\"trait\" href=\"bevy_ecs/system/trait.Combine.html\" title=\"trait bevy_ecs::system::Combine\">Combine</a>&lt;A, B&gt;&gt;::<a class=\"associatedtype\" href=\"bevy_ecs/system/trait.Combine.html#associatedtype.Out\" title=\"type bevy_ecs::system::Combine::Out\">Out</a></h4></section></summary><div class='docblock'>The system’s output.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#146-148\">Source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s name.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#150-152\">Source</a><a href=\"#method.component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.component_access\" class=\"fn\">component_access</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bevy_ecs/query/struct.Access.html\" title=\"struct bevy_ecs::query::Access\">Access</a>&lt;<a class=\"struct\" href=\"bevy_ecs/component/struct.ComponentId.html\" title=\"struct bevy_ecs::component::ComponentId\">ComponentId</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s component <a href=\"bevy_ecs/query/struct.Access.html\" title=\"struct bevy_ecs::query::Access\"><code>Access</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.archetype_component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#154-156\">Source</a><a href=\"#method.archetype_component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.archetype_component_access\" class=\"fn\">archetype_component_access</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bevy_ecs/query/struct.Access.html\" title=\"struct bevy_ecs::query::Access\">Access</a>&lt;<a class=\"struct\" href=\"bevy_ecs/archetype/struct.ArchetypeComponentId.html\" title=\"struct bevy_ecs::archetype::ArchetypeComponentId\">ArchetypeComponentId</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s archetype component <a href=\"bevy_ecs/query/struct.Access.html\" title=\"struct bevy_ecs::query::Access\"><code>Access</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_send\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#158-160\">Source</a><a href=\"#method.is_send\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.is_send\" class=\"fn\">is_send</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if the system is <a href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\"><code>Send</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_exclusive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#162-164\">Source</a><a href=\"#method.is_exclusive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.is_exclusive\" class=\"fn\">is_exclusive</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if the system must be run exclusively.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#166-168\">Source</a><a href=\"#method.has_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.has_deferred\" class=\"fn\">has_deferred</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if system has deferred buffers.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_unsafe\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#170-187\">Source</a><a href=\"#method.run_unsafe\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.run_unsafe\" class=\"fn\">run_unsafe</a>(\n    &amp;mut self,\n    input: <a class=\"type\" href=\"bevy_ecs/system/type.SystemIn.html\" title=\"type bevy_ecs::system::SystemIn\">SystemIn</a>&lt;'_, Self&gt;,\n    world: <a class=\"struct\" href=\"bevy_ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy_ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;,\n) -&gt; Self::<a class=\"associatedtype\" href=\"bevy_ecs/system/trait.System.html#associatedtype.Out\" title=\"type bevy_ecs::system::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs the system with the given input in the world. Unlike <a href=\"bevy_ecs/system/trait.System.html#method.run\" title=\"method bevy_ecs::system::System::run\"><code>System::run</code></a>, this function\ncan be called in parallel with other systems and may break Rust’s aliasing rules\nif used incorrectly, making it unsafe to call. <a href=\"bevy_ecs/system/trait.System.html#tymethod.run_unsafe\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#189-200\">Source</a><a href=\"#method.run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#method.run\" class=\"fn\">run</a>(&amp;mut self, input: <a class=\"type\" href=\"bevy_ecs/system/type.SystemIn.html\" title=\"type bevy_ecs::system::SystemIn\">SystemIn</a>&lt;'_, Self&gt;, world: &amp;mut <a class=\"struct\" href=\"bevy_ecs/world/struct.World.html\" title=\"struct bevy_ecs::world::World\">World</a>) -&gt; Self::<a class=\"associatedtype\" href=\"bevy_ecs/system/trait.System.html#associatedtype.Out\" title=\"type bevy_ecs::system::System::Out\">Out</a></h4></section></summary><div class='docblock'>Runs the system with the given input in the world. <a href=\"bevy_ecs/system/trait.System.html#method.run\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#203-206\">Source</a><a href=\"#method.apply_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.apply_deferred\" class=\"fn\">apply_deferred</a>(&amp;mut self, world: &amp;mut <a class=\"struct\" href=\"bevy_ecs/world/struct.World.html\" title=\"struct bevy_ecs::world::World\">World</a>)</h4></section></summary><div class='docblock'>Applies any <a href=\"bevy_ecs/system/struct.Deferred.html\" title=\"struct bevy_ecs::system::Deferred\"><code>Deferred</code></a> system parameters (or other system buffers) of this system to the world. <a href=\"bevy_ecs/system/trait.System.html#tymethod.apply_deferred\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.queue_deferred\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#209-212\">Source</a><a href=\"#method.queue_deferred\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.queue_deferred\" class=\"fn\">queue_deferred</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy_ecs/world/struct.DeferredWorld.html\" title=\"struct bevy_ecs::world::DeferredWorld\">DeferredWorld</a>&lt;'_&gt;)</h4></section></summary><div class='docblock'>Enqueues any <a href=\"bevy_ecs/system/struct.Deferred.html\" title=\"struct bevy_ecs::system::Deferred\"><code>Deferred</code></a> system parameters (or other system buffers)\nof this system into the world’s command buffer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_param_unsafe\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#215-218\">Source</a><a href=\"#method.validate_param_unsafe\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.validate_param_unsafe\" class=\"fn\">validate_param_unsafe</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy_ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy_ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Validates that all parameters can be acquired and that system can run without panic.\nBuilt-in executors use this to prevent invalid systems from running. <a href=\"bevy_ecs/system/trait.System.html#tymethod.validate_param_unsafe\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#220-225\">Source</a><a href=\"#method.initialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.initialize\" class=\"fn\">initialize</a>(&amp;mut self, world: &amp;mut <a class=\"struct\" href=\"bevy_ecs/world/struct.World.html\" title=\"struct bevy_ecs::world::World\">World</a>)</h4></section></summary><div class='docblock'>Initialize the system.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_archetype_component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#227-235\">Source</a><a href=\"#method.update_archetype_component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.update_archetype_component_access\" class=\"fn\">update_archetype_component_access</a>(&amp;mut self, world: <a class=\"struct\" href=\"bevy_ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy_ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'_&gt;)</h4></section></summary><div class='docblock'>Update the system’s archetype component <a href=\"bevy_ecs/query/struct.Access.html\" title=\"struct bevy_ecs::query::Access\"><code>Access</code></a>. <a href=\"bevy_ecs/system/trait.System.html#tymethod.update_archetype_component_access\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_change_tick\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#237-240\">Source</a><a href=\"#method.check_change_tick\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.check_change_tick\" class=\"fn\">check_change_tick</a>(&amp;mut self, change_tick: <a class=\"struct\" href=\"bevy_ecs/component/struct.Tick.html\" title=\"struct bevy_ecs::component::Tick\">Tick</a>)</h4></section></summary><div class='docblock'>Checks any <a href=\"bevy_ecs/component/struct.Tick.html\" title=\"struct bevy_ecs::component::Tick\"><code>Tick</code></a>s stored on this system and wraps their value if they get too old. <a href=\"bevy_ecs/system/trait.System.html#tymethod.check_change_tick\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_system_sets\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#242-246\">Source</a><a href=\"#method.default_system_sets\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#method.default_system_sets\" class=\"fn\">default_system_sets</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"bevy_ecs/schedule/type.InternedSystemSet.html\" title=\"type bevy_ecs::schedule::InternedSystemSet\">InternedSystemSet</a>&gt;</h4></section></summary><div class='docblock'>Returns the system’s default <a href=\"bevy_ecs/schedule/trait.SystemSet.html\" title=\"trait bevy_ecs::schedule::SystemSet\">system sets</a>. <a href=\"bevy_ecs/system/trait.System.html#method.default_system_sets\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_last_run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#248-250\">Source</a><a href=\"#method.get_last_run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.get_last_run\" class=\"fn\">get_last_run</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy_ecs/component/struct.Tick.html\" title=\"struct bevy_ecs::component::Tick\">Tick</a></h4></section></summary><div class='docblock'>Gets the tick indicating the last time this system ran.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_last_run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/combinator.rs.html#252-255\">Source</a><a href=\"#method.set_last_run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#tymethod.set_last_run\" class=\"fn\">set_last_run</a>(&amp;mut self, last_run: <a class=\"struct\" href=\"bevy_ecs/component/struct.Tick.html\" title=\"struct bevy_ecs::component::Tick\">Tick</a>)</h4></section></summary><div class='docblock'>Overwrites the tick indicating the last time this system ran. <a href=\"bevy_ecs/system/trait.System.html#tymethod.set_last_run\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#40-42\">Source</a><a href=\"#method.type_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#method.type_id\" class=\"fn\">type_id</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a></h4></section></summary><div class='docblock'>Returns the <a href=\"https://doc.rust-lang.org/1.84.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\"><code>TypeId</code></a> of the underlying system type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_param\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/system/system.rs.html#124-131\">Source</a><a href=\"#method.validate_param\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/system/trait.System.html#method.validate_param\" class=\"fn\">validate_param</a>(&amp;mut self, world: &amp;<a class=\"struct\" href=\"bevy_ecs/world/struct.World.html\" title=\"struct bevy_ecs::world::World\">World</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Safe version of <a href=\"bevy_ecs/system/trait.System.html#tymethod.validate_param_unsafe\" title=\"method bevy_ecs::system::System::validate_param_unsafe\"><code>System::validate_param_unsafe</code></a>.\nthat runs on exclusive, single-threaded <code>world</code> pointer.</div></details></div></details>","System","bevy_ecs::schedule::condition::And","bevy_ecs::schedule::condition::Nand","bevy_ecs::schedule::condition::Nor","bevy_ecs::schedule::condition::Or","bevy_ecs::schedule::condition::Xnor","bevy_ecs::schedule::condition::Xor"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[26346]}