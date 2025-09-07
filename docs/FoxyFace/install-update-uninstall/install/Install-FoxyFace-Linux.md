---
title: Install FoxyFace Linux
---

# Install FoxyFace Linux

Compiling on Linux is not a thankless task, so you'll have to work in the terminal. The whole idea is to install libraries and run a Python application, if you know simple methods on how to do that, I won't restrict you.

To install the FoxyFace program, follow these steps in order:
```bash
python3 --version
```
The Python version should be 3.12, if it is not, google how to install that version. It may work with older versions as well, but the author of the article has not tested it.<br/><br/>

```bash
git clone --recurse-submodules https://github.com/Jeka8833/FoxyFace.git
```
```bash
cd FoxyFace/FoxyFace
```
```bash
python3 -m venv venv
```
```bash
source venv/bin/activate
```
```bash
pip install -r requirements.txt
```

Now you need to find out what video card you have:
<details>
  <summary>Nvidia (Example for CUDA > 12.6 and cuDNN > 8)</summary>

  Here is an example for CUDA version 12.6 and newer:
  ```bash
  pip install torch torchvision --index-url https://download.pytorch.org/whl/cu126
  ```
  ```bash
  pip install onnxruntime-gpu
  ```
</details>

<details>
  <summary>AMD</summary>

  You need to find out the version of your ROCm and then change the numbers in the link; a list of available versions can be found [here](https://repo.radeon.com/rocm/manylinux/). Here's the command for ROCm version 6.4.3:
  ```bash
  pip install onnxruntime-rocm -f https://repo.radeon.com/rocm/manylinux/rocm-rel-6.4.3/
  ```
</details>

<details>
  <summary>No GPU or Intel</summary>

  In this case, you don't have many options; all calculations will be performed on the CPU. Here is the command that you need to execute:
  ```bash
  pip install onnxruntime
  ```
</details>

```bash
python Main.py
```


:::info

Do not forget to install the [FoxyFaceVRCFTInterface](/FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-Module.md) module after you install the FoxyFace program.

:::

<br/>

## An error occurred during installation

This is most likely to happen because your system does not have the necessary libraries. See what is missing in your system and install it.

<br/>

## For the gods of Arch Linux

It's possible that FoxyFace doesn't install on Arch Linux, the reason is currently unknown, but some solution was found by one very good person. You can read about it [here](https://github.com/Jeka8833/FoxyFace/issues/6).

<br/>

## The program does not start

The program should have created a file "latest.log", this file will be needed when you want to report a bug on GitHub Issues or Discord \#Jeka8833. 