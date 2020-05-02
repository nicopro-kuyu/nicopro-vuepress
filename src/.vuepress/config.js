module.exports = {
    title: 'ニコプロ',
    description: '小中学生向け！鹿児島のICT＆プログラミング教室です。Scratch（スクラッチ）やLEGOロボットでICT＆プログラミングを楽しく学ぼう！',
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'img/favicon.png' }],
        ['link', { href: 'css/style.css', rel: 'stylesheet' }]
    ],
    themeConfig: {
        nav: [
            { text: 'ニコプロって？', link: '/about/' },
            { text: 'ブログ', link: '/posts/' },
        ],
    }
    // // Theme to use
    // theme: 'meteorlxy',
    // themeConfig: {
    //     lang: 'ja-JP',
    //     personalInfo: {
    //         // Nickname
    //         nickname: 'nicopro',
    //         description: 'ニコプロ代表青木です！',
    //         email: 'info@nicopro.site',
    //         avatar: 'img/profile.jpg',
    //         sns: {
    //             instagram: {
    //                 account: 'nicopro.smilist',
    //                 link: 'https://www.instagram.com/nicopro.smilist',
    //             },
    //             facebook: {
    //                 account: 'nicopro.smilist',
    //                 link: 'https://business.facebook.com/nicopro.smilist/',
    //             },
    //             twitter: {
    //                 account: '@smilist_kuyu',
    //                 link: 'https://twitter.com/smilist_kuyu',
    //             },
    //             github: {
    //                 account: 'nicopro-kuyu',
    //                 link: 'https://github.com/nicopro-kuyu/',
    //             },
    //         },
    //     },

    //     header: {
    //         background: {
    //             useGeo: true,
    //         },
    //         showTitle: true,
    //     },

    //     footer: {
    //         poweredBy: true,
    //         poweredByTheme: true,
    //     },

    //     infoCard: {
    //         headerBackground: {
    //             useGeo: true,
    //         },
    //     },

    //     lastUpdated: true,

    //     nav: [
    //         { text: 'ニコプロって？', link: '/about/' },
    //         { text: 'ブログ', link: '/posts/' },
    //     ],

    //     comments: false,

    //     pagination: {
    //         perPage: 5,
    //     },

    //     defaultPages: {
    //         home: true,
    //         posts: true,
    //     },

    // },

}