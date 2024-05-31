<template>
<div class="tw-container tw-px-8 tw-pt-12 tw-mt-16">
  <a-row class="tw-mb-8 hero" align="center">
    <a-col 
      class="tw-my-auto"
      :class=" screens.lg ? 'tw-text-left' : 'tw-text-center' " 
      :order="screens.lg ? 1 : 2"
      :lg="12" :span="24" 
    >
      <div class="hero-title gradient">前端小站</div>
      <div class="hero-title tw-mb-4">文档&笔记&项目</div>
      <div class="hero-text tw-mb-4">提供便捷的开发文档速查与项目示例</div>
      <a-button 
        class="hero-button tw-shadow-black" 
        type="primary" 
        size="large" 
        href="@/assets/bookmark" 
        shape="round"
      >随便看看</a-button>            
    </a-col>
    <a-col :lg="12" :span="24" class="tw-text-center"  :order="screens.lg ? 2 : 1">
      <div class="image-bg"><img :width="heroImageWidth" draggable="false" src="@/assets/going_merry.png"></div>
    </a-col>
  </a-row>
<!------------------------------------------------ Features ------------------------------------------------>
  <a-row :gutter="[16, 16]">
    <a-col v-for="feature in features" :xs="24" :sm="24" :md="24" :lg="8" :key="feature.key">
      <a :href="feature.href"><a-card hoverable :bodyStyle="{ height: '192px' }">
        <img class="tw-mb-4 tw-w-12" draggable="false" :src="getImageUrl(feature.image)">  
        <div class="text-blod tw-mb-2">{{feature.title}}</div>
        <div class="text-body-1">{{feature.detail}}</div>        
      </a-card></a>
    </a-col>
  </a-row>
</div>
</template>
<script lang="ts" setup>
  import { Grid } from 'ant-design-vue';
  import { ref, watch } from 'vue';
  import { getImageUrl } from '@/utils'

  console.log(getImageUrl('life.svg'))

  const useBreakpoint = Grid.useBreakpoint;
  const screens = useBreakpoint();
  const features = [
    {
      key: "work",
      image: "life.svg",
      title: "开发文档",
      detail: "收录了一些库的参考手册与开发文档。",
      href: "/bookmark"
    },
    {
      key: "learn",
      image: "learn.svg",
      title: "学习笔记",
      detail: "整理了平时学习中的资料，以达到快速查询的效果。",
      href: "/essay"
    },
    {
      key: "life",
      image: "work.svg",
      title: "项目展示",
      detail: "Project Demo. 一些常见网页设计和特效实现。",
      href: "/project"
    }
  ];
  const heroImageWidth = ref("320px")
  watch(screens, (screens) => {
    if(screens.lg) { 
      heroImageWidth.value = "320px"
    } else if(screens.sm){
      heroImageWidth.value = "256px" 
    } else {
      heroImageWidth.value = "192px"
    }
  })
  // function getImageUrl(url) {
  //   return new URL(`../../assets/${url}`, import.meta.url).href
  // }
</script>
<style lang="sass" scoped>
  .hero-button
    animation: change-bg-color 5s infinite linear alternate
  .hero-title
    font-size: 2rem
    line-height: 2.5rem
    font-weight: 700
    &.gradient
      // width: 240px
      background: linear-gradient(120deg, #2196F3 10%, #3c21f3)
      -webkit-background-clip: text
      background-clip: text
      color: transparent
    // @media(min-width: 768px)
    @media(min-width: 992px)  
      font-size: 3rem
      line-height: 3.5rem
    @media(min-width: 1104px)
      font-size: 3.5rem
      line-height: 4rem
  .hero-text
    font-size: 1rem
    line-height: 1.2rem
    font-weight: 500
    color: grey
    @media(min-width: 992px)  
      font-size: 1.2rem
      line-height: 1.5rem
    @media(min-width: 1104px)
      font-size: 1.5rem
      line-height: 2rem
</style>
<style lang="sass">
  .image-bg::before
    content: ' '
    position: absolute
    transform: translate(-50%,-50%)
    top: 50%
    left: 50%
    border-radius: 50%
    filter: blur(120px)
    width: 192px
    height: 192px
    animation: change-bg-color 5s infinite linear alternate      
  @keyframes change-bg-color
    0% 
      background: hsl(0 75% 50%)
    100%
      background: hsl(180 75% 50%)
</style>