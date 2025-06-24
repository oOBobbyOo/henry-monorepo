<script setup lang='ts'>
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <div class="h-full">
    <NCard title="拆分面板" :bordered="false" class=" card-wrapper h-full">
      <Splitpanes class="default-theme h-full">
        <Pane min-size="20">
          1
        </Pane>
        <Pane>
          <Splitpanes horizontal>
            <Pane>2</Pane>
            <Pane>3</Pane>
            <Pane>4</Pane>
          </Splitpanes>
        </Pane>
        <Pane>
          5
        </Pane>
      </Splitpanes>
    </NCard>
  </div>
</template>

<style scoped>
::v-deep(.splitpanes__pane) {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: #999;
}
</style>
