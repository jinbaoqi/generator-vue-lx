<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    {{testStr}}
    {{$i18n.name}}
    <div @click="ceshi">dianji</div>
    <div @click="qiehuan">切换语言</div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getCompanyList} from './api/index.js'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
   computed:{
    testStr(){
        return this.$store.getters.getTestStr
    }  
  },
  methods:{
    ceshi(){
      var vm = this;
      vm.$store.dispatch('setTestStr','切换成功')
      vm.$promise.get(getCompanyList).then(function(resp){console.log(resp)});
    },
    qiehuan(){
      this.$setLanguage('en');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
