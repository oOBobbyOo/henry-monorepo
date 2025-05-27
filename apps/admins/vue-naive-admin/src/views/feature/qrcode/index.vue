<script setup lang='ts'>
const text = 'http://localhost:5173'
</script>

<template>
  <div>
    <NCard title="QrCode" :bordered="false" size="small" segmented class="card-wrapper">
      <QrCode :text="text" />
    </NCard>
  </div>
</template>

<style scoped>

</style>
