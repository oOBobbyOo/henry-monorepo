<script setup lang='ts'>
function handleBannerClick() {
  console.log('[ BasicBanner ] >>:', 'banner clicked')
}
</script>

<template>
  <div class="banner">
    <NH2 class="mb-0">
      基础横幅
    </NH2>
    <NGrid cols="1 s:2" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi>
        <BasicBanner
          title="欢迎回来，管理员！"
          subtitle="今日系统访问量增长了60%，运行状态良好。"
          button-text="查看详情"
          button-color="rgb(73, 190, 255)"
          button-text-color="#fff"
          @click="handleBannerClick"
        />
      </NGi>
      <NGi>
        <BasicBanner
          title="欢迎使用本系统!"
          subtitle="这是一个基于Vue3和Naive ui的后台管理系统模板。"
          button-text="开始使用"
          button-color="rgb(19, 222, 185)"
          button-text-color="#fff"
          background-color="#D4F1F7"
          title-color="#333"
          subtitle-color="#666"
          @click="handleBannerClick"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>

</style>
