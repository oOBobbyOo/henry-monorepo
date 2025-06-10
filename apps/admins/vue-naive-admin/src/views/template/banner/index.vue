<script setup lang='ts'>
import card1 from '@/assets/banner/card/1.svg'
import card2 from '@/assets/banner/card/2.svg'
import card3 from '@/assets/banner/card/3.svg'
import card4 from '@/assets/banner/card/4.svg'

import robot from '@/assets/banner/robot.webp'

function handleBannerClick() {
  console.log('[ BasicBanner ] >>:', 'banner clicked')
}

function handleConfirm() {
  console.log('[ CardBanner ] >>:', 'confirm clicked')
}

function handleCancel() {
  console.log('[ CardBanner ] >>:', 'cancel clicked')
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
          button-color="#21b893"
          button-text-color="#fff"
          background-color="rgb(19, 222, 185)"
          title-color="#333"
          subtitle-color="#666"
          @click="handleBannerClick"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      基础横幅（图片）
    </NH2>
    <NGrid cols="1 s:2" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi>
        <BasicBanner
          title="欢迎回来，管理员！"
          subtitle="今日系统访问量增长了60%，运行状态良好。"
          button-text="查看详情"
          button-color="#FF3E76"
          background-color="#FF80A4"
          button-text-color="#fff"
          :background-image="robot"
          @click="handleBannerClick"
        />
      </NGi>
      <NGi>
        <BasicBanner
          title="欢迎使用本系统!"
          subtitle="这是一个基于Vue3和Naive ui的后台管理系统模板。"
          button-text="开始使用"
          button-color="#1385FF"
          button-text-color="#fff"
          background-color="#88A7FF"
          :background-image="robot"
          @click="handleBannerClick"
        />
      </NGi>
    </NGrid>

    <NH2 class="mb-0">
      卡片横幅 (图片)
    </NH2>
    <NGrid cols="1 s:2 l:4" :x-gap="12" :y-gap="12" responsive="screen" item-responsive>
      <NGi>
        <CardBanner
          :img="card1"
          title="系统状态良好"
          description="所有服务运行正常，无异常情况。"
          button-text="查看详情"
        />
      </NGi>
      <NGi>
        <CardBanner
          background-color="rgb(237, 131, 161)"
          :img="card2"
          title="新消息提醒"
          description="您有 <span class=&quot;text-yellow&quot;>1</span> 条未读消息需要处理。"
          button-text="立即查看"
          button-color="rgb(245, 97, 50)"
          button-text-color="#fff"
        />
      </NGi>
      <NGi>
        <CardBanner
          background-color="rgb(104, 225, 253)"
          :img="card3"
          title="数据分析报告"
          description="本周数据分析报告已生成完毕。"
          button-text="下载报告"
          button-color="rgb(51, 170, 199)"
          button-text-color="#fff"
        />
      </NGi>
      <NGi>
        <CardBanner
          background-color="rgb(19, 222, 185)"
          :img="card4"
          title="系统更新提示"
          description="新版本已发布，建议及时更新。"
          :show-cancel="true"
          button-text="更新"
          button-color="rgb(47, 200, 55)"
          button-text-color="#fff"
          cancel-button-text="取消"
          cancel-button-color="#eee"
          cancel-button-text-color="#333"
          @click="handleConfirm"
          @cancel="handleCancel"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>

</style>
