<script setup lang='ts'>
import BallRotationLoading from '@/components/Animate/loading/BallRotationLoading.vue'
import BlockBounceLoading from '@/components/Animate/loading/BlcokBounceLoading.vue'
import Block3DLoading from '@/components/Animate/loading/Block3DLoading.vue'
import ImgLoading from '@/components/Animate/loading/ImgLoading.vue'
import PaperLayerLoading from '@/components/Animate/loading/PaperLayerLoading.vue'
import PinballLoading from '@/components/Animate/loading/PinballLoading.vue'
import ProgressBarLoading from '@/components/Animate/loading/ProgressBarLoading.vue'
import StripWaveLoading from '@/components/Animate/loading/StripWaveLoading.vue'
import TextReversalLoading from '@/components/Animate/loading/TextReversalLoading.vue'
import TextScrollLoading from '@/components/Animate/loading/TextScrollLoading.vue'
import TextWaveLoading from '@/components/Animate/loading/TextWaveLoading.vue'
import WaterRipplesLoading from '@/components/Animate/loading/WaterRipplesLoading.vue'
</script>

<template>
  <div class="loading m-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-30 justify-center content-center">
      <BallRotationLoading />
      <BlockBounceLoading />
      <Block3DLoading />
      <ImgLoading />
      <PaperLayerLoading />
      <PinballLoading />
      <ProgressBarLoading />
      <StripWaveLoading />
      <WaterRipplesLoading />
      <TextReversalLoading />
      <TextScrollLoading />
      <TextWaveLoading />
    </div>
  </div>
</template>

<style scoped>

</style>
