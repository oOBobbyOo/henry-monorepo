<script setup lang='ts'>
</script>

<template>
  <div>
    <NCard title="公告通知" :bordered="false" class="card-wrapper h-full" content-class="overflow-hidden space-y-4">
      <MarqueeNotice text="这是一条默认类型的滚动公告" />

      <MarqueeNotice type="success" text="这是一条成功类型的滚动公告" :delay="1" />

      <MarqueeNotice type="warning" text="这是一条警告类型的滚动公告" :delay="2" />

      <MarqueeNotice type="error" text="这是一条危险类型的滚动公告" :delay="3" />

      <MarqueeNotice type="info" text="这是一条信息类型的滚动公告" :delay="4" />

      <MarqueeNotice text="自定义前缀和后缀">
        <template #prefix>
          <SvgIcon icon="mingcute:announcement-line" />
        </template>
        <template #suffer>
          <SvgIcon icon="material-symbols:cancel-outline" />
        </template>
      </MarqueeNotice>

      <MarqueeNotice text="这是一条垂直滚动公告" :vertical="true" :duration="2" />

      <MarqueeNotice :vertical="true" :duration="10">
        <div class="text-red-500">
          自定义滚动公告
        </div>
        <div class="text-blue-500">
          自定义滚动公告
        </div>
        <div class="text-yellow-500">
          自定义滚动公告
        </div>
        <div class="text-green-500">
          自定义滚动公告
        </div>
      </MarqueeNotice>
    </NCard>
  </div>
</template>

<style scoped>

</style>
