
<h1 align="center">BugCrusher</h1>

Description [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/nikolamar/bugcrusher)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

BugCrusher is a tool for sending bug reports to your support. Users in your app can record bug with all the action and how it happens. Once they finish recording, they'll get two files. One file is a screen capture to make sure on which screen was user. Another file is a report with all the logs from console and reports that you created with BugCrusher API. The report can be open later by the developers to check the bug. It is recommended to encrypt this report so the end-user can't get sensitive data. Thanks for using this library 🙌 it and happy hunting 🎯


Installation
------------

You can install using `npm`.

```shell
npm install @bugcrusher/bcjs
```

or `yarn`.

```shell
yarn add @bugcrusher/bcjs
```
Examples
--------

### Creating client `createClient()`

When you create a client in options arguments using a key is recommended to encrypt sensitive data but it is not required.

```js
const client = createClient({
    key: process.env.CRYPTO_KEY,
    video: { mediaSource: 'screen' },
});
```

### Is recording `isRecording()`

For example, in `React` app, you could check if the client started recording and then hide the modal.

```js
if (!client.isRecording()) {
    return setModal(true);
}
setModal(false);
```

### Start recording `startRecording()`

If you start recording if the client is not created with video options it will start only report recording.

```js
client.startRecording();
```

### Save report `saveReport()`

While you are saving the report you could name the file. It is not required to be named, it has a default.

```js
client.saveReport('filename');
```

### Save screen recording `saveVideo()`

While you are saving the screen recording you could name the file. It is not required to be named, it has a default.

```js
client.saveVideo('filename');
```

📙  Functions
-------------

| Functions | Description |
| --- | --- |
| `pushReport` | List all *new or modified* files |
| `startRecording` | It starts screen recording. Users have to choose which screen to record if it is supported by the browser. You'll start report recording too. Keep in mind you'll have to create a hook to your fetch function to push report with function `pushReport`. |
| `stopRecording` | It stops all the recording. It also prepares video files for saving on your local machine. |
| `getReport` | It gets all the report history. It consists of an array of objects with `time`, `type`, and `data` properties. You are pushing this data with the function `pushReport`. Report type can be changed to any string likes let's say `network` type. |
| `saveReport` | It saves just the report file. One is a screen recording and the other is a report which consists of all the console logs, warning, errors and your report is included that you are pushing with pushReport function. |
| `openReport` | It opens the report, and if you are using encryption it will be decrypted. This can be added to your admin part of the app, you don't want to end-users see this report. |
| `saveVideo` | It saves just the screen recording to file. |
| `isRecording` | Check if the library successfully recording the screen. |
| `isHooked` | Check is library successfully hooked to `console` logs, warnings, and errors. |