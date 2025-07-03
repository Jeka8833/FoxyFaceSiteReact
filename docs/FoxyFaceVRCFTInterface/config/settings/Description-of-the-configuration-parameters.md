---
title: Description of the configuration parameters
---

# Description of the configuration parameters

:::tip

The parameter path will be given in [JSONPath](https://en.wikipedia.org/wiki/JSONPath) format. 

:::

### $.FoxyFacePort
> Range: \[0 - 65535\]

Specifies the preferred port to which FoxyFace should connect. If the port is busy, the next closest port will be selected.
<br /><br />
### $.SearchFoxyFaceTimeoutSeconds
> Range: \[0 - 65535\], Type: Seconds

The time the module will wait for a connection from FoxyFace, if no one connects during this time the module will be disabled. If set to 0, the module will wait forever for a connection.
<br /><br />
### $.ShowAllLogs
> Range: \[true | false\]

If the value is set to `true`, the module will log everything. But it can also create a very large log file. Can only be useful when trying to debug bugs in the module.