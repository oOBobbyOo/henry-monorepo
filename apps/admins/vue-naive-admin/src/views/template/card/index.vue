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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
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
    iconBgRadius: '8px',
  },
]

const digitalCards = [
  {
    id: 1,
    title: '今日销售额',
    count: 123456,
    description: '日销售额超过¥123,456+',
    color: '#646CFF',
    icon: 'ic:baseline-shopping-cart',
    iconSize: 24,
    day: {
      label: '日',
      radio: 12,
      value: 1234,
    },
    week: {
      label: '周',
      radio: 20,
      value: 2534,
    },
  },
  {
    id: 2,
    title: '总访问量',
    count: 131400,
    description: '总访问量超过131,400+',
    color: '#22c55e',
    icon: 'material-symbols:planner-review',
    iconSize: 24,
    day: {
      label: '日',
      radio: 10,
      value: 1234,
    },
    month: {
      label: '月',
      radio: -18,
      value: 5678,
    },
  },
  {
    id: 3,
    title: '总收入',
    count: 45231.50,
    description: '总收入超过¥45,231.50+',
    color: '#fa6f97',
    icon: 'icon-park-outline:income',
    iconSize: 24,
    day: {
      label: '日',
      radio: -6,
      value: 10000,
    },
    month: {
      label: '月',
      radio: 16,
      value: 40000,
    },
  },
  {
    id: 4,
    title: '活跃用户',
    count: 5000,
    description: '日活跃用户超过5,000+',
    color: '#ffbf00',
    icon: 'rivet-icons:user-group',
    iconSize: 24,
    day: {
      label: '日',
      radio: -15,
      value: 6000,
    },
    month: {
      label: '月',
      radio: -10,
      value: 3000,
    },
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
          :show-arrow="card.showArrow"
        />
      </NGi>
      <NGi v-for="card in statsCards" :key="card.id">
        <StatsCard
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :icon-size="20"
          icon-color="#fff"
          :icon-bg-color="card.iconBgColor"
          :icon-bg-radius="card.iconBgRadius"
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
          :show-arrow="card.showArrow"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      数字卡片
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi v-for="card in digitalCards" :key="card.id">
        <DigitalCard
          :title="card.title"
          :count="card.count"
          :color="card.color"
          :icon="card.icon"
          :icon-size="card.iconSize"
          :day="card.day"
          :week="card.week"
          :month="card.month"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      图表卡片（小图表）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi>
        <LineChartCard
          :is-mini-chart="true"
          :value="2545"
          label="新用户"
          date="过去7天"
          :percentage="1.2"
          :chart-data="[120, 132, 101, 134, 90, 230, 210]"
        />
      </NGi>
      <NGi>
        <BarChartCard
          :is-mini-chart="true"
          :value="15480"
          label="浏览量"
          date="过去 14 天"
          :percentage="-4.15"
          bar-width="45%"
          :chart-data="[120, 100, 150, 140, 90, 120, 130]"
        />
      </NGi>
      <NGi>
        <LineChartCard
          :is-mini-chart="true"
          :value="2545"
          label="粉丝数"
          date="过去 30 天"
          :percentage="1.2"
          :show-area-color="true"
          :chart-data="[150, 180, 160, 200, 180, 220, 240]"
        />
      </NGi>
      <NGi>
        <PieChartCard
          :is-mini-chart="true"
          :value="36358"
          label="粉丝量"
          date="较去年"
          :percentage="40"
          :radius="['50%', '70%']"
          :chart-data="[{ name: '2024', value: 30 }, { name: '2025', value: 70 }]"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      图表卡片（大图表）
    </NH2>
    <NGrid cols="1 m:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi>
        <LineChartCard
          :is-mini-chart="false"
          :value="2545"
          label="新用户"
          date="过去7天"
          :percentage="1.2"
          :chart-data="[120, 132, 101, 134, 90, 230, 210]"
        />
      </NGi>
      <NGi>
        <BarChartCard
          :value="15480"
          label="浏览量"
          :percentage="-4.15"
          :height="72"
          :chart-data="[120, 100, 150, 140, 90, 120, 130, 110]"
        />
      </NGi>
      <NGi>
        <LineChartCard
          :is-mini-chart="false"
          :show-area-color="true"
          :value="2545"
          label="粉丝数"
          :percentage="1.2"
          :chart-data="[120, 132, 101, 134, 90, 230, 210]"
        />
      </NGi>
      <NGi>
        <PieChartCard
          :is-mini-chart="false"
          :value="36358"
          label="粉丝量"
          date="较去年"
          :percentage="-20"
          :radius="['50%', '70%']"
          :chart-data="[{ label: '2024', value: 60 }, { label: '2025', value: 40 }]"
          :format="{ name: 'label', value: 'value' }"
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
