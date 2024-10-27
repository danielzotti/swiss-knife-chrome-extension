# Swiss Knife: a useful Chrome extension
It's a collection of useful tools written in React.
Download it from the [Chrome web store](https://chrome.google.com/webstore/detail/swiss-knife/jnmlbmgaepngdgmkdlgfdfhofadggaln)

## Features
- Case Converter: easily convert the case of a text
- Notepad: take notes while you're surfing the internet and save it in the browser memory
- Date calcultions: add/subtract a period to a specific date or calculate the difference between 2 dates

![Swiss knife preview](https://raw.githubusercontent.com/danielzotti/swiss-knife-chrome-extension/v1.2.1/others/screenshots/Swiss%20Knife%20-%20Main%20Screenshot%20(1280x800).png)


## Why I created this extension
I wanted to play with React Typescript inside a Chrome extension.

Here a list of things I used:
- React + Typescript
- React function components & hooks
- Themes with CSS variables
- MomentJS


## How to start developing locally
- `npm run docker:start:local`
- If you need to have the `node_modules` folder in your IDE, you have several ways to achieve it:
    - Copy the `node_modules` folder from container `swiss-knife_local` to host: `docker cp swiss-knife_local:/app/node_modules/ .`
    - Run `npm run copy-node_modules` (for Linux)

NOTE: If you change the node version, you should remove and copy again the `node_modules` folder 

## TODO
- [x] Upgrade to `React 18` and `Vite`
- [ ] Fix old React code
- [ ] Upgrade `fortawesome`
- [ ] Add `luxon` and remove `moment`
