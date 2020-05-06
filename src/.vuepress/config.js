module.exports = {
    title: '鹿児島のICT＆プログラミング教室 ニコプロ',
    description: '小中学生向け！鹿児島のICT＆プログラミング教室です。Scratch（スクラッチ）やLEGOロボットでICT＆プログラミングを楽しく学ぼう！',
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    plugins: [
        ["@vuepress/blog"],
        ['@vuepress/back-to-top'],
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet' }]
    ],
    themeConfig: {
        nav: [
            { text: 'ニコプロって？', link: '/about/' },
            {
                text: 'プログラミング教室',
                items: [
                    { text: 'コンセプト・効果・特徴', link: '/programming/merit/' },
                    { text: 'コース紹介', link: '/programming/course-price/' },
                    { text: '体験会', link: '/programming/taiken/' },
                    { text: '入会の流れ', link: '/programming/join/' }
                ]
            },
            { text: '教室案内   ', link: '/class/' },
            { text: 'ブログ', link: '/_posts/' },
            { text: 'お問い合わせ', link: '/contact/' },
        ],
        logo: '/img/logo.png',
        search: false,
        sidebar: 'auto',
    },
}