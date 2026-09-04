---
title: Install FoxyFace Linux
---

# Install FoxyFace Linux

Installing on Linux is done through the terminal using Python and PyPI (`pip`).

### 1. Check Python Version

Ensure you have a supported Python version:
```bash
python3 --version
```
The Python version should be 3.12, 3.13, or 3.14.

:::danger[Important for AMD users]

If you plan to use an AMD GPU (ROCm), you **must use Python 3.12**.

:::

<br/>

### 2. Create and Activate a Virtual Environment

:::tip

Don't forget to create a separate folder for FoxyFace

:::

<br/>

It is strongly recommended to install FoxyFace inside an isolated virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

<br/>

### 3. Install FoxyFace

Now you need to find out what video card you have:

<details open>
  <summary><b>NVIDIA</b></summary>

For NVIDIA GPUs with CUDA support:
  ```bash
  pip install "foxyface[nvidia]" --extra-index-url https://download.pytorch.org/whl/cu126
  ```
</details>

<details>
  <summary><b>AMD (ROCm)</b></summary>

> ⚠️ You **must use Python 3.12**. Newer versions of Python are currently not supported.
  ```bash
  pip install "foxyface[rocm]" --extra-index-url https://repo.radeon.com/rocm/manylinux/rocm-rel-6.4.4/
  ```
</details>

<details>
  <summary><b>CPU only / Intel / Other</b></summary>

All calculations will be performed on the CPU:
  ```bash
  pip install "foxyface[cpu]"
  ```
</details>

### 4. Run the Application

Once the installation is complete, the easiest and recommended way to start the program is:

```bash
venv/bin/foxyface
```

> 💡 **Why launch it this way?**  
> When you close your terminal or open a new one later, the virtual environment will no longer be active. Running `venv/bin/foxyface` directly calls the program inside your virtual environment without forcing you to run `source venv/bin/activate` every time.  
> 
> *(If you already have your virtual environment activated in the current terminal, simply typing `foxyface` will also work).*

<br/>
<br/>


:::info[Don't forget to install the special version of VRCFaceTracking]

You can find complete instructions on how to do this on the **[“Installing VRCFaceTracking on Linux or macOS” (Click here)](/docs/FirstSetup/Install-VRCFaceTracking-Avalonia)** page.

:::

<br/>

### An error occurred during installation

This is most likely to happen because your system does not have the necessary build tools or system libraries. Check the terminal output to see what dependencies are missing in your distribution.

<br/>

### The program does not start

The program should have created a file `latest.log` in the current working directory. This file will be needed when you want to report a bug on GitHub Issues or Discord #Jeka8833.
