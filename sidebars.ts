import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Installation and First Setup',
            items: [
                {
                    type: 'category',
                    label: 'Using another device as a camera',
                    link: {
                        type: 'doc',
                        id: 'FoxyFace/connection/Using-another-device-as-a-camera',
                    },
                    items: [
                        {
                            type: 'doc',
                            label: 'Android or iOS',
                            id: 'FoxyFace/connection/Connect-DroidCam'
                        },
                        {
                            type: 'doc',
                            label: 'Another PC',
                            id: 'FoxyFace/connection/Remoute-FoxyFace'
                        },
                    ],
                },
                {
                    type: 'doc',
                    label: 'Check connection between App and Module',
                    id: 'FoxyFace/connection/Check-Connection'
                },
                {
                    type: 'doc',
                    label: 'Update Project Babble',
                    id: 'FoxyFace/ui/babble/Update-Babble-Model'
                },
                {
                    type: 'category',
                    label: 'Setup Head Rotation',
                    link: {
                        type: 'doc',
                        id: 'FoxyFace/ui/vrcft/headrotation/Head-Rotation',
                    },
                    items: [
                        {
                            type: 'doc',
                            label: 'Install DeskyMode',
                            id: 'FoxyFace/ui/vrcft/headrotation/Install-DeskyMode'
                        },
                        {
                            type: 'doc',
                            label: 'Setup Selfie Expression',
                            id: 'FoxyFace/ui/vrcft/headrotation/Setup-Selfie-Expression'
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'FoxyFace App',
            link: {
                type: 'doc',
                id: 'FoxyFace/FoxyFace',
            },
            items: [
                {
                    type: 'category',
                    label: 'Install/Update/Uninstall',
                    link: {
                        type: 'doc',
                        id: 'FoxyFace/install-update-uninstall/Install-Update-Uninstall-FoxyFace',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Install',
                            link: {
                                type: 'doc',
                                id: 'FoxyFace/install-update-uninstall/install/Install-FoxyFace',
                            },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Windows',
                                    id: 'FoxyFace/install-update-uninstall/install/Install-FoxyFace-Windows'
                                },
                                {
                                    type: 'doc',
                                    label: 'Linux',
                                    id: 'FoxyFace/install-update-uninstall/install/Install-FoxyFace-Linux'
                                },
                                {
                                    type: 'doc',
                                    label: 'macOS',
                                    id: 'FoxyFace/install-update-uninstall/install/Install-FoxyFace-macOS'
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'Update',
                            id: 'FoxyFace/install-update-uninstall/Update-FoxyFace'
                        },
                        {
                            type: 'doc',
                            label: 'Uninstall',
                            id: 'FoxyFace/install-update-uninstall/Uninstall-FoxyFace'
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'UI Help',
                    items: [
                        {
                            type: 'doc',
                            label: 'Camera Category',
                            id: 'FoxyFace/ui/camera/Camera-Settings'
                        },
                        {
                            type: 'doc',
                            label: 'MediaPipe Category',
                            id: 'FoxyFace/ui/mediapipe/MediaPipe-Settings'
                        },
                        {
                            type: 'doc',
                            label: 'Babble Category',
                            id: 'FoxyFace/ui/babble/Babble-Settings'
                        },
                        {
                            type: 'category',
                            label: 'Processing Category',
                            link: {
                                type: 'doc',
                                id: 'FoxyFace/ui/calibration/FoxyFace-Calibration',
                            },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Auto Calibration',
                                    id: 'FoxyFace/ui/calibration/Auto-Calibration',
                                },
                                {
                                    type: 'doc',
                                    label: 'Manual Calibration',
                                    id: 'FoxyFace/ui/calibration/Manual-Calibration',
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'VRCFT Category',
                            id: 'FoxyFace/ui/vrcft/VRCFT-Settings'
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'FoxyFaceVRCFTInterface Module',
            link: {
                type: 'doc',
                id: 'FoxyFaceVRCFTInterface/FoxyFaceVRCFTInterface',
            },
            items: [
                {
                    type: 'category',
                    label: 'Install/Update/Remove',
                    link: {
                        type: 'doc',
                        id: 'FoxyFaceVRCFTInterface/install-update-uninstall/Install-Update-Uninstall-FoxyFaceVRCFTInterface',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Install',
                            link: {
                                type: 'doc',
                                id: 'FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-Module',
                            },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Install from Module Registry',
                                    id: 'FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-Module-from-Module-Registry',
                                },
                                {
                                    type: 'doc',
                                    label: 'Install from .zip archive',
                                    id: 'FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-.zip-archive',
                                },
                                {
                                    type: 'doc',
                                    label: 'Install to AppData folder',
                                    id: 'FoxyFaceVRCFTInterface/install-update-uninstall/install/Install-Module-to-AppData',
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'Update',
                            id: 'FoxyFaceVRCFTInterface/install-update-uninstall/update/Update-Module',
                        },
                        {
                            type: 'category',
                            label: 'Uninstall',
                            link: {
                                type: 'doc',
                                id: 'FoxyFaceVRCFTInterface/install-update-uninstall/uninstall/Uninstall-Module',
                            },
                            items: [
                                'FoxyFaceVRCFTInterface/install-update-uninstall/uninstall/Uninstall-Standard-Way',
                                'FoxyFaceVRCFTInterface/install-update-uninstall/uninstall/Reset-VRCFT',
                            ],
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Configuring the module',
                    link: {
                        type: 'doc',
                        id: 'FoxyFaceVRCFTInterface/config/Configuring-the-module',
                    },
                    items: [
                        'FoxyFaceVRCFTInterface/config/edit/Edit-Config',
                        'FoxyFaceVRCFTInterface/config/settings/Description-of-the-configuration-parameters',
                    ],
                },
            ],
        }],
};

export default sidebars;
