# Shinobi Code Extension

Our VSCode Extension is still in alpha stage and is unstable. We are pushing updates frequently to make it better.
This page describes the development state of the extension.

## Extension - Working

There are two buttons:

1. **Train** - Get a hang of all handsigns and jutsu before trying the real extension  
(Launches [demo.shinobi-code.com](https://demo.shinobi-code.com))
2. **Enter Shinobi World** - The real deal, get the Jutsu data from webapp and triggers commands based on Jutsu recieved (Launches [app.shinobi-code.com](https://app.shinobi-code.com))

As of today, **6/18** Jutsu are available to try in extension.

## Development State

| S.No. | Jutsu                       | Function                                                                  | Commands  | Status  |
| ----- | --------------------------- | ------------------------------------------------------------------------- | --------- | ------- |
|   1   | Shadow Clone Jutsu          | Clone from copied repo URL                                                | Get URL from clipboard,validate, get clone path from user and do git clone | ✅ |
|   2   | Summoning Jutsu             | Summon a solution from stackoverflow using copied text (mostly searching solutions for error) | Get copied text, do a google search and return top URL from stackoverflow | ✅ |
|   3   | Reanimation Jutsu           | Restart VSCode                                                            | Restart VSCode | ✅ |
|   4   | Release                     | Paste text from clipboard                                                 | Paste text in VSCode to a cursor location | ✅ |
|   5   | Fire Release Fireball Jutsu |                                                                           |           |         |
|   6   | Chidori                     |                                                                           |           |         |
|   7   | Sage mode                   |                                                                           |           |         |
|   8   | Almighty Push               |                                                                           |           |         |
|   9   | Universal Pull              |                                                                           |           |         |
|   10  | Planetary Devastation       | Close VSCode                                                              | Shutdown VSCode | ✅ |
|   11  | Sharingan                   | Start Debugging                                                           | Start a debugging session | ✅ |
|   12  | Genjutsu                    | Create Virtual Environment | Detects the nature of project (python or JS and runs command to create venv or package.json respectively) | ✅ |
|   13  | Izanagi                     |                                                                           |           |         |
|   14  | Kakashi of the Sharingan    | Copy text to clpboard                                                     | Copy selected text to clipboard | ✅ |
|   15  | Izanami                     |                                                                           |           |         |
|   16  | Susanoo                     |                                                                           |           |         |
|   17  | Amaterasu                   | Runs code                                                                 | Runs code using commands (python or JS) | ✅ |
|   18  | Kamui                       | Cut text to clipboard                                                     | Copy selected text to clipboard and delete text | ✅ |
