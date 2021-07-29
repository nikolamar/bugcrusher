
<h1 align="center">BugCrusher</h1><br />

Description [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/nikolamar/bugcrusher)
------------

BugCrusher is a tool for sending bug reports to your support. Users in your app can record bug with all the action and how it happens. Once they finish recording, they'll get two files. One file is a screen capture to make sure on which screen was user. Another file is a report with all the logs from console and reports that you created with BugCrusher API. The report can be open later by the developers to check the bug. It is recommended to encrypt this report so the end-user can't get sensitive data. Thanks for using this library 🙌 and happy hunting 🎯.

<br />

Installation
------------

You can install using `npm`

```shell
npm install @bug-crusher/client-js
```

or `yarn`.

```shell
yarn add @bug-crusher/client-js
```

<br />

Examples
--------

### Creating client

When you create a client in options arguments using a key is recommended to encrypt sensitive data but it is not required.

```js
const client = createClient({
    key: process.env.CRYPTO_KEY,
    video: { mediaSource: 'screen' },
});
```

### Start recording

If will start recording all the console logs and your reports. If the client is not created with video options it will start recording only reports and console logs.

```js
client.startRecording();
```

### Stop recording

Stops recording. Video, console logs, and report logs that you are pushing with the `pushReport` function.

```js
client.stopRecording();
```

### Whether recording is in progress

For example, in `React` app, you could check if the client started recording and then hide the modal.

```js
if (!client.isRecording()) {
    return setModal(true);
}
setModal(false);
```

### Save report to file

While you are saving the report you could name the file. It is not required to be named, it has a default name.

```js
client.saveReport('filename');
```

### Save screen recording to file

While you are saving the screen recording you could name the file. It is not required to be named, it has a default name.

```js
client.saveVideo('filename');
```

<br />

📙  Functions
-------------

| Functions | Description |
| --- | --- |
| `pushReport` | It can push any data you want to an array. You can get this data with the function `getReport` or `saveReport`. Time is added by default and type as `general` for each report. You should push in options the type and set it like `network` or anything you like so you can easily find it. Console reports have type as `console`. Keep in mind you'll have to create a hook to your fetch function to push report with function `pushReport`. |
| `startRecording` | It starts screen recording. Users have to choose which screen to record if it is supported by the browser. You'll start report recording too. |
| `stopRecording` | It stops all the recording. It also prepares video files for saving on your local machine. |
| `getReport` | It gets all the report history. It consists of an array of objects with properties `time`, `type` and `data`. |
| `saveReport` | It saves the report file that consists of all the console logs and the report you created. It is recommended to use encryption. |
| `openReport` | It opens the report, and if you are using encryption it will be decrypted. This can be added to your admin part of the app, you don't want to end-users see this report. |
| `saveVideo` | It saves the screen recording to file. |
| `isRecording` | Check is the app started recording. |
| `isHooked` | Check is app hooked to `console` logs. |