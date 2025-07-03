---
title: Ensure that the installation is correct
---

# Ensure that the installation is correct

To find out whether you have successfully installed or uninstalled the module, follow these steps in order:
1. Click the "Output" tab.<br />![OpenOutputTab](/images/FoxyFaceVRCFTInterface/OpenOutputTab.png)<br /><br />
2. You will see the following similar pattern:<br />![FindSuccessInLog](/images/FoxyFaceVRCFTInterface/install-update-uninstall/validate/FindSuccessInLog.png)<br /><br />
3. [Try to understand what you got](#log-interpretation)

## Log interpretation

- If you have successfully found the string: `[FoxyFaceVRCFTInterface] Information: FoxyFace interface is waiting for connection.` - this means that the module has been **successfully installed** and is ready for use.
<br />

- If you found only mentions of the `FoxyFaceVRCFTInterface` prefix - then **something is broken**, and you need to read the log to understand the cause.
<br />

- If you can't find anything similar to `FoxyFaceVRCFTInterface` at all - then the **module is not installed**.