<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import PageHeaderWrapper from '@ant-design-vue/pro-layout';



export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
