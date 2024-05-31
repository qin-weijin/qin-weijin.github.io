<template>
<a-flex class="tw-container tw-px-8 tw-pt-12 tw-mt-16">
  <div class="tw- px-8 tw-flex-1 tw-min-w-0">
    <div class="text-h1">随笔</div>   
    <div class="text-body-1 tw-mb-4">笔记摘要，什么都记一些。</div>    
    <a-descriptions
      v-for="essay in essays" 
      :id="essay.id"
      :labelStyle="{
        width: '200px',
        letterSpacing: '-0.01em',
        fontWeight: '500',
        fontSize: '1rem',        
        color: '#0d1c28'   
      }" 
      class="tw-mb-8"
      :column="1" 
      size="middle"
      bordered
    >
      <template #title> <div class="text-h2">{{essay.title}}</div></template>
      <a-descriptions-item 
        v-for="item in essay.items"
        :label="item.title"
      ><a :href="item.href" class="text-body-2">{{item.description}}</a>
      </a-descriptions-item>
    </a-descriptions>
  </div>
  <a-anchor 
    class="tw-rounded-e tw-w-56 tw-px-8 tw-hidden lg:tw-block" 
    :items="aside" 
    :offset-top="112"
  />  
</a-flex>
</template>
<script lang="ts" setup>
  import { reactive, h } from 'vue'
  import essays from './essays.json'
  const aside = reactive([])
  essays.forEach((essay)=>{
    var ess = {
      title: essay.title,
      href: '#' + essay.id
    }
    aside.push(ess)
  })
</script>