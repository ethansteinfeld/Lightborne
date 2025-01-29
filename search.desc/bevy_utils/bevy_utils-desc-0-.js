searchState.loadedDescShard("bevy_utils", 0, "General utilities for first-party Bevy engine crates.\nA <code>Hasher</code> for hashing an arbitrary stream of bytes.\nAn owned and dynamically typed Future used when you can’…\nUse <code>ConditionalSend</code> to mark an optional Send trait bound. …\nUse <code>ConditionalSendFuture</code> for a future with an optional …\nA <code>Duration</code> type to represent a span of time, typically …\nA shortcut alias for <code>hashbrown::hash_map::Entry</code>.\nA hasher builder that will create a fixed hasher.\nA <code>HashMap</code> implementing aHash, a high speed keyed hashing …\nA <code>HashSet</code> implementing aHash, a high speed keyed hashing …\nA pre-hashed value of a specific type. Pre-hashing enables …\nA measurement of a monotonically nondecreasing clock. …\nThe maximum duration.\nThe duration of one microsecond.\nThe duration of one millisecond.\nThe duration of one nanosecond.\n<code>BuildHasher</code> for types that already contain a high-quality …\nAn occupied entry.\nA type which calls a function when dropped. This can be …\nA cohesive set of thread-local values of a given type.\nA <code>BuildHasher</code> that results in a <code>PassHasher</code>.\nA no-op hash that only works on <code>u64</code>s. Will panic if …\nA <code>HashMap</code> pre-configured to use <code>Hashed</code> keys and <code>PassHash</code> …\nExtension methods intended to add functionality to …\nProvides a Hasher factory. This is typically used (e.g. by …\nThe duration of one second.\nA stable hash map implementing aHash, a high speed keyed …\nA stable hash set implementing aHash, a high speed keyed …\nA measurement of the system clock, useful for talking to …\nAn error returned from the <code>duration_since</code> and <code>elapsed</code> …\nAn error which can be returned when converting a …\nA specialized hashmap type with Key of <code>TypeId</code> Iteration …\nAn anchor in time which can be used to create new …\nA vacant entry.\nA duration of zero time.\nComputes the absolute difference between <code>self</code> and <code>other</code>.\nPanics\nPanics\nHelper macro to generate tuple pyramids. Useful to …\nHelper macro to generate tuple pyramids with their length. …\nReturns the total number of whole microseconds contained …\nReturns the total number of whole milliseconds contained …\nReturns the number of milliseconds contained by this …\nReturns the number of milliseconds contained by this …\nReturns the total number of nanoseconds contained by this …\nReturns the number of <em>whole</em> seconds contained by this …\nReturns the number of seconds contained by this <code>Duration</code> …\nReturns the number of seconds contained by this <code>Duration</code> …\nAssert that a given <code>T</code> is object safe. Will fail to compile …\nMutably borrows the thread-local value.\nConstructs a new AHasher with keys based on this …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nChecked <code>Duration</code> addition. Computes <code>self + other</code>, …\nChecked <code>Duration</code> division. Computes <code>self / other</code>, …\nReturns the amount of time elapsed from another instant to …\nChecked <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nChecked <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nClears all of the stored thread local values.\nCalls the <code>tracing::debug!</code> macro on a value.\nCall <code>debug!</code> once per call site.\nAn ergonomic abbreviation for <code>Default::default()</code> to make …\nConstructs a new AHasher with fixed keys. If <code>std</code> is …\nLike <code>tracing::trace</code>, but conditional on cargo feature …\nDivides <code>Duration</code> by <code>Duration</code> and returns <code>f32</code>.\nDivides <code>Duration</code> by <code>Duration</code> and returns <code>f64</code>.\nDivides <code>Duration</code> by <code>f32</code>.\nDivides <code>Duration</code> by <code>f64</code>.\nDrains all enqueued items from all threads and returns an …\nCollect all enqueued items from all threads and appends …\nReturns the positive duration which represents how far …\nReturns the amount of time elapsed from another instant to …\nReturns the amount of time elapsed from an earlier point …\nReturns the amount of time elapsed since this instant.\nReturns the difference from this system time to the …\nA fast impl of <code>PartialEq</code> that first checks that <code>other</code>’s …\nProcesses a <code>Result</code> by calling the <code>tracing::error!</code> macro in …\nCall <code>error!</code> once per call site.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>Duration</code> from the specified number of days.\nCreates a new <code>Duration</code> from the specified number of hours.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of whole …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of weeks.\nUtilities for working with <code>Future</code>s.\nCreate a new <code>RandomState</code> <code>BuildHasher</code> based on the provided …\nTries to get or insert the value for the given <code>key</code> using …\nThe pre-computed hash.\nCalculates the hash of a single value. This provides a …\nCalls the <code>tracing::info!</code> macro on a value.\nCall <code>info!</code> once per call site.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if this <code>Duration</code> spans no time.\nGets a mutable iterator over all of the per-thread queues.\nMultiplies <code>Duration</code> by <code>f32</code>.\nMultiplies <code>Duration</code> by <code>f64</code>.\nPre-hashes the given value using the <code>BuildHasher</code> …\nReturns an object that will invoke the specified callback …\nCreate a new <code>RandomState</code> <code>BuildHasher</code> using random keys.\nCreates a new <code>Duration</code> from the specified number of whole …\nReturns an instant corresponding to “now”.\nReturns the system time corresponding to “now”.\nCall some expression only once per call site.\nThe utilities prelude.\nSaturating <code>Duration</code> addition. Computes <code>self + other</code>, …\nReturns the amount of time elapsed from another instant to …\nSaturating <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nSaturating <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nRetrieves the thread-local value for the current thread …\nReturns the amount of time elapsed from another instant to …\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in …\nA reimplementation of the currently unstable …\nA reimplementation of the currently unstable …\nCall <code>trace!</code> once per call site.\nThe checked version of <code>from_secs_f32</code>.\nThe checked version of <code>from_secs_f64</code>.\nProcesses a <code>Result</code> by calling the <code>tracing::warn!</code> macro in …\nCall <code>warn!</code> once per call site.\nBuild a <code>RandomState</code> from a single key. The provided key …\nAllows for explicitly setting the seeds to used. All …\nPolls a future once, and returns the output if ready or …\nConsumes a future, polls it once, and immediately returns …\nSee <code>Exclusive</code> for stdlib’s upcoming implementation, …\nReturns the argument unchanged.\nBuild a mutable reference to a <code>SyncCell</code> from a mutable …\nGet a reference to this <code>SyncCell</code>’s inner value.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of a <code>SyncCell</code> from the given …\nFor types that implement <code>Sync</code>, get shared access to this …\nDeconstruct this <code>SyncCell</code> into its inner value.\n<code>UnsafeCell</code>, but <code>Sync</code>.\nThe core primitive for interior mutability in Rust.\nReturns a <code>&amp;[SyncUnsafeCell&lt;T&gt;]</code> from a <code>&amp;SyncUnsafeCell&lt;[T]&gt;</code>.\nCreates an <code>SyncUnsafeCell</code>, with the <code>Default</code> value for T.\nCreates an <code>UnsafeCell</code>, with the <code>Default</code> value for T.\nReturns the argument unchanged.\nCreates a new <code>SyncUnsafeCell&lt;T&gt;</code> containing the given value.\nReturns the argument unchanged.\nCreates a new <code>UnsafeCell&lt;T&gt;</code> containing the given value.\nReturns a <code>&amp;mut SyncUnsafeCell&lt;T&gt;</code> from a <code>&amp;mut T</code>.\nConverts from <code>&amp;mut T</code> to <code>&amp;mut UnsafeCell&lt;T&gt;</code>.\nGets a mutable pointer to the wrapped value.\nGets a mutable pointer to the wrapped value.\nReturns a mutable reference to the underlying data.\nReturns a mutable reference to the underlying data.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps the value.\nUnwraps the value, consuming the cell.\nConstructs a new instance of <code>SyncUnsafeCell</code> which will …\nConstructs a new instance of <code>UnsafeCell</code> which will wrap …\nGets a mutable pointer to the wrapped value.\nGets a mutable pointer to the wrapped value. The …")