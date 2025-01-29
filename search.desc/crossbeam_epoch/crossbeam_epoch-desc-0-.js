searchState.loadedDescShard("crossbeam_epoch", 0, "Epoch-based memory reclamation.\nThe alignment of pointer.\nAn atomic pointer that can be safely shared between …\nAn epoch-based garbage collector.\nThe error returned on failed compare-and-set operation.\nMemory orderings for compare-and-set operations.\nThe error returned on failed compare-and-swap operation.\nA guard that keeps the current thread pinned.\nThe type for initializers.\nA handle to a garbage collector.\nAn owned heap-allocated object.\nTypes that are pointed to by a single word.\nA trait for either <code>Owned</code> or <code>Shared</code> pointers.\nA pointer to an object protected by the epoch GC.\nConverts the pointer to a raw pointer (without the tag).\nConverts the pointer to a reference.\nReturns a copy of the atomic value.\nCreates another reference to the same garbage collector.\nReturns the <code>Collector</code> associated with this handle.\nReturns the <code>Collector</code> associated with this guard.\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nThe value in the atomic pointer at the time of the failed …\nThe value in the atomic pointer at the time of the failed …\nReturns the default global collector.\nStores a function so that it can be executed at some point …\nStores a destructor for an object so that it can be …\nStores a function so that it can be executed at some point …\nDereferences the given pointer.\nDereferences the pointer.\nMutably dereferences the given pointer.\nDereferences the pointer.\nDrops the object pointed to by the given pointer.\nChecks if both handles point to the same collector.\nThe ordering of the operation when it fails.\nBitwise “and” with the current tag.\nBitwise “or” with the current tag.\nFetches the pointer, and then applies a function to it …\nBitwise “xor” with the current tag.\nClears up the thread-local cache of deferred functions by …\nReturns the argument unchanged.\nReturns a new atomic pointer pointing to <code>owned</code>.\nReturns the argument unchanged.\nReturns a new atomic pointer pointing to <code>raw</code>.\nReturns a new atomic pointer pointing to <code>ptr</code>.\nReturns a new owned pointer pointing to <code>b</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a new pointer pointing to <code>raw</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a new owned pointer pointing to <code>raw</code>.\nReturns a new pointer pointing to the tagged pointer <code>data</code>.\nReturns a new pointer pointing to the tagged pointer <code>data</code>.\nInitializes a with the given initializer.\nAllocates <code>value</code> on the heap and returns a new atomic …\nAllocates <code>value</code> on the heap and returns a new owned …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the owned pointer into a <code>Box</code>.\nTakes ownership of the pointee.\nTakes ownership of the pointee.\nConverts the owned pointer into a <code>Shared</code>.\nReturns the machine representation of the pointer.\nReturns <code>true</code> if the pointer is null.\nReturns <code>true</code> if the current thread is pinned.\nReturns <code>true</code> if the handle is pinned.\nLoads a <code>Shared</code> from the atomic pointer.\nLoads a <code>Shared</code> from the atomic pointer using a “consume…\nAllocates <code>value</code> on the heap and returns a new atomic …\nAllocates <code>value</code> on the heap and returns a new owned …\nCreates a new collector.\nThe new value, which the operation failed to store.\nThe new value, which the operation failed to store.\nReturns a new null atomic pointer.\nReturns a new null pointer.\nPins the current thread.\nPins the handle.\nRegisters a new handle for the collector.\nUnpins and then immediately re-pins the thread.\nTemporarily unpins the thread, executes the given function …\nStores a <code>Shared</code> or <code>Owned</code> pointer into the atomic pointer.\nThe ordering of the operation when it succeeds.\nStores a <code>Shared</code> or <code>Owned</code> pointer into the atomic pointer, …\nReturns the tag stored within the pointer.\nReturns the tag stored within the pointer.\nTakes ownership of the pointee if it is non-null.\nTakes ownership of the pointee if it is not null.\nReturns a reference to a dummy guard that allows …\nReturns the same pointer, but tagged with <code>tag</code>. <code>tag</code> is …\nReturns the same pointer, but tagged with <code>tag</code>. <code>tag</code> is …")