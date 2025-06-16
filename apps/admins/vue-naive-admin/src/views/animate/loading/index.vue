<script setup lang='ts'>
import BlockBounceLoading from '@/components/Animate/loading/BlcokBounceLoading.vue'
</script>

<template>
  <div class="loading m-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-30 justify-center content-center">
      <PinballLoading />
      <ImgLoading />
      <TextReversalLoading />
      <TextScrollLoading />
      <BlockBounceLoading />
    </div>
  </div>
</template>

<style scoped>

</style>
