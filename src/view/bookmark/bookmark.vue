<template>
<a-flex class="tw-container tw-px-8 tw-pt-12 tw-mt-16">
  <div class="tw-px-8 tw-flex-1 tw-min-w-0">
    <div class="text-h1">书签</div>   
    <div class="text-body-1 tw-mb-4">参考链接，便于快速查询。</div>
    <a-card :id="bookmark.id" v-for="bookmark in bookmarks" class="tw-mb-8">
      <template #title><div class="text-h2">{{bookmark.title}}</div></template>
      <a-card-grid class="md:tw-w-1/2 lg:tw-w-1/2 xl:tw-w-1/2 tw-w-full" v-for="item in bookmark.items">  
      <a class="tw-block" :href="item.href">      
        <p class="text-blod">{{item.title}}</p>
        <p class="card-description text-body-1" >{{item.description}}</p>
        <a-image :preview="false" :height="36" :src="item.src" />
      </a>
      </a-card-grid>
    </a-card>      
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
  import bookmarks from './bookmarks.json'
  const aside = reactive([])
  bookmarks.forEach((bookmark)=>{
    var book = {
      title: bookmark.title,
      href: '#' + bookmark.id
    }
    aside.push(book)
  })
</script>
<style scoped>
  .card-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}  
</style>