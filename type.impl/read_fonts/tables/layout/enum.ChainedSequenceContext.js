(function() {
    var type_impls = Object.fromEntries([["read_fonts",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3614-3632\">Source</a><a href=\"#impl-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset_data\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3616-3622\">Source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html#tymethod.offset_data\" class=\"fn\">offset_data</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/struct.FontData.html\" title=\"struct read_fonts::FontData\">FontData</a>&lt;'a&gt;</h4></section></summary><div class=\"docblock\"><p>Return the <code>FontData</code> used to resolve offsets for this table.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.format\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3625-3631\">Source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html#tymethod.format\" class=\"fn\">format</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.u16.html\">u16</a></h4></section></summary><div class=\"docblock\"><p>Format identifier: format = 1</p>\n</div></details></div></details>",0,"read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3607\">Source</a><a href=\"#impl-Clone-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3607\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3658-3662\">Source</a><a href=\"#impl-Debug-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3659-3661\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FontRead%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3634-3644\">Source</a><a href=\"#impl-FontRead%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"read_fonts/trait.FontRead.html\" title=\"trait read_fonts::FontRead\">FontRead</a>&lt;'a&gt; for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3635-3643\">Source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"read_fonts/trait.FontRead.html#tymethod.read\" class=\"fn\">read</a>(data: <a class=\"struct\" href=\"read_fonts/struct.FontData.html\" title=\"struct read_fonts::FontData\">FontData</a>&lt;'a&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"read_fonts/enum.ReadError.html\" title=\"enum read_fonts::ReadError\">ReadError</a>&gt;</h4></section></summary><div class='docblock'>Read an instance of <code>Self</code> from the provided data, performing validation. <a href=\"read_fonts/trait.FontRead.html#tymethod.read\">Read more</a></div></details></div></details>","FontRead<'a>","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SomeTable%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3665-3672\">Source</a><a href=\"#impl-SomeTable%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"read_fonts/traversal/trait.SomeTable.html\" title=\"trait read_fonts::traversal::SomeTable\">SomeTable</a>&lt;'a&gt; for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3666-3668\">Source</a><a href=\"#method.type_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"read_fonts/traversal/trait.SomeTable.html#tymethod.type_name\" class=\"fn\">type_name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>The name of this table</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_field\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3669-3671\">Source</a><a href=\"#method.get_field\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"read_fonts/traversal/trait.SomeTable.html#tymethod.get_field\" class=\"fn\">get_field</a>(&amp;self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"read_fonts/traversal/struct.Field.html\" title=\"struct read_fonts::traversal::Field\">Field</a>&lt;'a&gt;&gt;</h4></section></summary><div class='docblock'>Access this table’s fields, in declaration order.</div></details></div></details>","SomeTable<'a>","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10471]}