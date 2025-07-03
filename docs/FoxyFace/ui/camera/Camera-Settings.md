---
title: Camera Settings
---

# Camera Settings

## Introduction

### How do I open the Camera Settings?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenCameraSettings](/images/FoxyFace/camera/settings/OpenCameraSettings.png)<br /><br />
3. You will see the Camera Settings window open.

### Open Camera Preview when you set up the camera

This will help you see right away if you have misconfigured something.

1. Start the FoxyFace program if it is not running.
2. Click on the "Preview" button as shown in the figure:<br />![OpenCameraPreview](/images/FoxyFace/camera/settings/OpenCameraPreview.png)<br /><br />
3. You will see the Camera Preview window open.

### What is FPS in the Camera category?

This value indicates the number of frames (images) per second your camera captures. Some cameras lower the FPS when you increase the image resolution. 

More information can be found [here](https://en.wikipedia.org/wiki/Frame_rate).

<br/>

## Camera settings and description of the options

:::warning

Don't forget to click the "Apply and Save" button after changing the settings!

:::

### Camera ID

Your cameras are numbered starting from 0. If you see 'No Image' in the Camera Preview, it means the camera is either off or you've chosen the wrong **Camera ID**. If you have several cameras, simply **increase the Camera ID by one** and click "Apply and Save" each time until your camera's image appears.

### Width and Height

:::tip

How to properly configure this parameter can be found below.

:::

This is the output size of the image from the camera. 

### Vertical Flip, Horizontal Flip and Rotate 90 Degree

These options rotate and mirror your image. Needed when face tracking is mirrored or rotated. 
<br/>

## Improving the quality of facial tracking 

### Basic Recommendations

1. Illuminate the face evenly and do not use face tracking when there is a lack of light.
> 	It's not a strict rule, but you'll definitely see a difference in tracking.
2. Try to find a place for the camera to always see your whole face.
>	Ideally, the camera should be in the center of the cursor from VRChat, but this is difficult to implement in most cases. But this **does not** mean that you need to block the visibility of the monitor with your camera! If the camera can't be moved, don't move it (you probably won't lose face tracking quality).
3. If you are far away from the camera and your face takes up less than 256 pixels, think about increasing the values for Width and Height.
<br/>

### Setting Width and Height

:::tip

If you see a 640x480 value on a site or a preview, it means that Width is set to 640 and Height is set to 480.

:::

You need to find a balance between camera FPS, MediaPipe FPS, the size of the camera image, and the correctness of the MediaPipe mask overlay. This is quite a challenge, the author of the article prefers the correctness of the mask over performance.

If you don't know what resolution your camera is capable of, try to find out with the help of [this](https://webcamtests.com/resolution) site.

The width and height of the image have a very big impact on the quality of the tracking. And it is not possible to say that the higher the image resolution the better, there are cases that the mask is more accurate at a lower image resolution, but also vice versa. The reason for this is a non-ideal face finding neural network.<br/>

#### Incorrect image aspect ratio (Width and Height) is harmful

If the MediaPipe Preview window shows "No Image" or you see that the mask is not properly applied to your face (Example image below), then you have not kept the aspect ratio of the image from the camera.<br />![IncorrectMask](/images/FoxyFace/camera/settings/IncorrectMask.png)<br /><br />