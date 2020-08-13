<template>
  <div>
    <div class="post-container">
      <div v-for="post in displayPosts" :key="post.index">
        <div class="post-card">
          <router-link :to="post.path">
            <img class="post-image" :src="post.frontmatter.img" />
          </router-link>
          <div class="post-detail">
            <span class="post-category">{{ post.frontmatter.category }}</span>
            <div class="post-calendar">
              <v-icon>mdi-calendar</v-icon>
              <span class="post-date">{{ post.frontmatter.date | moment }}</span>
            </div>
            <router-link class="post-title" :to="post.path">{{ post.title }}</router-link>
            <div class="post-description">{{ post.frontmatter.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="length"
        :total-visible="totalVisible"
        @input="pageChange"
        color="#ff8000"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      page: 1,
      length: 0,
      totalVisible: 7,
      pageSize: 2,
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
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 20px;
  /* border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px; */
  display: flex;
  align-items: center;
}
.post-image {
  /* height: 100%; */
  float: left;
  height: 150px;
  width: 150px;
  margin: 0;
}
.post-image img {
  /* height: 100%; */
  height: 150px;
  width: 150px;
  border-radius: 5px;
}
/* 記事一覧の詳細部分 */
.post-detail {
  display: inline-block;
  width: 500px;
}
.post-detail .post-title {
  margin-top: 0px;
  margin-bottom: 1.2rem;
}
.post-detail .post-category {
  background-color: #fff687;
  border-radius: 15px;
  color: #000000;
  padding: 5px 8px 5px 8px;
}
.post-detail .post-calendar {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}
.post-detail .post-date {
  margin-left: 0.5rem;
}
.post-detail .description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
