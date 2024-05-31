<template>
<full-page :options="options" id="fullpage">
  <div class="section instagram3D_bg" data-anchor="section1">
    <Instagram3D class="instagram3D" :images="images" :imageHeight="180"/>
  </div>
  <div class="section" data-anchor="section2">
    <a-card :bordered="false" class="one_piece_card">
      <a-image
        :width="160"
        :height="160"
        :src="getImageUrl('little_luffy.png')"
        :preview="false"
      ></a-image>
      <a-descriptions
        class="tw-mt-4 tw-w-56 tw-m-auto"
        :column='1' 
        layout="horizontal"
        :contentStyle="{
          lineHeight: '1.2rem',
          fontWeight: '500',
          fontSize: '1rem',        
          color: 'white'             
        }"
        :labelStyle="{
          lineHeight: '1.6rem',
          fontWeight: '700',
          fontSize: '1rem',        
          color: 'white'   
        }" 
      >
        <a-descriptions-item label='Name'>QINWEIJING</a-descriptions-item>
        <a-descriptions-item label='Location'>GuangZhou, China</a-descriptions-item>
        <a-descriptions-item label='Job'>Front-End Develoa</a-descriptions-item>
        <a-descriptions-item label='Email'>
          <a href="https://qin-weijin.github.io/">2975472970@qq.com</a>
        </a-descriptions-item>
        <a-descriptions-item label='GitHub'>
          <a href="https://qin-weijin.github.io/">qin-weijin.github.io</a>
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
    <video 
      class="bg-video" 
      autoplay 
      loop 
      muted 
      playsinline
      preloader='auto'     
    ><source src="@/assets/lol_hayato.mp4" type="video/mp4"></video>    
  </div>
  <div class="section" data-anchor="section3"><BgGradient /></div>
</full-page>
</template>
<script setup>
  import Instagram3D from '@/components/Instagram3D'
  import BgGradient from '@/components/BgGradient'
  import { getImageUrl } from '@/utils'
  const options = {
    licenseKey: 'YOUR_KEY_HERE',
    // Navigation
    menu: '#menu',
    navigation: true,                                 // Section 导航锚点
    navigationPosition: 'right',
    slidesNavigation: true,                           // Slide 导航锚点
    slidesNavPosition: 'bottom',

    // Design
    controlArrows: false,                             // 横向箭头
    verticalCentered: true,                           // 垂直居中
    css3: true,
  }  
  const images = [
    { src: 'one_piece/chopper.jpg' },
    { src: 'one_piece/franky.jpg' },    
    { src: 'one_piece/hancock.jpeg' },
    { src: 'one_piece/luffy.jpg' },
    { src: 'one_piece/nami.jpg' },
    { src: 'one_piece/robin.jpg' },
    { src: 'one_piece/sanji.jpg' },
    { src: 'one_piece/sogeking.jpg' },
    { src: 'one_piece/zoro.jpg' },
  ]
</script>
<style scoped lang="sass">
  .section   
    cursor: grab
  .bg-video
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    height: 100%
    background-size: 100% 100%
    object-fit: cover
    z-index: -1
    pointer-events: none
  .instagram3D_bg
    background-image: url(@/assets/one_piece/Site-background-light.webp)
  .instagram3D
    left: 50%
    transform: translate(-50%)
  .one_piece_card
    padding: 2rem
    width: 24rem
    margin: auto
    text-align: center
    background-color: rgba(0, 0, 0, .3)
</style>