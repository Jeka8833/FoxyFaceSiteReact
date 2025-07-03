---
title: Babble Settings
---

# Babble Settings

## Introduction
### How do I open the Babble Settings?

1. Start the FoxyFace program if it is not running.
2. Click on the "Settings" button as shown in the figure:<br />![OpenBabbleSettings](/images/FoxyFace/babble/settings/OpenBabbleSettings.png)<br /><br />
3. You will see the Babble Settings window open.

### How do I open the Babble Preview?

1. Start the FoxyFace program if it is not running.
2. Click on the "Preview" button as shown in the figure:<br />![OpenBabblePreview](/images/FoxyFace/babble/settings/OpenBabblePreview.png)<br /><br />
3. You will see the Babble Preview window open.

### What is FPS in the Babble category?

This value represents how many images per second the Babble neural network processes.

More information can be found [here](https://en.wikipedia.org/wiki/Frame_rate).

### What is Latency in the Babble category?

Latency in Babble refers to the average time (in milliseconds) from when a camera frame is requested to when it's completely processed by the Babble neural network. 

More information can be found [here](https://en.wikipedia.org/wiki/Latency_(engineering)).

<br/>

## Description of the available Babble options

:::warning

Don't forget to click the "Apply and Save" button after changing the settings!

:::

### Use Babble neural network

This setting controls whether the Project Babble neural network is active or completely turned off. 

Turning off the neural network can be beneficial if the FoxyFace app uses too many of your computer's resources. However, when the neural network is disabled, features like cheek and tongue tracking will not be available.

### Max head up-down / left-right rotation degree

:::info

If "Use Babble neural network" is enabled but Babble Preview shows "No Image" the set maximum head rotation angle is likely too small. Try increasing the value.

:::

This setting defines the maximum angle (up, down, left, or right) your head can rotate. Project Babble's neural network will temporarily turn off if your head turns to an angle larger than this specified value. This mechanism prevents unexpected or erratic neural network behavior when you make sharp or extreme head movements.

### Mincutoff / Beta

Adjusts the suppression of spikes and jitter of parameter values during face tracking.

These options are difficult for beginners to set up, but instructions on how to set them up can be found [here](https://gery.casiez.net/1euro/). You can also see the effects of changing OneEuroFilter parameters on the [demonstration site](https://gery.casiez.net/1euro/InteractiveDemo/). These sites will probably help you understand how to set up Mincutoff and Beta.

### Custom Babble Model Path:

This field allows you to specify the exact path to the neural network model you want the FoxyFace app to use for Project Babble.

Also, don't forget to [update the neural network](/FoxyFace/ui/babble/Update-Babble-Model.md).

### Thread Count / Try to use GPU acceleration / Allow Spinning

These parameters affect the performance of the neural network.

[Thread Count](https://onnxruntime.ai/docs/performance/tune-performance/threading.html#set-intra-op-thread-affinity) - Affects how many CPU threads can be used to divide the computation within the neural network. Almost no effect on performance if GPU is used.

Try to use GPU acceleration - It will be tried using [DirectML](https://learn.microsoft.com/en-us/windows/ai/directml/dml) for Windows or [CUDA](https://en.wikipedia.org/wiki/CUDA) for Linux. If the video card does not support these technologies, the calculations will be performed on the CPU.

[Allow Spinning](https://onnxruntime.ai/docs/performance/tune-performance/threading.html#thread-spinning-behavior) - Enabling this feature should reduce the latency of face tracking, but at the cost of increased CPU resource consumption. But in practice, you probably won't notice any change, although it depends on many factors.