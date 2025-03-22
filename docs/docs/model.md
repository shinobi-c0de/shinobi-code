# Detection Model

## Hand Sign Detection Model

As mentioned in [disclaimer](/docs/disclaimer) page, the model I used to detect handsigns is a publically available model and is created by [Kazuhito](https://github.com/Kazuhito00) san. Thanks to his good work, I was able to develop this project sooner than expected.

If you take a glance at my code and Kazuhito san's, you will notice a lot of similarity.  
This is basically a port of python code to Javascript built on top of Kazuhito san's work to address the limitations.

The python code requires one to install dependencies and setup properly which can only be done by another developer or someone who knows the basics of python language.  
But I wanted to keep the entry barrier low and let even the non-devs to experience this.
Hence I decided to make a web app which is easily accessible by anyone at a click of button, no install headaches.  
Also, it makes sense when you want to integrate this as a VSCode extension.

### About the model

[NARUTO-HandSignDetection](https://github.com/Kazuhito00/NARUTO-HandSignDetection) repo offers two publically available models, one with post processing and one without.
I have used the model without post-processing in **Version 1** so that I can build an MVP without worrying about any extra processing.

This will be upgraded to the model with post processing in the near furture versions.
