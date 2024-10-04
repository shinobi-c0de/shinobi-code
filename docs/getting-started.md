# Getting Started

Shinobi Code is a VSCode Extension but that doesn't mean we are going to leave the non-devs in the dark.

For non-devs, please click below button.

<a href="https://app.shinobi-code.com" class="vp-button brand" target="_blank">Shinobi Code App</a>

For devs, click below button and install the extension.

<div style="display: flex; align-items: center;">
    <a href="https://marketplace.visualstudio.com/items?itemName=your-extension-id" class="vp-button brand" target="_blank" style="display: flex; align-items: center; text-decoration: none;">
        <img src="/vscode.png" style="width: 20px; height: 20px; margin-right: 8px;">
        Get it on VS Code Marketplace
    </a>
</div>

::: info Note
VSCode Extension is still in development..  
For the time being, please use the demo webapp.  
:::

## Demo App

**Shinobi Code** is not launched, please use the demo web app for now.

<a href="https://demo.shinobi-code.com" class="vp-button brand" target="_blank">Shinobi Code Demo</a>

## Follow below steps, after visting the demo site

1. Click on the record button (Konoha Logo) to capture your speech and Handsigns.

<div align="center">
    <img width=80% src="/shinobi-code-button.png"/>
</div>

2. First, shout out any jutsu name loud and clear. (Please refer [Speech Text](speech) page)
3. After speech text is identified correctly, perform the required hand signs as mentioned in [Jutsu](jutsu) page.
4. If handsigns are performed correctly, jutsu should be detected. (Jutsu is diplayed at the footer of video)

::: info Note
For the handsigns to be detected correctly, please make sure to be in a **well lit environment** and perform all the handsign below neck-level as the model was trained in these conditions.
:::

::: warning Permissions
Shinobi Code needs access to webcam video and mic audio.
Please see [Disclaimer](/docs/disclaimer) page to understand how we process your video and audio. Dont' worry, we don't.
:::
