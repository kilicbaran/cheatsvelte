// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'CheatSvelte',
    tagline: 'A cheatsheet for Svelte',
    url: 'https://cheatsvelte.pages.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'kilicbaran', // Usually your GitHub org/user name.
    projectName: 'cheatsvelte', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/kilicbaran/cheatsvelte/tree/main/',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'CheatSvelte',
                logo: {
                    alt: 'CheatSvelte Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    // {
                    //     type: 'doc',
                    //     docId: 'installation',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/kilicbaran/cheatsvelte',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
                hideOnScroll: true
            },
            footer: {
                style: 'dark',
                // links: [
                //     {
                //         title: 'Docs',
                //         items: [
                //             {
                //                 label: 'Tutorial',
                //                 to: '/docs/intro',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'Community',
                //         items: [
                //             {
                //                 label: 'Stack Overflow',
                //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //             },
                //             {
                //                 label: 'Discord',
                //                 href: 'https://discordapp.com/invite/docusaurus',
                //             },
                //             {
                //                 label: 'Twitter',
                //                 href: 'https://twitter.com/docusaurus',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'More',
                //         items: [
                //             {
                //                 label: 'Blog',
                //                 to: '/blog',
                //             },
                //             {
                //                 label: 'GitHub',
                //                 href: 'https://github.com/facebook/docusaurus',
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} CheatSvelte`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
