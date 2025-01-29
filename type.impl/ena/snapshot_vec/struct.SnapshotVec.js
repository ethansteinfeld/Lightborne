(function() {
    var type_impls = Object.fromEntries([["ena",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#347-359\">Source</a><a href=\"#impl-Clone-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#352-358\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#120-132\">Source</a><a href=\"#impl-Debug-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, V, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>,\n    V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#126-131\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#148-156\">Source</a><a href=\"#impl-Default-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#149-155\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#303-308\">Source</a><a href=\"#impl-Deref-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#304\">Source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = [&lt;D as <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>&gt;::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>]</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#305-307\">Source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;[D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>]</h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#310-314\">Source</a><a href=\"#impl-DerefMut-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#311-313\">Source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut [D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>]</h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index%3Cusize%3E-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#316-321\">Source</a><a href=\"#impl-Index%3Cusize%3E-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#317\">Source</a><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.Index.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = &lt;D as <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>&gt;::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a></h4></section></summary><div class='docblock'>The returned type after indexing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#318-320\">Source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.Index.html#tymethod.index\" class=\"fn\">index</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; &amp;D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a></h4></section></summary><div class='docblock'>Performs the indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.Index.html#tymethod.index\">Read more</a></div></details></div></details>","Index<usize>","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexMut%3Cusize%3E-for-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#323-327\">Source</a><a href=\"#impl-IndexMut%3Cusize%3E-for-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.index_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#324-326\">Source</a><a href=\"#method.index_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.IndexMut.html#tymethod.index_mut\" class=\"fn\">index_mut</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; &amp;mut D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a></h4></section></summary><div class='docblock'>Performs the mutable indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/1.84.0/core/ops/index/trait.IndexMut.html#tymethod.index_mut\">Read more</a></div></details></div></details>","IndexMut<usize>","ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#158-164\">Source</a><a href=\"#impl-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#161-163\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>SnapshotVec</code>. If <code>L</code> is set to <code>()</code> then most mutating functions will not\nbe accessible without calling <code>with_log</code> and supplying a compatibly <code>UndoLogs</code> instance.</p>\n</div></details></div></details>",0,"ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#216-272\">Source</a><a href=\"#impl-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, L: <a class=\"trait\" href=\"ena/undo_log/trait.UndoLogs.html\" title=\"trait ena::undo_log::UndoLogs\">UndoLogs</a>&lt;<a class=\"enum\" href=\"ena/snapshot_vec/enum.UndoLog.html\" title=\"enum ena::snapshot_vec::UndoLog\">UndoLog</a>&lt;D&gt;&gt;&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.record\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#221-225\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.record\" class=\"fn\">record</a>(&amp;mut self, action: D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Undo\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Undo\">Undo</a>)</h4></section><section id=\"method.push\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#227-236\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.push\" class=\"fn\">push</a>(&amp;mut self, elem: D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.set\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#240-245\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.set\" class=\"fn\">set</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>, new_elem: D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>)</h4></section></summary><div class=\"docblock\"><p>Updates the element at the given index. The old value will saved (and perhaps restored) if\na snapshot is active.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_all\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#249-259\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.set_all\" class=\"fn\">set_all</a>(&amp;mut self, new_elems: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>)</h4></section></summary><div class=\"docblock\"><p>Updates all elements. Potentially more efficient – but\notherwise equivalent to – invoking <code>set</code> for each element.</p>\n</div></details><section id=\"method.update\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#261-271\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.update\" class=\"fn\">update</a>&lt;OP&gt;(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>, op: OP)<div class=\"where\">where\n    OP: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>),\n    D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></div></details>",0,"ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotVec%3CD,+V,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#274-301\">Source</a><a href=\"#impl-SnapshotVec%3CD,+V,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, V, L&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, L&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>,\n    V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt; + <a class=\"trait\" href=\"ena/undo_log/trait.Rollback.html\" title=\"trait ena::undo_log::Rollback\">Rollback</a>&lt;<a class=\"enum\" href=\"ena/snapshot_vec/enum.UndoLog.html\" title=\"enum ena::snapshot_vec::UndoLog\">UndoLog</a>&lt;D&gt;&gt;,\n    L: <a class=\"trait\" href=\"ena/undo_log/trait.Snapshots.html\" title=\"trait ena::undo_log::Snapshots\">Snapshots</a>&lt;<a class=\"enum\" href=\"ena/snapshot_vec/enum.UndoLog.html\" title=\"enum ena::snapshot_vec::UndoLog\">UndoLog</a>&lt;D&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.start_snapshot\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#280-285\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.start_snapshot\" class=\"fn\">start_snapshot</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.Snapshot.html\" title=\"struct ena::snapshot_vec::Snapshot\">Snapshot</a>&lt;L::<a class=\"associatedtype\" href=\"ena/undo_log/trait.Snapshots.html#associatedtype.Snapshot\" title=\"type ena::undo_log::Snapshots::Snapshot\">Snapshot</a>&gt;</h4></section><section id=\"method.actions_since_snapshot\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#287-289\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.actions_since_snapshot\" class=\"fn\">actions_since_snapshot</a>(\n    &amp;self,\n    snapshot: &amp;<a class=\"struct\" href=\"ena/snapshot_vec/struct.Snapshot.html\" title=\"struct ena::snapshot_vec::Snapshot\">Snapshot</a>&lt;L::<a class=\"associatedtype\" href=\"ena/undo_log/trait.Snapshots.html#associatedtype.Snapshot\" title=\"type ena::undo_log::Snapshots::Snapshot\">Snapshot</a>&gt;,\n) -&gt; &amp;[<a class=\"enum\" href=\"ena/snapshot_vec/enum.UndoLog.html\" title=\"enum ena::snapshot_vec::UndoLog\">UndoLog</a>&lt;D&gt;]</h4></section><section id=\"method.rollback_to\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#291-294\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.rollback_to\" class=\"fn\">rollback_to</a>(&amp;mut self, snapshot: <a class=\"struct\" href=\"ena/snapshot_vec/struct.Snapshot.html\" title=\"struct ena::snapshot_vec::Snapshot\">Snapshot</a>&lt;L::<a class=\"associatedtype\" href=\"ena/undo_log/trait.Snapshots.html#associatedtype.Snapshot\" title=\"type ena::undo_log::Snapshots::Snapshot\">Snapshot</a>&gt;)</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#298-300\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.commit\" class=\"fn\">commit</a>(&amp;mut self, snapshot: <a class=\"struct\" href=\"ena/snapshot_vec/struct.Snapshot.html\" title=\"struct ena::snapshot_vec::Snapshot\">Snapshot</a>&lt;L::<a class=\"associatedtype\" href=\"ena/undo_log/trait.Snapshots.html#associatedtype.Snapshot\" title=\"type ena::undo_log::Snapshots::Snapshot\">Snapshot</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Commits all changes since the last snapshot. Of course, they\ncan still be undone if there is a snapshot further out.</p>\n</div></details></div></details>",0,"ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotVec%3CD,+V,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#193-214\">Source</a><a href=\"#impl-SnapshotVec%3CD,+V,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V: <a class=\"trait\" href=\"ena/snapshot_vec/trait.VecLike.html\" title=\"trait ena::snapshot_vec::VecLike\">VecLike</a>&lt;D&gt;, D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, U&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, V, U&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#194-196\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#198-200\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; &amp;D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#205-207\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; &amp;mut D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable pointer into the vec; whatever changes you make here cannot be undone\nautomatically, so you should be sure call <code>record()</code> with some sort of suitable undo\naction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reserve\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#210-213\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.reserve\" class=\"fn\">reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class=\"docblock\"><p>Reserve space for new values, just like an ordinary vec.</p>\n</div></details></div></details>",0,"ena::snapshot_vec::SnapshotVecStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotVec%3CD,+Vec%3C%3CD+as+SnapshotVecDelegate%3E::Value%3E,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#183-191\">Source</a><a href=\"#impl-SnapshotVec%3CD,+Vec%3C%3CD+as+SnapshotVecDelegate%3E::Value%3E,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html\" title=\"trait ena::snapshot_vec::SnapshotVecDelegate\">SnapshotVecDelegate</a>, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"struct\" href=\"ena/snapshot_vec/struct.SnapshotVec.html\" title=\"struct ena::snapshot_vec::SnapshotVec\">SnapshotVec</a>&lt;D, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;D::<a class=\"associatedtype\" href=\"ena/snapshot_vec/trait.SnapshotVecDelegate.html#associatedtype.Value\" title=\"type ena::snapshot_vec::SnapshotVecDelegate::Value\">Value</a>&gt;, L&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/ena/snapshot_vec.rs.html#184-190\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ena/snapshot_vec/struct.SnapshotVec.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></div></details>",0,"ena::snapshot_vec::SnapshotVecStorage"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[32418]}