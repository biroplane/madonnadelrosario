<script setup lang="ts">
const scrollContainer = ref();
const scrollToTop = () => {
  if (scrollContainer.value) {
    // topRef.value.scrollIntoView({ behavior: "smooth" });
    scrollContainer.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="bg-primary-500 grid grid-rows-[4rem_1fr] h-dvh w-dvw overflow-hidden">
    <div class="flex items-center justify-center h-16">
      <NuxtImg src="/mdr.png" class="p-4 h-16 min-h-16" />
    </div>
    <div
      ref="scrollContainer"
      class="overflow-y-auto no-scrollbar scroll-smooth scroll-container"
    >
      <div class="px-8 md:my-12">
        <div class="nice-borders h-full pointer-events-none">
          <div class="tl" />
          <div class="tr" />
          <div class="bl" />
          <div class="br" />
        </div>
        <slot />
      </div>
      <a
        class="scroll-to-top z-20 bg-primary-700 outline-4 outline-primary-300 w-10 aspect-square rounded-full text-white flex items-center justify-center"
        @click="scrollToTop"
        >⌃
      </a>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss";
:root {
  --header-height: var(--spacing-24);
}
.nice-borders {
  @apply w-dvw h-full fixed pointer-events-none md:opacity-80 opacity-50;
  div {
    @apply w-30 aspect-square fixed pointer-events-none;
  }
  .tl {
    @apply top-0 left-0 rounded-br-full;
    background-position: top left;
    background-image: url("/tl.png");
  }
  .tr {
    @apply top-0 right-0 rounded-bl-full;
    background-position: top right;
    background-image: url("/tr.png");
  }
  .bl {
    @apply bottom-0 left-0 rounded-tr-full;
    background-position: bottom left;
    background-image: url("/bl.png");
  }
  .br {
    @apply bottom-0 right-0 rounded-tl-full;
    background-position: bottom right;
    background-image: url("/br.png");
  }
}

.scroll-to-top {
  @apply sticky bottom-4 left-2;
  animation: fadeIn linear forwards;
  animation-timeline: view();
  animation-range-start: 100vh;
  animation-range-end: 130vh;
  transform: translateY(10vh);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
