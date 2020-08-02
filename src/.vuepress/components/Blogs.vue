<template>
  <div class="blog-container">
    <div v-for="page in pages">
      <div class="blog-card">
        <router-link :to="page.path">
          <img class="blog-image" :src="page.frontmatter.img" />
        </router-link>
        <div class="blog-detail">
          <span class="blog-category">{{ page.frontmatter.category }}</span>
          <div class="blog-date">{{ page.frontmatter.date }}</div>
          <router-link class="blog-title" :to="page.path">{{ page.title }}</router-link>
          <div class="blog-description">{{ page.frontmatter.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "util";

export default {
  computed: {
    pages() {
      // typeがblogのmdを日付の降順で取得する
      return this.$site.pages
        .filter((page) => page.frontmatter.type == "blog")
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
  //   data() {
  //     return {
  //       pages: [],
  //     };
  //   },
  //   mounted() {
  //     this.$site.pages.forEach((page) => {
  //       if (page.frontmatter.type === "blog") {
  //         this.pages.push(page);
  //       }
  //     });
  //   },
};
</script>
<style scoped>
.blog-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.blog-card {
  width: 600px;
  height: 150px;
  margin: 20px;
  /* border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px; */
  display: flex;
  align-items: center;
}
.blog-image {
  /* height: 100%; */
  float: left;
  height: 150px;
  width: 150px;
  margin: 0;
}
.blog-image img {
  /* height: 100%; */
  height: 150px;
  width: 150px;
  border-radius: 5px;
}
/* 記事一覧の詳細部分 */
.blog-detail {
  display: inline-block;
  width: 500px;
}
.blog-detail .blog-title {
  margin-top: 0px;
  margin-bottom: 1.2rem;
}
.blog-detail .blog-category {
  background-color: #fff687;
  border-radius: 15px;
  color: #000000;
  padding: 5px 8px 5px 8px;
}
.blog-detail .blog-date {
  color: #8b8b8b;
  margin-left: 1rem;
}
.blog-detail .description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
