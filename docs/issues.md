# Known Issues

## Slow Video Feed
When Record button is pressed, one can notice that there is slight lag between frames.
This is due to the processing that is performed on the background on each frame.  

We have drastically improved this lag by offloading the heavy processing from frontend and providing it as a WASM (WebAssembly) backend.

In future releases, will try to remove this lag by offloading some more processing to WASM.