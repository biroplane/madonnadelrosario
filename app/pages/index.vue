<script setup lang="ts">
const { data: pages } = await useAsyncData(() => queryCollection("content").all());

console.log("DATES", pages.value);
const getPageDate = (date: string) => {
  const d = date.split(" ");
  return {
    day: d[1],
    month: d[2],
  };
};
const activePages = computed(() => pages.value?.filter((page) => !page.meta.skip));
</script>

<template>
  <main
    class="prose-sm prose md:prose-base mx-auto bg-primary-500 p-4 md:p-8 text-balance prose-invert"
  >
    <ol class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
      <li v-for="(page, p) in activePages" :key="p" class="w-full h-full">
        <a
          :href="`#${encodeURI(page.id.replace('/', '_'))}`"
          class="hover:bg-white/10 w-full border-b flex gap-2 md:flex-col items-center justify-center text-center p-2 md:p-4"
        >
          <span class="font-bold text-xl md:text-4xl">{{
            getPageDate(page.title).day
          }}</span>
          <span>{{ getPageDate(page.title).month }}</span>
        </a>
      </li>
    </ol>
    <ul class="list-none m-0 p-0">
      <li
        v-for="page in pages"
        :key="page.id"
        class="mb-12 not-last:border-b border-secondary-200/50 pb-8 relative"
      >
        <h1 :id="encodeURI(page.id.replace('/', '_'))" class="sticky top-0 py-4 flex">
          <div class="w-10 aspect-square bg-secondary-500" />

          <span class="bg-white text-primary-500 px-2">{{ page.title }}</span>
        </h1>
        <ContentRenderer :value="page" class="text-white" />
      </li>
    </ul>
  </main>
</template>

<style>
main {
  scroll-behavior: smooth;
}
</style>
