<template>
<div class="container main-container">
   <AppHeader  :text="displayMe ? 'Cancel': 'Add Task'" :bgColor="displayMe ? 'red' : 'blue'" @formDisplay="display" @heightHit="heightMeow"/>
   <router-view :display="displayMe" :heighted="height"></router-view>
   <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/header";
import AppFooter from "./components/footer";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      displayMe: false,
      height: false,
    }
  },
  methods:{
    display(){
      this.displayMe = !this.displayMe
    },
    heightMeow(){
       this.height = !this.height
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.main-container{
  background: linear-gradient(to right, red, #3c598e);
  width: 350px;
  height: 645px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
