import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'FoxyFace',
    tagline: 'An application that allows you to control your avatar\'s face in VRChat using your real face.',
    favicon: 'img/logo.png',

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
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/logo.png',
        colorMode: {
            defaultMode: 'dark', // This sets the default mode to dark
            disableSwitch: false, // Set to true if you want to disable the light/dark mode switch in the navbar
            respectPrefersColorScheme: true, // Set to true if you want to respect the user's system preference for color scheme
        },
        navbar: {
            title: 'FoxyFace',
            logo: {
                alt: 'FoxyFace Logo',
                src: 'img/logo.png',
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
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/FoxyFace/install-update-uninstall/install/Install-FoxyFace',
                        },
                    ],
                },
                {
                    title: 'Contact',
                    items: [
                        {
                            label: 'GitHub Issues/Discussions',
                            href: 'https://github.com/Jeka8833/FoxyFace',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Mail',
                            href: 'mailto:mail@foxyface@jeka8833.pp.ua',
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
                            href: 'https://github.com/Jeka8833/FoxyFace',
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
