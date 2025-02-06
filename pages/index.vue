<template>
  <div>Home</div>
  <h3>Categories</h3>
  <ul>
    <li v-for="category in categories" :key="category.id">
      {{ category.name }}
    </li>
  </ul>

  <br />
  <h3>articles</h3>
  <pre> articles: {{ articles }} </pre>
  <div v-for="article in articles" :key="article.id">
    <h4>
      {{ article.title }}
    </h4>
    <p>
      {{ article.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { find } = useStrapi();

const { data: categories } = await find('categories');
const { data: articles } = await find('articles', {
  populate: ['category', 'cover'],
});
</script>
