<template>
  <div id="app">
    <!-- 头部 -->
    <jetair-header title="_#首页#_"></jetair-header>
    <router-view></router-view>
    <!-- 底部 -->
    <jetair-tabbar fixed>

    </jetair-tabbar>
  </div>
</template>

<i18n>
  {
    首页:{
      jp: 'ホンムページ',
      fr: 'SHOUYE',
      en: 'Home',
    }
  }
</i18n>

<script>
import Vue from 'Vue'
import Headers from 'components/Header'
import Tabbar from 'components/Tabbar'

import './css/base.css'
import './css/wdui.css'

export default {
  data(){
    return{
    }
  },
  components:{
    'jetair-header':Headers,
    'jetair-tabbar':Tabbar
  }
}
</script>

<style></style>
