searchState.loadedDescShard("bevy_window", 0, "<code>bevy_window</code> provides a platform-agnostic interface for …\nIndicates an alias of/shortcut to something is to be …\nIndicates that the something can be scrolled in any …\nThe window will always be below <code>WindowLevel::Normal</code> and …\nThe window will always be on top of <code>WindowLevel::Normal</code> …\nApplication lifetime events\nThe window’s top-left corner should be placed at the …\nChooses either <code>Opaque</code> or <code>Inherit</code> automatically, depending …\nChooses <code>Immediate</code> -&gt; <code>Mailbox</code> -&gt; <code>Fifo</code> (on web) based on …\nChooses <code>FifoRelaxed</code> -&gt; <code>Fifo</code> based on availability.\nPosition will be set by the window manager. Bevy will …\nThe window should appear fullscreen by being borderless …\nIndicates that a cell or set of cells may be selected. …\nWindow will be centered on the selected monitor.\nMarker component for a <code>Window</code> that has been requested to …\nIndicates that the item/column can be resized …\nNotifies when text should be inserted into the editor …\nSpecifies how the alpha channel of the textures should be …\nThe cursor is confined to the window area.\nA context menu is available for the object under the …\nIndicates something is to be copied. Often rendered as an …\nA simple crosshair (e.g., short line segments resembling a …\nUses the current monitor of the window.\nAn event that is sent whenever the user’s cursor enters …\nDefines if and how the cursor is grabbed by a <code>Window</code>.\nAn event that is sent whenever the user’s cursor leaves …\nAn event reporting that the mouse cursor has moved inside …\nCursor data for a <code>Window</code>.\nUse the dark variant.\nThe platform-dependent default cursor. Often rendered as …\nNotifies when the IME was disabled.\nKeep application running headless even after closing all …\nFile is being dropped into a window.\nThe east border to be moved.\nNotifies when the IME was enabled.\nSpecifies which <code>Window</code> control buttons should be enabled.\nA more direct link to a window entity.\nUses a given <code>crate::monitor::Monitor</code> entity.\nThe east and west borders to be moved.\nDefines the specific conditions the application should …\nPresentation frames are kept in a First-In-First-Out queue …\nPresentation frames are kept in a First-In-First-Out queue …\nEvents related to files being dragged and dropped on a …\nThe window should be in “true”/“legacy” Fullscreen …\nIndicates that something can be grabbed (dragged to be …\nIndicates that something is being grabbed (dragged to be …\nHelp is available for the object under the cursor. Often …\nFile is currently being hovered over a window.\nFile hovering was canceled.\nThe application is not started yet.\nA Input Method Editor event.\nPresentation frames are not queued at all. The moment a …\nUses the monitor with the specified index.\nThe alpha channel, if it exists, of the textures is …\nStores internal <code>Window</code> state that isn’t directly …\nUse the light variant.\nThe cursor is locked inside the window area to a certain …\nPresentation frames are kept in a single-frame queue. …\nRepresents an available monitor as reported by the user’…\nReferences a screen monitor.\nIndicates something is to be moved.\nThe north border to be moved.\nThe north-east corner to be moved.\nThe north-east and south-west corners to be moved.\nIndicates that the dragged item cannot be dropped at the …\nThe cursor can freely leave the window.\nThe default group.\nA flattened representation of a window reference for …\nIndicates that the requested action will not be carried …\nThe south and north borders to be moved.\nThe north-west corner to be moved.\nThe north-west and south-east corners to be moved.\nClose application when all windows are closed\nClose application when the primary window is closed\nThe alpha channel, if it exists, of the textures is …\nThe cursor is a pointer that indicates a link. Often …\nThe alpha channel, if it exists, of the textures is …\nThe alpha channel, if it exists, of the textures is …\nNotifies when a new composing text should be set at the …\nPresentation mode for a <code>Window</code>.\nThis will be linked to the primary window that is created …\nUses the primary monitor of the system.\nA marker component for the primary monitor\nMarker <code>Component</code> for the window considered the primary …\nA progress indicator. The program is performing some …\nA wrapper over <code>RawWindowHandle</code> and <code>RawDisplayHandle</code> that …\nHolder of the <code>RawHandleWrapper</code> with wrappers, to allow use …\nAn event that indicates all of the application’s windows …\nIndicates that the item/row can be resized vertically. …\nThe application is running.\nThe south border to be moved.\nThe south-east corner to be moved.\nThe window should be in “true”/“legacy” Fullscreen …\nThe application was suspended.\nThe south-west corner to be moved.\nThe icon to display for a window.\nIndicates text that may be selected. Often rendered as an …\nA <code>RawHandleWrapper</code> that cannot be sent across threads.\nIndicates vertical-text that may be selected. Often …\nRepresents a video mode that a monitor supports\nThe west border to be moved.\nIndicates that the program is busy and the user should …\nThe application is going to be resumed. Applications have …\nThe application is going to be suspended. Applications …\nThe defining <code>Component</code> for window entities, storing …\nAn event that indicates a window’s OS-reported scale …\nAn event that is sent whenever the operating systems …\nAn event that is sent whenever a window is closed. This …\nAn event that is sent whenever a window is closing. This …\nAn event that is sent whenever a new window is created.\nAn event that is sent whenever a window is destroyed by …\nWraps all <code>bevy_window</code> and <code>bevy_input</code> events in a common …\nAn event that indicates a window has received or lost …\nSpecifies where a <code>Window</code> should appear relative to other …\nDefines the way a <code>Window</code> is displayed.\nAn event that is sent when a window is repositioned in …\nThe window has been occluded (completely hidden from view).\nA <code>Plugin</code> that defines an interface for windowing support …\nDefines where a <code>Window</code> should be placed on the screen.\nReference to a <code>Window</code>, whether it be a direct link to a …\nThe size limits on a <code>Window</code>.\nA window event that is sent whenever a window’s logical …\nControls the size of a <code>Window</code>\nAn event that indicates a window’s scale factor has …\nThe <code>Window</code> theme variant to use.\nAn event sent when the system theme changes for a window.\nA wrapper over a window.\nThe window should take a portion of the screen, using the …\nIndicates that something can be zoomed in. Often rendered …\nIndicates that something can be zoomed in. Often rendered …\nThe window scale factor as reported by the window backend.\nThe bit depth of the video mode\nThe “html canvas” element selector.\nSet the window to a specific monitor.\nChecks if the constraints are valid.\nEnables the functionality of the close button.\nClose windows in response to <code>WindowCloseRequested</code> (e.g.  …\nWhether to close windows when they are requested to be …\nHow the alpha channel of textures should be handled while …\nThe cursor options of this window. Cursor icons are set …\nThe cursor position in this window in logical pixels.\nShould the window have decorations enabled?\nThe change in the position of the cursor since the last …\nOptional hint given to the rendering API regarding the …\nRaw handle to the display server.\nSpecifies which window control buttons should be enabled.\nFetch the entity of this window reference\nWhether to exit the app when there are no open windows.\nExit the application when there are no open windows.\nExit the application when the primary window has been …\nWhether or not to fit the canvas element’s size to its …\nWhether it was focused (true) or lost focused (false).\nGet/set whether the window is focused.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nMakes the window content appear behind the titlebar.\nReturns a <code>HasWindowHandle</code> + <code>HasDisplayHandle</code> impl, which …\nWhether or not the cursor is locked by or confined within …\nToggles drawing the drop shadow behind the window.\nThe window’s client area height in logical pixels.\nThe window’s client area height in logical pixels.\nThe new logical height of the window.\nSet whether or not mouse events within <em>this</em> window are …\nShould the window use Input Method Editor?\nSets location of IME candidate box in client area …\nStores internal state that isn’t directly accessible.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn <code>true</code> if the app can be updated.\nThe maximum height the window can have.\nThe maximum width the window can have.\nEnables the functionality of the maximize button.\nThe minimum height the window can have.\nThe minimum width the window can have.\nEnables the functionality of the minimize button.\nWhich fullscreen or windowing mode should be used.\nEnables click-and-drag behavior for the entire window, not …\nThe name of the monitor\nStores the application ID (on <strong><code>Wayland</code></strong>), <code>WM_CLASS</code> (on <strong><code>X11</code></strong>) …\nCreates a <code>WindowWrapper</code> from a window.\nCreates a <code>RawHandleWrapper</code> from a <code>WindowWrapper</code>.\nCreates a new <code>WindowPosition</code> at a position.\nCreates a new <code>WindowResolution</code>.\nNormalize the window reference so that it can be compared …\nWhether it was occluded (true) or not occluded (false).\nThe cursor position in this window in physical pixels.\nThe window’s client area height in physical pixels.\nThe window’s client area height in physical pixels.\nThe height of the monitor in physical pixels\nThe position of the monitor in physical pixels\nReturns the physical size of the monitor in pixels\nThe window’s client size in physical pixels\nThe window’s client size in physical pixels\nThe resolution of the video mode\nThe window’s client area width in physical pixels.\nThe window’s client area width in physical pixels.\nThe width of the monitor in physical pixels\nThe cursor position in logical pixels.\nWhere the window moved to in physical pixels.\nWhere the window should be placed.\nThe windowing prelude.\nWhat presentation mode to give the window.\nWhether or not to stop events from propagating out of the …\nSettings for the primary window.\nSets whether this window recognizes <code>DoubleTapGesture</code>\nSets whether this window recognizes <code>PanGesture</code>, with a …\nSets whether this window recognizes <code>PinchGesture</code>\nSets whether this window recognizes <code>RotationGesture</code>\nThe refresh rate of the monitor in millihertz\nThe refresh rate in millihertz\nShould the window be resizable?\nThe limits of the window’s logical size (found in its …\nWhat resolution the window should have.\nThe window’s scale factor.\nThe ratio of physical pixels to logical pixels.\nThe new scale factor.\nThe new scale factor.\nThe scale factor of the monitor\nThe scale factor set with …\nSet the position to a specific point.\nSet the window’s logical resolution.\nSet the cursor position in this window in logical pixels.\nSetting to true will attempt to maximize the window.\nSetting to true will attempt to minimize the window.\nSet the cursor position in this window in physical pixels.\nSet the window’s physical resolution.\nSet the window’s scale factor, this may get overridden …\nSet the window’s scale factor, this will be used over …\nThe window’s client size in logical pixels\nThe window’s client size in logical pixels\nSets whether the window should be shown in the taskbar.\nCalling this will attempt to start a drag-move of the …\nCalling this will attempt to start a drag-resize of the …\nConsumes the current maximize request, if it exists. This …\nConsumes the current minimize request, if it exists. This …\nConsumes the current move request, if it exists. This …\nConsumes the current resize request, if it exists. This …\nThe new system theme.\nStores the title of the window.\nToggles showing the traffic light window buttons.\nToggles showing the window title.\nToggles drawing the titlebar.\nMakes the titlebar transparent, allowing the app content …\nShould the window be transparent?\nThe video modes that the monitor supports\nSets the window’s visibility.\nWhether the cursor is visible or not.\nThe window’s client area width in logical pixels.\nThe window’s client area width in logical pixels.\nThe new logical width of the window.\nWindow that has changed.\nWindow that has been created.\nWindow to close.\nWindow that has been closed.\nWindow that has been requested to close and is the process …\nWindow that has been destroyed.\nWindow that the cursor moved inside.\nWindow that the cursor entered.\nWindow that the cursor left.\nWindow that changed focus.\nWindow that changed occluded state.\nWindow that had its scale factor changed.\nWindow that had its scale factor changed by the backend.\nWindow that moved.\nWindow for which the system theme has changed.\nRaw handle to a window.\nWhere should the window appear relative to other …\nSets a specific theme for the window.\nBuilder method for adding a scale factor override to the …\nPath to the file that was dropped in.\nPath to the file that might be dropped in.\nWindow the file was dropped into.\nWindow a file is possibly going to be dropped into.\nWindow that had a canceled file drop.\nCursor begin and end position.\nCurrent value.\nInput string\nWindow that received the event.\nWindow that received the event.\nWindow that received the event.\nWindow that received the event.")