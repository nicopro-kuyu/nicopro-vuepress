module.exports = {
    title: '鹿児島のICT＆プログラミング教室 ニコプロ',
    description: '小中学生向け！鹿児島のICT＆プログラミング教室です。パソコンとScratch（スクラッチ）を使ってICT＆プログラミングを楽しく学ぼう！',
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    plugins: [
        // ['@vuepress/blog',
        //     {
        //         directories: [
        //             {
        //                 id: "post",
        //                 dirname: "_posts",
        //                 pagination: {
        //                     lengthPerPage: 10
        //                 }
        //             }
        //         ],
        //         frontmatters: [
        //             {
        //                 id: "category",
        //                 keys: ["category"],
        //                 path: "/blog/categories/",
        //                 layout: "Categories",
        //                 scopeLayout: "Category"
        //             }
        //         ]
        //     }
        // ],
        ['@vuepress/back-to-top'],
        [
            '@vuepress/plugin-google-analytics',
            { ga: 'UA-92408090-2' },
        ],
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
    ],
    themeConfig: {
        logo: '/img/logo.png',
        search: false,
        sidebar: 'auto',
        nav: [
            { text: 'ニコプロって？', link: '/about/' },
            { text: 'お知らせ', link: '/posts/' },
            {
                text: 'プログラミング教室',
                items: [
                    { text: 'コンセプト・効果・特徴', link: '/programming/merit/' },
                    { text: 'コース紹介', link: '/programming/course-price/' },
                    { text: '無料体験会', link: '/programming/taiken/' },
                    { text: '入会の流れ', link: '/programming/join/' }
                ]
            },
            { text: '教室案内   ', link: '/class/' },
            { text: '女性応援！ICTサポート', link: '/ict-support/' },
            { text: 'お問い合わせ', link: '/contact/' },
        ],
    },
}
