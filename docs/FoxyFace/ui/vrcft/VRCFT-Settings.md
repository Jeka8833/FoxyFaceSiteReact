---
title: VRCFT Settings
---

# VRCFT Settings

## Introduction

### How do I open the VRCFT Settings?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenVRCFTSettingsWindow](/images/connect/manual/OpenVRCFTSettingsWindow.png)<br /><br />
3. You will see the VRCFT Settings window open.

### What is PPS in the VRCFT category?

The value shows how many packets per second were sent to the `FoxyFaceVRCFTInterface` module.

### What is Status in the VRCFT category?

This indicates the current state of data transmission.

Here's a description of the statuses:
- Sending - FoxyFace is actively attempting to send data to the network. However, this doesn't guarantee that a recipient is receiving the data.
- IP Error - The configured IP address or port is invalid. Please check your settings.

<br/>

## Description of the available VRCFT options

:::warning

Don't forget to click the "Apply and Save" button after changing the settings!

:::

<br/>

### Connection tab

#### Find IP and Port automatically

If this option is enabled, the `FoxyFace` application will try to find the enabled `FoxyFaceVRCFTInterface` module to set the correct IP and Port.

There are cases when the application cannot find the correct IP or Port, in which case you will have to establish the [connection manually](/FoxyFace/connection/Manual-Connection.md).

#### IP / Port

Use these fields to specify the **IP address and port** where face tracking data will be sent. This is necessary to manually connect the `FoxyFace` application to the `FoxyFaceVRCFTInterface` module, more detailed instructions can be found [here](/FoxyFace/connection/Manual-Connection.md).

:::warning

You cannot change the IP or Port if the "Find IP and Port automatically" option is enabled.

:::

#### VRCFT Read Timeout (milliseconds)

Sets the delay of waiting for a [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) packet from `FoxyFace`, affects the closing speed of the `VRCFT` application. 

In most cases you don't need to change this parameter, but for those who want the `VRCFT` application to close faster, reduce the timeout value.

#### Allow initialization of other VRCFT modules

When this option is enabled, the `FoxyFaceVRCFTInterface` module tries to give way for multiple `VRCFT` modules to be loaded in parallel. But this option does not always work out of the box, you will have to experiment with the order of initialization of `VRCFT` modules.

The `MeowFace` module also has this feature and you may want to use it together with `FoxyFace`, [here are the instructions](https://github.com/Jeka8833/MeowFaceVRCFTInterface/wiki/Description-of-the-configuration-parameters#bypassothermodulesblock). 
<br/>

### Auto Run tab

On this tab, you can configure the autostart of VRChat and VRCFaceTracking applications when FoxyFace launches.

The VRChat and VRCFaceTracking applications have 3 launch modes:
- **Disabled**: The application will not autostart.
- **Steam Store**: The application will be launched via the Steam Store.
- **File Path**: The selected application file will be launched.
> - You can select the file by clicking the "..." button.
> - The "Reset Path" button will clear your selected file path.

#### Force Run button

:::warning

Don't forget to click the "Apply and Save" button.

:::

The "Force Run" button will forcibly launch the applications, allowing you to confirm your settings are correct or if you've accidentally closed any of the applications.

