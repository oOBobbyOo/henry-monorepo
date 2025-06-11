<script setup lang='ts'>
const statsCards = [
  {
    id: 1,
    title: '销售产品',
    count: 1235,
    description: '鞋子、牛仔裤、派对服装、手表',
    icon: 'ic:baseline-shopping-cart',
    iconColor: 'rgb(255, 255, 255)',
    iconSize: 20,
    iconBgColor: 'rgb(83, 155, 255)',
    textColor: '#071437',
    backgroundColor: '#fff',
    showArrow: false,
  },
  {
    id: 2,
    title: '活跃用户',
    count: 5000,
    description: '日活跃用户超过5,000+',
    icon: 'zondicons:user-group',
    iconColor: 'rgb(255, 255, 255)',
    iconSize: 20,
    iconBgColor: 'rgb(19, 222, 185)',
    textColor: '#071437',
    backgroundColor: '#fff',
    showArrow: false,
  },
  {
    id: 3,
    title: '总收入',
    count: 35000,
    description: '月收入超过¥350,000+',
    icon: 'icon-park-outline:income',
    iconColor: 'rgb(255, 255, 255)',
    iconSize: 20,
    iconBgColor: 'rgb(73, 190, 255)',
    textColor: '#071437',
    backgroundColor: '#fff',
    showArrow: false,
  },
  {
    id: 4,
    title: '客户评价',
    count: 4800,
    description: '平均评分4.8/5',
    icon: 'material-symbols:star-half',
    iconColor: 'rgb(255, 255, 255)',
    iconSize: 26,
    iconBgColor: 'rgb(255, 191, 0)',
    textColor: '#071437',
    backgroundColor: '#fff',
    showArrow: false,
  },
]
</script>

<template>
  <div class="card">
    <NH2 class="mb-0">
      统计卡片（文字）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :icon="card.icon"
          :count="card.count"
          :title="card.title"
          :description="card.description"
          :icon-size="card.iconSize"
          :icon-color="card.iconColor"
          :icon-bg-color="card.iconBgColor"
          :background-color="card.backgroundColor"
          :show-arrow="card.showArrow"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>

</style>
