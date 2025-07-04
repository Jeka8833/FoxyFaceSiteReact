import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'FoxyFace',
    tagline: 'An application that allows you to control your avatar\'s face in VRChat using your real face.',
    favicon: 'images/general/logo.png',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://foxyface.jeka8833.pp.ua',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'Jeka8833', // Usually your GitHub org/user name.
    // projectName: 'FoxyFace', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    onBrokenAnchors: 'throw',
    onDuplicateRoutes: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Jeka8833/FoxyFaceSiteReact/tree/master',
                },
                blog: false,
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'images/general/logo.png',
        colorMode: {
            defaultMode: 'dark', // This sets the default mode to dark
            disableSwitch: false, // Set to true if you want to disable the light/dark mode switch in the navbar
            respectPrefersColorScheme: true, // Set to true if you want to respect the user's system preference for color scheme
        },
        navbar: {
            title: 'FoxyFace',
            logo: {
                alt: 'FoxyFace Logo',
                src: 'images/general/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                //{to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/Jeka8833/FoxyFace',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Additional Docs',
                    items: [
                        {
                            label: 'Documentation on GitHub',
                            href: 'https://github.com/Jeka8833/FoxyFace/wiki',
                        },
                    ],
                },
                {
                    title: 'Contact',
                    items: [
                        {
                            label: 'Here all information',
                            to: 'https://foxyface.jeka8833.pp.ua/#contact',
                        },
                    ],
                },
                {
                    title: 'Code',
                    items: [
                        {
                            label: 'FoxyFace GitHub',
                            href: 'https://github.com/Jeka8833/FoxyFace',
                        },
                        {
                            label: 'Website GitHub',
                            href: 'https://github.com/Jeka8833/FoxyFaceSiteReact',
                        },
                    ],
                },
            ],
            copyright: `Created by: <a aria-label="Jeka8833's GitHub profile page" class="link-secondary fs-4" 
href="https://github.com/Jeka8833" rel="noopener noreferrer nofollow" target="_blank">Jeka8833</a>, 
${new Date().getFullYear()} year`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },

    } satisfies Preset.ThemeConfig,
};

export default config;
