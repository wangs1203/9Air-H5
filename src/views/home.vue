<template lang="html">
  <div class="home">
    _#苹果#_
    <div @click="test">
      _#中国#_
    </div>
  </div>
</template>

<i18n>
  {
    中国:{
      jp: '中国',
      fr: 'Chine',
      en: 'China',
    },
    苹果: {
      en: 'Apple',
      jp: 'リンゴ',
      fr: 'Pommes'
    }
  }
</i18n>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    test(){
      this.$router.push({path: '/book/flightQuery'});
    }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
.home{
  font-size: .373333rem;

}
</style>
