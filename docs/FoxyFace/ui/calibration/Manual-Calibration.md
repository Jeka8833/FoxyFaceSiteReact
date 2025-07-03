---
title: Manual Calibration
---

# Manual Calibration

## Introduction

### How do I open the Manual Calibration window?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenProcessingSettings](/images/FoxyFace/calibration/manual/OpenProcessingSettings.png)<br /><br />
3. You will see the Manual Calibration window open.

<br/>

## Description of tabs
### Head Global

This tab contains the head position and rotation settings. 

:::warning

Almost no avatar currently supports these parameters, so you will have to make your own avatar or use [Selfie Expression](https://wiki.vrchat.com/wiki/Selfie_Expression), see instructions [here](/FoxyFace/ui/vrcft/headrotation/Head-Rotation.md).

:::

#### Center Head Rotation -> Reset Button

Resets the head rotation calibration you may have performed with [Auto Calibration](/FoxyFace/ui/calibration/Auto-Calibration.md).

### Head Upper

This tab contains eyebrow and eye settings.

### Head Bottom

This tab contains settings for the tongue, cheeks, nose and mouth.

<br/>

## Example description for one of the parameters

![ManualCalibrationEntryExample](/images/FoxyFace/calibration/manual/ManualCalibrationEntryExaple.png)<br /><br />
Here is an example of a description of one of the parameters (The numbering in the list below matches the numbering in the photo above):
1. Parameter Name & Value:
> Shows the name of the parameter and its current value. Most of the descriptions of parameter names can be found [here](https://arkit-face-blendshapes.com/). The parameter value may not be displayed if no face is detected.
2. Parameter Source:
> There are several sources:
> - Disabled - Indicates that the parameter is disabled and will not be passed to VRChat.
> - MediaPipe - Indicates that the parameter value will be taken from the output of the MediaPipe neural networks.
> - Babble - Indicates that the parameter value will be taken from the output of the Project Babble neural network.
3. Max Negative:
> This is the lower limit for the value of the input parameter at which the output parameter will be equal to `-1`. The value will be used in the [linear interpolation formula](https://en.wikipedia.org/wiki/Linear_interpolation).
4. Neutral:
>This is the value of the input parameter at which the output parameter will be equal to 0. The value will be used in the [linear interpolation formula](https://en.wikipedia.org/wiki/Linear_interpolation).
5. Max Positive:
>This is the upper limit for the value of the input parameter at which the output parameter will be equal to `1`.The value will be used in the [linear interpolation formula](https://en.wikipedia.org/wiki/Linear_interpolation).
6. Output Value (number form) & Warning message
> "Output:" field:
> - This displays the final numerical **output value** that will be sent to VRChat for this parameter. If no face is detected, the neural network is turned off, or the parameter conflicts with another parameter, the output value will be "Nothing".
> 
> "Warning:" field:
> - "Collision with \<name\>" - This means that you need to decide which parameter is better to turn off, this one or the parameter that collided with it.
> - "Negative > Neutral" - To clear this warning, you need to increase "Neutral" until it exceeds "Negative", or decrease "Max Negative" until it is less than "Neutral".
> - "Positive < Neutral" - To clear this warning, you need to decrease "Neutral" until it is less than "Positive", or increase "Max Positive" until it exceeds "Neutral".
7. Output Value (percentage bar form):
>Here you'll see the output value sent to VRChat, displayed as a percentage bar. This rapid update provides immediate feedback, allowing you to observe even the most subtle parameter fluctuations. This visualization will be helpful for fine-tuning parameter smoothing filters, such as [Mincutoff / Beta](/FoxyFace/ui/babble/Babble-Settings.md#mincutoff--beta) for Project Babble's neural network.
