<script setup lang="ts">
const { data: pages } = await useAsyncData(() => queryCollection("content").all());

console.log("DATES", pages.value);
</script>

<template>
  <main class="prose-sm md:prose mx-auto p-4 md:p-8 text-balance bg-white rounded-3xl">
    <ul class="list-none m-0 p-0">
      <li
        v-for="page in pages"
        :key="page.id"
        class="mb-12 not-last:border-b border-secondary-700/50 pb-8 relative"
      >
        <h1 class="text-secondary-600 bg-white sticky top-0 py-4 rounded-t-3xl">
          {{ page.title }}
        </h1>
        <ContentRenderer :value="page" />
      </li>
    </ul>
  </main>
</template>
