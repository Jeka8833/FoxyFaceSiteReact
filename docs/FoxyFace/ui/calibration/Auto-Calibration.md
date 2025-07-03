---
title: Auto Calibration
---

# Auto Calibration

## Introduction

### How do I open the Auto Calibration window?

1. Start the FoxyFace program if it is not running.
2. Click on the "Auto Calibration" button as shown in the figure:<br />![OpenAutoCalibrationWindow](/images/FoxyFace/calibration/auto/OpenAutoCalibrationWindow.png)<br /><br />
3. You will see the Auto Calibration window open.

<br/>

## When should autocalibration be performed?

Automatic calibration should usually be performed when you notice that some parameter is not functioning correctly.
<br/>

## List of parameters

Not all parameter names can be understood just by reading them, so before starting calibration, it is advisable to familiarize yourself with the parameters. You can visually check some parameters [here](https://arkit-face-blendshapes.com/).
<br/>

## Description of tabs and examples of autocalibration

### Calibrate Neutral Pose

This tab allows you to calibrate your face in a neutral pose (This is when you have no emotions).

:::tip

There are some parameters that need to be calibrated separately. For example, if your mouth is closed and you try to calibrate the direction or bend of the tongue, the calibration will be poor because the camera cannot see the tongue.

:::

To perform an autocalibration of the neutral position, you need to:
1. Select the parameters you want to calibrate.
2. Set the calibration start delay ("Delay Start (Seconds):").
> The delay is needed so that you have time to switch to the open VRChat window to calibrate gaze and head position. If you do not plan to calibrate gaze or head position, you can set the delay to 0 seconds.
3. Press the "Start Calibration" button.
4. \[Optional\] Go to the VRChat window and look at the center of the game cursor.
> This is necessary if you want to calibrate gaze, if not - skip this step.
5. After hearing the sound signal that indicates the start, you need to sit still until you hear the end sound signal.
6. Check the results and if necessary, recalibrate.
> Sometimes, for example, the tongue spontaneously sticks out and autocalibration does not help, in this case, you need to do [manual calibration](/FoxyFace/ui/calibration/Manual-Calibration.md) by lowering the Neutral value of the tongue.

### Calibrate Max Pose

This tab will help you calibrate the maximum values of tracked facial parameters.

To perform an autocalibration of the maximum position, you need to:
1. Select the parameters you want to calibrate.
2. Press the "Start Calibration" button.
3. In any order, tense the "muscles" on the face that you selected in step 1.

<br/>

## Error message when performing auto-calibration

Most often, the error appears when the neural network cannot find your face, but sometimes it happens that you have turned off the parameter in the [Manual Calibration](/FoxyFace/ui/calibration/Manual-Calibration.md) menu or [turned off the neural network from Project Babble](/FoxyFace/ui/babble/Babble-Settings.md#use-babble-neural-network).
