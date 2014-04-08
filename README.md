opera-switch-tabs-ctrl-pgup-pgdn
================================

Modern Opera (based on Chromium) doesn't seem to allow changing key bindings, and
I seriously dislike it's built-in ones for switching tabs.

This extension binds the Control-PageUp and Control-PageDown keys (on both OSX
and Windows) to change tabs, as works in Firefox and Chrome.

To use it, just clone this repo, enable Developer mode in Opera, then in the
Extensions tab do "Load Unpacked Extension..." (the button) on the cloned directory.

To Do
-----

* The javascript seems to be firing twice for every action, and I don't know why.  Fix this.
* When switching to the tab to the left, wrap around when at the left most tab (eg to the right most tab)
