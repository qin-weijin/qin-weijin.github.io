<template>
<a-flex wrap="nowrap" align="center">
  <router-link to='/'>
    <a-avatar size="large" :src='getImageUrl("1495794953.jpg")' />
    <span class='tw-ml-2 tw-text-blod tw-align-middle'>MY BLOG</span>
  </router-link>
  <a-input
    v-if='screens.md'
    class="tw-w-48 tw-ml-8"
    v-model:value="searchValue"
    placeholder="搜索文档"
    size="large"
    @search="onSearch"
    suffix="Ctrl K"
  ><template #prefix><search-outlined /></template>
  </a-input>
  <div class="tw-grow"></div>
  <a-button v-if='!screens.md' :icon='h(SearchOutlined)' size="large" type='text'></a-button>
  <a-menu 
    v-if='screens.md'
    class="tw-bg-transparent tw-border-b-0" 
    mode="horizontal" 
    :items='items' 
    @click="onClickMenu"     
  />
    <a-flex wrap="nowrap" align="center" v-if="screens.xl || screens.lg">
    <a-divider type="vertical" />
    <a-switch v-model:checked="checked" @change="onChange" class='tw-mx-1' />
    <a-divider type="vertical" />
    <a-button :icon='h(GithubOutlined)' size="large" type='text' href="https://github.com/qin-weijin"></a-button>
    <a-button :icon='h(WechatOutlined)' size="large" type='text' href="https://wx.qq.com/"></a-button>
  </a-flex>

<!-- breakpoint nav -->
  <a-dropdown :trigger="['click']" v-else>
    <a-button :icon='h(EllipsisOutlined)' size="large" type='text' @click.prevent></a-button>  
    <template #overlay>
      <div class="dropdown_bg">
      <a-menu class='tw-bg-transparent tw-border-b-0' :items='items' @click="onClickMenu"  />
      <a-button :icon='h(GithubOutlined)' size="large" type='text' href="https://github.com/qin-weijin"></a-button>
      <a-button :icon='h(WechatOutlined)' size="large" type='text' href="https://wx.qq.com/"></a-button>
      </div>
    </template>    
  </a-dropdown>
</a-flex>
</template>
<script lang="ts" setup>
  import { GithubOutlined, WechatOutlined, SearchOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
  import { ref, watch, defineEmits, h } from 'vue'
  import { getItem, getImageUrl } from '@/utils/index'
  import { useRouter } from 'vue-router'

import { Grid } from 'ant-design-vue';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();

  const emits = defineEmits(['changeTheme'])
  const router = useRouter()

  // Memu Items
  const items: MenuItem[] = [
    getItem('书签', 'bookmark', null, null),
    getItem('随笔', 'essay', null, null), 
    getItem('项目', 'project', null, null),
    getItem('特效', 'effects', null, null),
  ];
  // a-switch
  const checked = ref(true)
  const searchValue = ref()
  const onSearch = () => {}
  const onChange = (checked) => {
    emits('changeTheme', checked)
  }
  const onClickMenu = ({ item, key, keyPath }) => {
    router.push(key)
  }
</script>
<style scoped>
.dropdown_bg {
    padding: 4px;
    list-style-type: none;
    background-color: #ffffff;
    background-clip: padding-box;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05);
}  
</style>