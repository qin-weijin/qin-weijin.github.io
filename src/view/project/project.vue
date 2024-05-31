<template>
<a-flex class="tw-container tw-px-8 tw-pt-12 tw-mt-16">
  <div class="tw-px-8 tw-flex-1 tw-min-w-0">
    <div class="text-h1">项目展示</div>   
    <div class="text-body-1 tw-mb-4">开发实例展示。</div>    
    <div :id="project.id" v-for="project in projects" class="tw-mb-8">  
      <div class="text-h2">{{project.title}}</div>
      <p>{{project.description}}</p>
      <a :href="project.href">{{project.href}}</a>
      <a-row :gutter="[24, 24]">
        <a-col 
          v-for="src in project.src" 
          :xs="{span: 24}" 
          :sm="{span: 24}" 
          :md="{span: 24}" 
          :lg="{span: 12}" 
          :xl="{span: 12}"
         >
          <a :href="project.href">
          <a-card >
           <a-image :src="getImageUrl(src)" :preview="false" />
          </a-card>
          </a>
        </a-col>
      </a-row>    
    </div>
  </div>  
  <a-anchor 
    class="tw-rounded-e tw-w-56 tw-px-8 tw-hidden lg:tw-block" 
    :items="aside" 
    :offset-top="112"
  />  
</a-flex>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import projects from './projects.json'
  import { getImageUrl } from '@/utils'
  const aside = reactive([])
  projects.forEach((project)=>{
    var pro = {
      title: project.title,
      href: '#' + project.id
    }
    aside.push(pro)
  })
</script>