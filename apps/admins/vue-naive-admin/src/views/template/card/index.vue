<script setup lang='ts'>
const statsCards = [
  {
    id: 1,
    title: '销售产品',
    count: 123456,
    description: '手机、电脑、 数码相机、手表',
    icon: 'ic:baseline-shopping-cart',
    iconColor: 'rgb(83, 155, 255)',
    iconSize: 40,
    iconBgColor: 'rgb(83, 155, 255)',
    textColor: 'rgb(52, 132, 244)',
    backgroundColor: 'rgb(236, 242, 255)',
    showArrow: false,
  },
  {
    id: 2,
    title: '活跃用户',
    count: 5000,
    description: '日活跃用户超过5,000+',
    icon: 'zondicons:user-group',
    iconColor: 'rgb(19, 222, 185)',
    iconSize: 40,
    iconBgColor: 'rgb(19, 222, 185)',
    textColor: 'rgb(10, 175, 145)',
    backgroundColor: 'rgb(200, 248, 238)',
    showArrow: false,
  },
  {
    id: 3,
    title: '总收入',
    count: 35000,
    description: '月收入超过¥350,000+',
    icon: 'icon-park-outline:income',
    iconColor: 'rgb(255, 128, 164)',
    iconSize: 46,
    iconBgColor: 'rgb(73, 190, 255)',
    textColor: 'rgb(212, 62, 105)',
    backgroundColor: 'rgb(255, 222, 232)',
    showArrow: false,
  },
  {
    id: 4,
    title: '客户评价',
    count: 4.8,
    description: '平均评分4.8/5',
    icon: 'material-symbols:star-half',
    iconColor: 'rgb(255, 191, 0)',
    iconSize: 46,
    iconBgColor: 'rgb(255, 191, 0)',
    textColor: 'rgb(255, 191, 0)',
    backgroundColor: 'rgb(246, 244, 228)',
    showArrow: false,
  },
]

const progressCards = [
  {
    id: 1,
    title: '完成进度',
    percentage: 75,
    color: 'rgb(82, 196, 26)',
    icon: 'proicons:task-list',
    iconColor: 'rgb(82, 196, 26)',
    iconBgColor: 'rgb(230, 255, 250)',
    iconSize: 20,
  },
  {
    id: 2,
    title: '项目进度',
    percentage: 65,
    color: '{ stops: ["#E3F2FD", "#2080f0"] }',
    icon: 'ic:outline-people',
    iconColor: 'rgb(32, 128, 240)',
    iconBgColor: 'rgb(236, 242, 255)',
    iconSize: 20,
  },
  {
    id: 3,
    title: '学习进度',
    percentage: 45,
    icon: 'hugeicons:study-desk',
    color: 'rgb(250, 137, 107)',
    iconColor: 'rgb(250, 137, 107)',
    iconBgColor: 'rgb(253, 237, 232)',
    iconSize: 20,
  },
  {
    id: 4,
    title: '任务进度',
    percentage: 90,
    icon: 'tdesign:task',
    color: 'rgb(73, 190, 255)',
    iconColor: 'rgb(73, 190, 255)',
    iconBgColor: 'rgb(232, 247, 255)',
    iconSize: 20,
  },
]
</script>

<template>
  <div class="card">
    <NH2 class="mb-0">
      统计卡片（默认）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :title="card.title"
          :description="card.description"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      统计卡片（图标）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :icon-size="20"
          icon-color="#fff"
          :icon-bg-color="card.iconBgColor"
          background-color="#fff"
          :show-arrow="card.showArrow"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      统计卡片（自定义样式）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :text-color="card.textColor"
          :icon-size="card.iconSize"
          :icon-color="card.iconColor"
          :background-color="card.backgroundColor"
          :show-arrow="card.showArrow"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      统计卡片（数字滚动）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :icon="card.icon"
          :count="card.count"
          :description="card.description"
          :icon-size="20"
          icon-color="#fff"
          :icon-bg-color="card.iconBgColor"
          background-color="#fff"
          :show-arrow="card.showArrow"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      进度卡片
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in progressCards" :key="card.id">
        <ProgressCard
          v-bind="card"
          type="line"
          icon=""
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      进度卡片 (图标)
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in progressCards" :key="card.id">
        <ProgressCard
          v-bind="card"
          type="line"
        />
      </NGi>
    </NGrid>

    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in progressCards" :key="card.id">
        <ProgressCard
          v-bind="card"
          type="circle"
          :show-indicator="true"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>

</style>
