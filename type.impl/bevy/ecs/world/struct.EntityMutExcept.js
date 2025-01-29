(function() {
    var type_impls = Object.fromEntries([["bevy",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EntityMutExcept%3C'w,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2886\">Source</a><a href=\"#impl-Clone-for-EntityMutExcept%3C'w,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'w, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'w, B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Bundle.html\" title=\"trait bevy::ecs::prelude::Bundle\">Bundle</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2886\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'w, B&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy::animation::AnimationEntityMut"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EntityMutExcept%3C'w,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2895-2897\">Source</a><a href=\"#impl-EntityMutExcept%3C'w,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'w, B&gt; <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'w, B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Bundle.html\" title=\"trait bevy::ecs::prelude::Bundle\">Bundle</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2911\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/ecs/prelude/struct.Entity.html\" title=\"struct bevy::ecs::prelude::Entity\">Entity</a></h4></section></summary><div class=\"docblock\"><p>Returns the <a href=\"bevy/ecs/prelude/struct.Entity.html\" title=\"struct bevy::ecs::prelude::Entity\">ID</a> of the current entity.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reborrow\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2919\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.reborrow\" class=\"fn\">reborrow</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'_, B&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a new instance with a shorter lifetime.</p>\n<p>This is useful if you have <code>&amp;mut EntityMutExcept</code>, but you need\n<code>EntityMutExcept</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_readonly\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2928\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.as_readonly\" class=\"fn\">as_readonly</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityRefExcept.html\" title=\"struct bevy::ecs::world::EntityRefExcept\">EntityRefExcept</a>&lt;'_, B&gt;</h4></section></summary><div class=\"docblock\"><p>Gets read-only access to all of the entity’s components, except for the\nones in <code>CL</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2936-2938\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.get\" class=\"fn\">get</a>&lt;C&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;C</a>&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Component.html\" title=\"trait bevy::ecs::prelude::Component\">Component</a>,</div></h4></section></summary><div class=\"docblock\"><p>Gets access to the component of type <code>C</code> for the current entity. Returns\n<code>None</code> if the component doesn’t have a component of that type or if the\ntype is one of the excluded components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2948-2950\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.get_ref\" class=\"fn\">get_ref</a>&lt;C&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy/ecs/prelude/struct.Ref.html\" title=\"struct bevy::ecs::prelude::Ref\">Ref</a>&lt;'_, C&gt;&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Component.html\" title=\"trait bevy::ecs::prelude::Component\">Component</a>,</div></h4></section></summary><div class=\"docblock\"><p>Gets access to the component of type <code>C</code> for the current entity,\nincluding change detection information. Returns <code>None</code> if the component\ndoesn’t have a component of that type or if the type is one of the\nexcluded components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_ecs/world/entity_ref.rs.html#2959-2961\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy/ecs/world/struct.EntityMutExcept.html#tymethod.get_mut\" class=\"fn\">get_mut</a>&lt;C&gt;(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy/ecs/prelude/struct.Mut.html\" title=\"struct bevy::ecs::prelude::Mut\">Mut</a>&lt;'_, C&gt;&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Component.html\" title=\"trait bevy::ecs::prelude::Component\">Component</a>,</div></h4></section></summary><div class=\"docblock\"><p>Gets mutable access to the component of type <code>C</code> for the current entity.\nReturns <code>None</code> if the component doesn’t have a component of that type or\nif the type is one of the excluded components.</p>\n</div></details></div></details>",0,"bevy::animation::AnimationEntityMut"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryData-for-EntityMutExcept%3C'a,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#975-977\">Source</a><a href=\"#impl-QueryData-for-EntityMutExcept%3C'a,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, B&gt; <a class=\"trait\" href=\"bevy/ecs/query/trait.QueryData.html\" title=\"trait bevy::ecs::query::QueryData\">QueryData</a> for <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Bundle.html\" title=\"trait bevy::ecs::prelude::Bundle\">Bundle</a>,</div></h3></section></summary><div class=\"docblock\"><p>SAFETY: All accesses that <code>EntityRefExcept</code> provides are also accesses that\n<code>EntityMutExcept</code> provides.</p>\n</div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.ReadOnly\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#979\">Source</a><a href=\"#associatedtype.ReadOnly\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/query/trait.QueryData.html#associatedtype.ReadOnly\" class=\"associatedtype\">ReadOnly</a> = <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityRefExcept.html\" title=\"struct bevy::ecs::world::EntityRefExcept\">EntityRefExcept</a>&lt;'a, B&gt;</h4></section></summary><div class='docblock'>The read-only variant of this <a href=\"bevy/ecs/query/trait.QueryData.html\" title=\"trait bevy::ecs::query::QueryData\"><code>QueryData</code></a>, which satisfies the <a href=\"bevy/ecs/query/trait.ReadOnlyQueryData.html\" title=\"trait bevy::ecs::query::ReadOnlyQueryData\"><code>ReadOnlyQueryData</code></a> trait.</div></details></div></details>","QueryData","bevy::animation::AnimationEntityMut"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WorldQuery-for-EntityMutExcept%3C'a,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#889-891\">Source</a><a href=\"#impl-WorldQuery-for-EntityMutExcept%3C'a,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, B&gt; <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a> for <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"bevy/ecs/prelude/trait.Bundle.html\" title=\"trait bevy::ecs::prelude::Bundle\">Bundle</a>,</div></h3></section></summary><div class=\"docblock\"><p>SAFETY: <code>EntityMutExcept</code> guards access to all components in the bundle <code>B</code>\nand populates <code>Access</code> values so that queries that conflict with this access\nare rejected.</p>\n</div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.IS_DENSE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#914\">Source</a><a href=\"#associatedconstant.IS_DENSE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedconstant.IS_DENSE\" class=\"constant\">IS_DENSE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>Returns true if (and only if) every table of every archetype matched by this fetch contains\nall of the matched components. This is used to select a more efficient “table iterator”\nfor “dense” queries. If this returns true, <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_table\" title=\"associated function bevy::ecs::query::WorldQuery::set_table\"><code>WorldQuery::set_table</code></a> must be used before\n<a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.fetch\" title=\"associated function bevy::ecs::query::WorldQuery::fetch\"><code>WorldQuery::fetch</code></a> can be called for iterators. If this returns false,\n<a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_archetype\" title=\"associated function bevy::ecs::query::WorldQuery::set_archetype\"><code>WorldQuery::set_archetype</code></a> must be used before <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.fetch\" title=\"associated function bevy::ecs::query::WorldQuery::fetch\"><code>WorldQuery::fetch</code></a> can be called for\niterators.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Fetch\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#893\">Source</a><a href=\"#associatedtype.Fetch\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" class=\"associatedtype\">Fetch</a>&lt;'w&gt; = <a class=\"struct\" href=\"bevy/ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy::ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'w&gt;</h4></section></summary><div class='docblock'>Per archetype/table state used by this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a> to fetch <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" title=\"associated type bevy::ecs::query::WorldQuery::Item\"><code>Self::Item</code></a></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#894\">Source</a><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" class=\"associatedtype\">Item</a>&lt;'w&gt; = <a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'w, B&gt;</h4></section></summary><div class='docblock'>The item returned by this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a>\nFor <code>QueryData</code> this will be the item returned by the query.\nFor <code>QueryFilter</code> this will be either <code>()</code>, or a <code>bool</code> indicating whether the entity should be included\nor a tuple of such things.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.State\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#895\">Source</a><a href=\"#associatedtype.State\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" class=\"associatedtype\">State</a> = <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;[<a class=\"struct\" href=\"bevy/ecs/component/struct.ComponentId.html\" title=\"struct bevy::ecs::component::ComponentId\">ComponentId</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.array.html\">4</a>]&gt;</h4></section></summary><div class='docblock'>State used to construct a <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"associated type bevy::ecs::query::WorldQuery::Fetch\"><code>Self::Fetch</code></a>. This will be cached inside <a href=\"bevy/ecs/prelude/struct.QueryState.html\" title=\"struct bevy::ecs::prelude::QueryState\"><code>QueryState</code></a>,\nso it is best to move as much data / computation here as possible to reduce the cost of\nconstructing <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"associated type bevy::ecs::query::WorldQuery::Fetch\"><code>Self::Fetch</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shrink\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#897\">Source</a><a href=\"#method.shrink\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.shrink\" class=\"fn\">shrink</a>&lt;'wlong, 'wshort&gt;(\n    item: &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" title=\"type bevy::ecs::query::WorldQuery::Item\">Item</a>&lt;'wlong&gt;,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" title=\"type bevy::ecs::query::WorldQuery::Item\">Item</a>&lt;'wshort&gt;<div class=\"where\">where\n    'wlong: 'wshort,</div></h4></section></summary><div class='docblock'>This function manually implements subtyping for the query items.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shrink_fetch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#901\">Source</a><a href=\"#method.shrink_fetch\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.shrink_fetch\" class=\"fn\">shrink_fetch</a>&lt;'wlong, 'wshort&gt;(\n    fetch: &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'wlong&gt;,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'wshort&gt;<div class=\"where\">where\n    'wlong: 'wshort,</div></h4></section></summary><div class='docblock'>This function manually implements subtyping for the query fetches.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.init_fetch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#905-910\">Source</a><a href=\"#method.init_fetch\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.init_fetch\" class=\"fn\">init_fetch</a>&lt;'w&gt;(\n    world: <a class=\"struct\" href=\"bevy/ecs/world/unsafe_world_cell/struct.UnsafeWorldCell.html\" title=\"struct bevy::ecs::world::unsafe_world_cell::UnsafeWorldCell\">UnsafeWorldCell</a>&lt;'w&gt;,\n    _: &amp;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>,\n    _: <a class=\"struct\" href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\">Tick</a>,\n    _: <a class=\"struct\" href=\"bevy/ecs/component/struct.Tick.html\" title=\"struct bevy::ecs::component::Tick\">Tick</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'w&gt;</h4></section></summary><div class='docblock'>Creates a new instance of this fetch. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.init_fetch\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_archetype\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#916-921\">Source</a><a href=\"#method.set_archetype\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_archetype\" class=\"fn\">set_archetype</a>&lt;'w&gt;(\n    _: &amp;mut &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'w&gt;,\n    _: &amp;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>,\n    _: &amp;'w <a class=\"struct\" href=\"bevy/ecs/archetype/struct.Archetype.html\" title=\"struct bevy::ecs::archetype::Archetype\">Archetype</a>,\n    _: &amp;'w <a class=\"struct\" href=\"bevy/ecs/storage/struct.Table.html\" title=\"struct bevy::ecs::storage::Table\">Table</a>,\n)</h4></section></summary><div class='docblock'>Adjusts internal state to account for the next <a href=\"bevy/ecs/archetype/struct.Archetype.html\" title=\"struct bevy::ecs::archetype::Archetype\"><code>Archetype</code></a>. This will always be called on\narchetypes that match this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a>. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_archetype\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_table\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#924\">Source</a><a href=\"#method.set_table\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_table\" class=\"fn\">set_table</a>&lt;'w&gt;(\n    _: &amp;mut &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'w&gt;,\n    _: &amp;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>,\n    _: &amp;'w <a class=\"struct\" href=\"bevy/ecs/storage/struct.Table.html\" title=\"struct bevy::ecs::storage::Table\">Table</a>,\n)</h4></section></summary><div class='docblock'>Adjusts internal state to account for the next <a href=\"bevy/ecs/storage/struct.Table.html\" title=\"struct bevy::ecs::storage::Table\"><code>Table</code></a>. This will always be called on tables\nthat match this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a>. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_table\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#926-930\">Source</a><a href=\"#method.fetch\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.fetch\" class=\"fn\">fetch</a>&lt;'w&gt;(\n    world: &amp;mut &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Fetch\" title=\"type bevy::ecs::query::WorldQuery::Fetch\">Fetch</a>&lt;'w&gt;,\n    entity: <a class=\"struct\" href=\"bevy/ecs/prelude/struct.Entity.html\" title=\"struct bevy::ecs::prelude::Entity\">Entity</a>,\n    _: <a class=\"struct\" href=\"bevy/ecs/storage/struct.TableRow.html\" title=\"struct bevy::ecs::storage::TableRow\">TableRow</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" title=\"type bevy::ecs::query::WorldQuery::Item\">Item</a>&lt;'w&gt;</h4></section></summary><div class='docblock'>Fetch <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.Item\" title=\"associated type bevy::ecs::query::WorldQuery::Item\"><code>Self::Item</code></a> for either the given <code>entity</code> in the current <a href=\"bevy/ecs/storage/struct.Table.html\" title=\"struct bevy::ecs::storage::Table\"><code>Table</code></a>,\nor for the given <code>entity</code> in the current <a href=\"bevy/ecs/archetype/struct.Archetype.html\" title=\"struct bevy::ecs::archetype::Archetype\"><code>Archetype</code></a>. This must always be called after\n<a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_table\" title=\"associated function bevy::ecs::query::WorldQuery::set_table\"><code>WorldQuery::set_table</code></a> with a <code>table_row</code> in the range of the current <a href=\"bevy/ecs/storage/struct.Table.html\" title=\"struct bevy::ecs::storage::Table\"><code>Table</code></a> or after\n<a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.set_archetype\" title=\"associated function bevy::ecs::query::WorldQuery::set_archetype\"><code>WorldQuery::set_archetype</code></a>  with a <code>entity</code> in the current archetype. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.fetch\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_component_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#935-938\">Source</a><a href=\"#method.update_component_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.update_component_access\" class=\"fn\">update_component_access</a>(\n    state: &amp;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>,\n    filtered_access: &amp;mut <a class=\"struct\" href=\"bevy/ecs/query/struct.FilteredAccess.html\" title=\"struct bevy::ecs::query::FilteredAccess\">FilteredAccess</a>&lt;<a class=\"struct\" href=\"bevy/ecs/component/struct.ComponentId.html\" title=\"struct bevy::ecs::component::ComponentId\">ComponentId</a>&gt;,\n)</h4></section></summary><div class='docblock'>Adds any component accesses used by this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a> to <code>access</code>. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.update_component_access\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.init_state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#954\">Source</a><a href=\"#method.init_state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.init_state\" class=\"fn\">init_state</a>(\n    world: &amp;mut <a class=\"struct\" href=\"bevy/ecs/prelude/struct.World.html\" title=\"struct bevy::ecs::prelude::World\">World</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a></h4></section></summary><div class='docblock'>Creates and initializes a <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"associated type bevy::ecs::query::WorldQuery::State\"><code>State</code></a> for this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a> type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#958\">Source</a><a href=\"#method.get_state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.get_state\" class=\"fn\">get_state</a>(\n    components: &amp;<a class=\"struct\" href=\"bevy/ecs/component/struct.Components.html\" title=\"struct bevy::ecs::component::Components\">Components</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>&gt;</h4></section></summary><div class='docblock'>Attempts to initialize a <a href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"associated type bevy::ecs::query::WorldQuery::State\"><code>State</code></a> for this <a href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\"><code>WorldQuery</code></a> type using read-only\naccess to <a href=\"bevy/ecs/component/struct.Components.html\" title=\"struct bevy::ecs::component::Components\"><code>Components</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.matches_component_set\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/fetch.rs.html#968\">Source</a><a href=\"#method.matches_component_set\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.matches_component_set\" class=\"fn\">matches_component_set</a>(\n    _: &amp;&lt;<a class=\"struct\" href=\"bevy/ecs/world/struct.EntityMutExcept.html\" title=\"struct bevy::ecs::world::EntityMutExcept\">EntityMutExcept</a>&lt;'a, B&gt; as <a class=\"trait\" href=\"bevy/ecs/query/trait.WorldQuery.html\" title=\"trait bevy::ecs::query::WorldQuery\">WorldQuery</a>&gt;::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>,\n    _: &amp;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"bevy/ecs/component/struct.ComponentId.html\" title=\"struct bevy::ecs::component::ComponentId\">ComponentId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>true</code> if this query matches a set of components. Otherwise, returns <code>false</code>. <a href=\"bevy/ecs/query/trait.WorldQuery.html#tymethod.matches_component_set\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_access\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs/query/world_query.rs.html#108\">Source</a><a href=\"#method.set_access\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy/ecs/query/trait.WorldQuery.html#method.set_access\" class=\"fn\">set_access</a>(_state: &amp;mut Self::<a class=\"associatedtype\" href=\"bevy/ecs/query/trait.WorldQuery.html#associatedtype.State\" title=\"type bevy::ecs::query::WorldQuery::State\">State</a>, _access: &amp;<a class=\"struct\" href=\"bevy/ecs/query/struct.FilteredAccess.html\" title=\"struct bevy::ecs::query::FilteredAccess\">FilteredAccess</a>&lt;<a class=\"struct\" href=\"bevy/ecs/component/struct.ComponentId.html\" title=\"struct bevy::ecs::component::ComponentId\">ComponentId</a>&gt;)</h4></section></summary><div class='docblock'>Sets available accesses for implementors with dynamic access such as <a href=\"bevy/ecs/world/struct.FilteredEntityRef.html\" title=\"struct bevy::ecs::world::FilteredEntityRef\"><code>FilteredEntityRef</code></a>\nor <a href=\"bevy/ecs/world/struct.FilteredEntityMut.html\" title=\"struct bevy::ecs::world::FilteredEntityMut\"><code>FilteredEntityMut</code></a>. <a href=\"bevy/ecs/query/trait.WorldQuery.html#method.set_access\">Read more</a></div></details></div></details>","WorldQuery","bevy::animation::AnimationEntityMut"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[36472]}