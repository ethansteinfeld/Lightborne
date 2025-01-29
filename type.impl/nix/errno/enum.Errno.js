(function() {
    var type_impls = Object.fromEntries([["nix",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-Clone-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-Debug-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#177-181\">Source</a><a href=\"#impl-Display-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#178-180\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#60-137\">Source</a><a href=\"#impl-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.last\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#62-64\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.last\" class=\"fn\">last</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns the current value of errno</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.last_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#67-69\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.last_raw\" class=\"fn\">last_raw</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.i32.html\">i32</a></h4></section></summary><div class=\"docblock\"><p>Returns the current raw i32 value of errno</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#81-83\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.set\" class=\"fn\">set</a>(self)</h4></section></summary><div class=\"docblock\"><p>Sets the value of errno.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>nix::errno::Errno;\n\nErrno::EIO.set();\n\n<span class=\"macro\">assert_eq!</span>(Errno::last(), Errno::EIO);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#86-91\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.set_raw\" class=\"fn\">set_raw</a>(errno: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.i32.html\">i32</a>)</h4></section></summary><div class=\"docblock\"><p>Sets the raw i32 value of errno.</p>\n</div></details><section id=\"method.from_i32\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#97-99\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"nix/errno/enum.Errno.html#tymethod.from_i32\" class=\"fn\">from_i32</a>(err: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 0.28.0: please use <code>Errno::from_raw()</code> instead</span></div></span><section id=\"method.from_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#101-104\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"nix/errno/enum.Errno.html#tymethod.from_raw\" class=\"fn\">from_raw</a>(err: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h4></section><section id=\"method.desc\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#106-108\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.desc\" class=\"fn\">desc</a>(self) -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#123-125\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.clear\" class=\"fn\">clear</a>()</h4></section></summary><div class=\"docblock\"><p>Sets the platform-specific errno to no-error</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>nix::errno::Errno;\n\nErrno::EIO.set();\n\nErrno::clear();\n\n<span class=\"kw\">let </span>err = Errno::last();\n<span class=\"macro\">assert_ne!</span>(err, Errno::EIO);\n<span class=\"macro\">assert_eq!</span>(err, Errno::from_raw(<span class=\"number\">0</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.result\" class=\"method\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#130-136\">Source</a><h4 class=\"code-header\">pub fn <a href=\"nix/errno/enum.Errno.html#tymethod.result\" class=\"fn\">result</a>&lt;S: <a class=\"trait\" href=\"nix/errno/trait.ErrnoSentinel.html\" title=\"trait nix::errno::ErrnoSentinel\">ErrnoSentinel</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;S&gt;&gt;(value: S) -&gt; <a class=\"type\" href=\"nix/type.Result.html\" title=\"type nix::Result\">Result</a>&lt;S&gt;</h4></section></summary><div class=\"docblock\"><p>Returns <code>Ok(value)</code> if it does not contain the sentinel value. This\nshould not be used when <code>-1</code> is not the errno sentinel value.</p>\n</div></details></div></details>",0,"nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#977-981\">Source</a><a href=\"#impl-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.EWOULDBLOCK\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#978\">Source</a><h4 class=\"code-header\">pub const <a href=\"nix/errno/enum.Errno.html#associatedconstant.EWOULDBLOCK\" class=\"constant\">EWOULDBLOCK</a>: <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a> = Errno::EAGAIN</h4></section><section id=\"associatedconstant.EDEADLOCK\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#979\">Source</a><h4 class=\"code-header\">pub const <a href=\"nix/errno/enum.Errno.html#associatedconstant.EDEADLOCK\" class=\"constant\">EDEADLOCK</a>: <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a> = Errno::EDEADLK</h4></section><section id=\"associatedconstant.ENOTSUP\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#980\">Source</a><h4 class=\"code-header\">pub const <a href=\"nix/errno/enum.Errno.html#associatedconstant.ENOTSUP\" class=\"constant\">ENOTSUP</a>: <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a> = Errno::EOPNOTSUPP</h4></section></div></details>",0,"nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#175\">Source</a><a href=\"#impl-Error-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.30.0\">1.30.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#81\">Source</a></span><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>Returns the lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#107\">Source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#117\">Source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.84.0/src/core/error.rs.html#180\">Source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type-based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/1.84.0/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-PartialEq-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","nix::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CError%3E-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#189-195\">Source</a><a href=\"#impl-TryFrom%3CError%3E-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#190\">Source</a><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#192-194\">Source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(ioerror: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Error>","nix::Error"],["<section id=\"impl-Copy-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-Copy-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section>","Copy","nix::Error"],["<section id=\"impl-Eq-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-Eq-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section>","Eq","nix::Error"],["<section id=\"impl-StructuralPartialEq-for-Errno\" class=\"impl\"><a class=\"src rightside\" href=\"src/nix/errno.rs.html#837\">Source</a><a href=\"#impl-StructuralPartialEq-for-Errno\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a></h3></section>","StructuralPartialEq","nix::Error"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23348]}