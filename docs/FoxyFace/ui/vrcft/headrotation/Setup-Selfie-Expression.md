---
title: Setup Selfie Expression
---

# Setup Selfie Expression

:::tip

At the time of writing this article, this feature is available for free in the beta version of VRChat, so you will need
to select the **open beta of VRChat in Steam settings**.
[Here's how to do it.](https://help.vrchat.com/hc/en-us/articles/360062658933-How-do-I-use-the-VRChat-Open-Beta)

:::

:::info

The main problem is that one camera can be used by only one application (the camera in most cases cannot split the video
stream between two applications). These instructions will help you split a video stream into two applications.

:::

1. [Install OBS application](https://obsproject.com/). Video instructions can be
   found [here](https://www.youtube.com/watch?v=QGxdTGhhJyI), but you don't need to create any scenes, just install the
   app.
2. Close VRChat and FoxyFace app.
3. Add your physical webcam to the scene in OBS; the instructions on how to do this
   are [here](https://www.youtube.com/watch?v=a_qugtLsuL0). If you are using your phone as a webcam, then use the
   instructions [here](/FoxyFace/connection/Connect-DroidCam.md).
4. Click on the Start Virtual Camera button, [here](https://obsproject.com/kb/virtual-camera-guide) are instructions on
   how to do it.
5. Start VRChat game.
6. Enable Selfie Expression, video instructions can be found [here](https://www.youtube.com/watch?v=iThnerZERdo).
7. If you have not selected OBS Virtual Camera, then click on the Change Webcam Device
   button.<br />![ChangeCameraVRChat](/images/FoxyFace/vrcft/ChangeCameraVRChat.png)<br /><br />
8. Check the box next to OBS Virtual
   Camera.<br />![SelectOBSVRChat](/images/FoxyFace/vrcft/SelectOBSVRChat.png)<br /><br />
9. Start FoxyFace
   app.<br />![FoxyFaceMainScreen](/images/FoxyFace/install-update-uninstall/install/FoxyFaceMainScreen.png)<br /><br />
10. Open the camera settings in
    FoxyFace.<br />![OpenCameraSettings](/images/FoxyFace/camera/settings/OpenCameraSettings.png)<br /><br />
11. Hardest part. Select OBS Virtual Camera in FoxyFace.

> To do this, check if the image from OBS matches
> the [Camera Preview](/FoxyFace/ui/camera/Camera-Settings.md#open-camera-preview-when-you-set-up-the-camera) in
> FoxyFace; if not, increase
> the [Camera ID](/FoxyFace/ui/camera/Camera-Settings.md#camera-id) by one and click the "Apply and Save" button. Repeat
> this procedure until
> the image from OBS matches the Camera Preview in FoxyFace. The camera count in Camera ID starts from
> 0.<br />![FoxyFaceCameraID](/images/FoxyFace/vrcft/FoxyFaceCameraID.png)<br /><br />

12. Next, customize the parameters you want to track by disabling the unnecessary ones in the avatar, FoxyFace, or
    Selfie Expression settings.