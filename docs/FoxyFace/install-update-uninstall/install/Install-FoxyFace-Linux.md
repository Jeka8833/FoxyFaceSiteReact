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
```bash
python Main.py
```

:::info

Do not forget to install the [FoxyFaceVRCFTInterface](/FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-Module.md) module after you install the FoxyFace program.

:::

<br/>

## An error occurred during installation

This is most likely to happen because your system does not have the necessary libraries. See what is missing in your system and install it.

## The program does not start

The program should have created a file "latest.log", this file will be needed when you want to report a bug on GitHub Issues or Discord \#Jeka8833. 