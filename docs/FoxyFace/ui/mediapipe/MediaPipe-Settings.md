---
title: MediaPipe Settings
---

# MediaPipe Settings

## Introduction

### How do I open the MediaPipe Settings?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenMediaPipeSettings](/images/FoxyFace/mediapipe/settings/OpenMediaPipeSettings.png)<br /><br />
3. You will see the MediaPipe Settings window open.

### How do I open the MediaPipe Preview?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenMediaPipePreview](/images/FoxyFace/mediapipe/settings/OpenMediaPipePreview.png)<br /><br />
3. You will see the MediaPipe Preview window open.

### What is FPS in the MediaPipe category?

This value represents how many images per second the MediaPipe neural networks processes.

More information can be found [here](https://en.wikipedia.org/wiki/Frame_rate).

### What is Latency in the MediaPipe category?

Latency in MediaPipe refers to the average time (in milliseconds) from when a camera frame is requested to when it's completely processed by the MediaPipe neural networks. 

More information can be found [here](https://en.wikipedia.org/wiki/Latency_(engineering)).

<br/>

## Description of the available MediaPipe options


:::warning

Don't forget to click the "Apply and Save" button after changing the settings!

:::

### Enable FPS Limit / Max FPS Limit

Enabling the option will result in FPS limitation. This is necessary to reduce the load on your PC. 

For example, when [Selfie Expression](https://wiki.vrchat.com/wiki/Selfie_Expression) has too much lag due to CPU load and you are not comfortable with it, you can reduce the CPU load by setting the "Max FPS Limit" in FoxyFace.

### Min face detection / face presence / tracking confidence

:::warning

To apply the changed options, you need to click on the "Apply and Save" button and then **restart** the FoxyFace application.

:::

These parameters are responsible for the accuracy of face detection. A description of each option can be found [here](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker).

Changing these options is only necessary if MediaPipe Preview Window shows "No Image" even if you are looking into the camera.