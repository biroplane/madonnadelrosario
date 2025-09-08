<template>
  <div class="bg-white grid grid-rows-[4rem_auto] h-dvh w-dvw overflow-hidden">
    <div class="flex items-center justify-center">
      <NuxtImg src="/mdr.png" class="p-4 h-full" />
    </div>
    <div class="relative h-full overflow-y-auto no-scrollbar px-8 py-12">
      <div class="nice-borders h-full pointer-events-none">
        <div class="tl" />
        <div class="tr" />
        <div class="bl" />
        <div class="br" />
      </div>
      <slot />
    </div>
  </div>
</template>

<style>
@reference "tailwindcss";
:root {
  --header-height: var(--spacing-24);
}
.nice-borders {
  @apply w-dvw h-full fixed pointer-events-none opacity-50;
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
</style>
