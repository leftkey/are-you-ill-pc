<template>
  <div id="app">
    <div class="head">
      <div class="wrap">
        <router-link to="/"><div class="logo fl"></div></router-link>
        <ul class="nav fr">
          <li><router-link to="/"></router-link></li>
          <li><router-link to="/list"></router-link></li>
          <li><router-link to="/center"></router-link></li>
          <li><router-link to="/download"></router-link></li>
          <li><router-link to="/about"></router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import "./assets/css/app.css";

  // import nav1 from "./assets/img/nav1.png"; //引入图片,不推荐
  // import nav2 from "./assets/img/nav2.png";
  export default {
    name: 'app',
    methods:{
      navHover(){
        var $=this.jquery;
        $(".nav li a").mouseenter(function() {
          $(this).css("backgroundImage","url('../../static/img/nav2.png')");
        }).mouseout(function() {
          if($(this).parent().index()!=0){
            $(this).css("backgroundImage","url('../../static/img/nav1.png')");
          }
        });
      }
    },
    mounted(){
      this.navHover();//加This,调用
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
