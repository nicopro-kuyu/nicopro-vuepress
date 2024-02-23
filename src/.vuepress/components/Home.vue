<template>
  <v-app>
    <v-container>
      <!-- <h2>最新のお知らせ</h2>
      <v-row dense class="px-2 pb-2 pt-4">
        <v-col v-for="post in posts" :key="post.index" cols="12">
          <router-link :to="post.path">
            <v-card min-width="300">
              <div class="post-card">
                <v-row justify="center">
                  <v-col cols="3">
                    <div class="post-image">
                      <img :src="post.frontmatter.img" />
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <div class="post-info">
                      <span class="post-date">{{
                        post.frontmatter.date | moment
                      }}</span>
                      <span class="post-category">{{
                        post.frontmatter.category
                      }}</span>
                    </div>
                    <v-card-title
                      class="post-title"
                      v-text="post.title"
                    ></v-card-title>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <div class="px-1 text-right">
        <v-btn small outlined color="yellow darken-4" dark to="/posts">
          お知らせ一覧
          <v-icon dark right>mdi-chevron-right</v-icon>
        </v-btn>
      </div> -->
      <div class="text-center">
        <div class="py-8">
          <v-btn x-large color="yellow darken-4" dark to="/contact">
            <v-icon dark left>mdi-email-outline</v-icon>お問い合わせ
            <v-icon dark right>mdi-arrow-right-circle-outline</v-icon>
          </v-btn>
        </div>
        <div class="banner">
          <div class="text-darken-1 mb-2">
            ニコプロは鹿児島キッズプログラミングコンテストを応援しています！
          </div>
          <a href="https://kpc.kagoshima-kids.com/" target="_blank">
            <img
              class="banner-image"
              src="/img/kids_kago_banner.png"
              alt="鹿児島キッズプログラミングコンテスト"
            />
          </a>
        </div>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      pageSize: 5,
      posts: [],
    };
  },
  filters: {
    moment(date) {
      return moment(date).format("YYYY/MM/DD");
    },
  },
  mounted: function () {
    // typeがpostのmdを日付の降順で取得し、5ページ抽出
    this.posts = this.$site.pages
      .filter((page) => page.frontmatter.type == "post")
      .sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
      .slice(0, this.pageSize);
  },
};
</script>
<style scoped>
.banner {
  padding: 16px;
}
.col {
  padding: 3px 0;
}
.posts-btn {
  text-align: right;
}
</style>
