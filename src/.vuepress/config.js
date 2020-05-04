module.exports = {
    title: '鹿児島のICT＆プログラミング教室 ニコプロ',
    description: '小中学生向け！鹿児島のICT＆プログラミング教室です。Scratch（スクラッチ）やLEGOロボットでICT＆プログラミングを楽しく学ぼう！',
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    plugins: [
        "@vuepress/blog",
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet' }]
    ],
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: 'ニコプロって？', link: '/about/' },
            { text: '教室案内   ', link: '/class/' },
            { text: 'ブログ', link: '/_posts/' },
            { text: 'お問い合わせ', link: '/contact/' },
        ],
    },
}