# Known Issues

## 1. Slow Video Feed

When Record button is pressed, one can notice that there is slight lag between frames.
This is due to the processing that is performed on the background of each frame.  

We have drastically improved this lag by offloading the heavy processing from frontend and providing it as a WASM (WebAssembly) backend.

In future releases, will try to remove this lag by offloading some more processing to WASM.

**Nerd Facts:**  
Tested using Ryzen 5 and 8GB ddr4 ram, performance was faster in Ubuntu when compared with Windows.  
Idle memory consumption is around 70% in Windows and 19.75% in Ubuntu

## 2. Inaccurate HandSigns

Inaccuracies in handsigns can be observed (mostly conflict with "Bird" handsign) as we are using the model without post-processing.  
To read more, go to [detection model](/docs/model) page.

## 3. Sharingan

Lag in video when sharingan is used for first time. Probably a bug, will fix this.
