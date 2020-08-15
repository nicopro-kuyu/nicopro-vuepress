<template>
  <v-container>
    <v-row dense>
      <v-col v-for="post in displayPosts" :key="post.index" cols="12">
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
                    <span class="post-date">{{ post.frontmatter.date | moment }}</span>
                    <span class="post-category">{{ post.frontmatter.category }}</span>
                  </div>
                  <v-card-title class="post-title" v-text="post.title"></v-card-title>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <div class="pt-2">
      <v-pagination
        v-model="page"
        :length="length"
        :total-visible="totalVisible"
        @input="pageChange"
        color="#ff8000"
      ></v-pagination>
    </div>
  </v-container>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      page: 1,
      length: 0,
      totalVisible: 7,
      pageSize: 10,
      posts: [],
      displayPosts: [],
    };
  },
  filters: {
    moment(date) {
      return moment(date).format("YYYY/MM/DD");
    },
  },
  methods: {
    pageChange: function (pageNumber) {
      this.displayPosts = this.posts.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
  mounted: function () {
    // typeがpostのmdを日付の降順で取得する
    this.posts = this.$site.pages
      .filter((page) => page.frontmatter.type == "post")
      .sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      );

    this.length = Math.ceil(this.posts.length / this.pageSize);

    this.displayPosts = this.posts.slice(
      this.pageSize * (this.page - 1),
      this.pageSize * this.page
    );
  },
};
</script>
<style scoped>
.col {
  padding: 3px 0;
}
</style>
