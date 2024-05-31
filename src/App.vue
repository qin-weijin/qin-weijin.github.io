<template>
<a-config-provider 
  :theme="{
    token: appAlgorithm ? defaultToken : darkToken,
    algorithm: appAlgorithm ? theme.defaultAlgorithm : theme.darkAlgorithm
  }"
>
<a-app>
<a-layout >
  <a-layout-header id="header" class="tw-fixed tw-z-50 tw-w-full tw-bg-transparent"
  ><AppHeader @changeTheme="onChangeTheme" /></a-layout-header>
  <a-layout-content :style="{ minHeight: '100vh' }">
    <router-view></router-view>
  </a-layout-content>
</a-layout>  
</a-app>
</a-config-provider>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { theme } from 'ant-design-vue';
  import { useRoute } from 'vue-router'
  import AppHeader from '@/components/AppHeader';
  const route = useRoute()
  // Change Theme
  const appAlgorithm = ref(true)
  const onChangeTheme = (checked) => {
    appAlgorithm.value = checked
  }  
  const defaultToken = {
    fontSize: 16,
    colorPrimary: '#2196F3', 
  }
  const darkToken = {
    fontSize: 16,
    colorPrimary: '#2196F3', 
  }
</script>