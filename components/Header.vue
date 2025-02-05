<template>
  <header>
    <h1>My App Header</h1>
    <nav>
      <NuxtLink :to="localePath('index')">Home</NuxtLink>
      <NuxtLink :to="localePath('about')">About</NuxtLink>
    </nav>

    <ul>
      <li v-for="locale in availableLocales">
        <NuxtLink :to="switchLocalePath(locale.code)" :key="locale.code">
          {{ locale.name }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
