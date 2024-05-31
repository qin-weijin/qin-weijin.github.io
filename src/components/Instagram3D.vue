<template>
<div class="instagram3d_container">  
  <img class="instagram3d_header" draggable="false" src="@/assets/one_piece/ONE_PIECE_Logo.svg">
  <div class="instagram3d" :style="setImageInstagram(roX, roY)">
    <img
      v-for="(image, i) in props.images"  
      class="instagram3d_image"
      :src="getImageUrl(image.src)" 
      draggable="false" 
      loading="lazy" 
      decoding="async" 
      :style="setImageTransform(i)" 
    >
  </div>
</div>
</template>
<script setup>
  import { ref, defineProps, computed, onMounted, nextTick, watch } from 'vue'
  import { getImageUrl } from '@/utils'
  const props = defineProps({ 
    images: Array,
    imageHeight: Number | String
  })

  // 计算旋转角度
  const deg = 360/props.images.length
  // 点击和移动坐标
  const mouseDownX = ref(0)  
  const mouseDownY = ref(0)   
  const mouseMoveX = ref(0)
  const mouseMoveY = ref(0)
  // 计算的偏移坐标
  const roX = computed(() => { return  -10 - (mouseMoveY.value - mouseDownY.value) * 0.2 })
  const roY = computed(() => { return (mouseMoveX.value - mouseDownX.value) * 0.2 })

  // 遍历 IMG 变形
  function setImageTransform(i){ 
    return { transform: 'rotateY(' + i*deg + 'deg) translateZ(300px)' } 
  }

  function setImageInstagram(roX, roY){
    var height = props.imageHeight + 'px'
    var width = 2/3 * props.imageHeight + 'px'
    return { 
        transform: 'translate(-50%, -50%) perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)',
        height: height,
        width: width
      } 
  }

  // 移动时
  function onMousemove(ev){
    mouseMoveX.value = ev.clientX;
    mouseMoveY.value = ev.clientY;    
  }
  // 点击时
  function onMousedown(ev){

    mouseDownY.value = ev.clientY;
    mouseDownX.value = ev.clientX;
    mouseMoveX.value = mouseDownX.value
    mouseMoveY.value = mouseDownY.value
    document.addEventListener('mousemove', onMousemove)
  }

  // 松开时
  function onMouseup(){
    document.removeEventListener('mousemove', onMousemove)
      mouseMoveX.value=0
      mouseMoveY.value=0
      mouseDownX.value=0
      mouseDownY.value=0
  }
  onMounted(()=>{
    document.addEventListener('mousedown', onMousedown)
    document.addEventListener('mouseup', onMouseup)
  })
</script>  
<style lang="sass" scoped>
  .instagram3d  
    position: absolute
    width: 120px
    height: 180px
    transform-origin: center center center
    -webkit-transform-origin: center center center
    transform-style: preserve-3d
    left: 50%
    top: 50%
    text-align: left    
    &_container
      position: relative
      width: 720px
      height: 720px
      overflow-y: visible
      text-align: center
    &_header
      position: absolute
      height: 6rem
      left: 50%
      transform: translateX(-50%)
      top: 15%
    &_image
      position: absolute
      width: 120px
      border-radius: 5px
      box-shadow: 0 0 10px #fff
      transform: rotateY(var(--deg)) translateZ(min(26vw,520px))
      -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 100%)
</style>