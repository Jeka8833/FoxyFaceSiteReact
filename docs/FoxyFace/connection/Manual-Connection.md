---
title: Manual Connection
---

# Manual Connection

:::info

After starting VRCFT you have 60 seconds to connect FoxyFace to VRCFT, if you fail to do so you will see the following message in the console: "*The FoxyFace app failed to connect to this computer in 60 seconds. Disabling the module...*". You will have to restart VRCFT to try to connect again.

:::

Do everything in order the first time, from the second time you can skip some steps:
1. Turn off all VPNs. If you don't know what a VPN is, skip this step.
2. Disable the Windows Firewall (Make Network Private). Here are the instructions for [Windows 10](https://www.lifewire.com/change-networks-to-private-on-windows-10-5185933) or [Windows 11](https://winaero.com/how-to-make-network-private-or-public-in-windows-11/). If you don't know which network to make private, make all networks private.
3. \[Optional\] In some cases, you may need to restart your computer to apply the firewall settings.
4. Start the FoxyFace program.
5. Open the VRCFT settings window using the button as shown in the image:<br />![OpenVRCFTSettingsWindow](/images/connect/manual/OpenVRCFTSettingsWindow.png)<br /><br />
6. Uncheck “Find IP and Port Automatically”.<br />![UncheckAutoVRCFT](/images/connect/manual/UncheckAutoVRCFT.png)<br /><br />
7. Start the VRCFT program. From this point the 60 second timer starts, if you don't manage to find the right IP in 60 seconds read [this](#i-couldnt-establish-a-connection-in-60-seconds-what-should-i-do).
8. Click the "Output" tab.<br />![OpenOutputTab](/images/OpenOutputTab.png)<br /><br />
9. Remember the **IP addresses** (Highlighted in red) and **port** (Highlighted in blue) that you see in the console.<br />![IpAndPortVRCFT](/images/connect/manual/IpAndPortVRCFT.png)<br /><br />
10. Set one of the IPs in the red box, and the Port in the blue box (The IP and port can be found in step 9).<br />![SetIpAndPortFoxyFace](/images/connect/manual/SetIpAndPortFoxyFace.png)<br /><br />
11. In VRCFT, you should see the following message: "`FoxyFace app is connected successfully!`".  If there is no such message, then you need to choose **another IP** and try steps 10-11 again.<br />![FoxyFaceConnected](/images/connect/FoxyFaceConnected.png)<br /><br />

<br />

## I couldn't establish a connection in 60 seconds, what should I do?
1. Restart the VRCFT program.
2. Continue entering IP addresses that you have not yet had time to check.

<br />

## I've tried all the IPs and I can't get it to work

You can try writing `255.255.255.255` in the IP field in FoxyFace, although this is **not recommended** as it will send data from FoxyFace to every device on your local network.
If this doesn't work then you have a Firewall enabled that blocks packets, you will have to figure out how to turn off the Firewall.