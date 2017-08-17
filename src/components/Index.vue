<template>
  <div>
    <div style="background: url('../../static/img/timg (1).jpg'); height: 100vh;position:relative;">
      <div class="search">
        <div class="search-log">
          <img src="../assets/logo.png">
          <div class="search-box">
            <input type="text" autofocus="autofocus"><button class="btn-shiny"><i class="first aid icon"></i>寻医问药</button>
          </div>
        </div>
      </div>
    </div>
    <div style="position: relative; z-index: 99; background-color:rgba(255,255,255,.3);">
      <parallax>
        <img src="../../static/img/timg (2).jpg">
      </parallax>
      <div class="ask">
        <div class="drug"></div>
        <div class="online">在线</div><div class="question">咨询</div>
      </div>
    </div>
    <div style="background: url('../../static/img/timg.jpg'); height: 100vh;margin-top:300px;position:relative;">
      <div class="health">  
        <div class="yang"></div>
        <div class="sheng"></div>
      </div>
    </div>
    

    <div style="position: relative;"></div>
    <parallax :fixed="true">
      <div class="collect">
        <div class="box">
          <div class="box-top">
            <div>监
              <p>药监认证</p>
            </div>
            <div>授
              <p>厂家授权</p>
            </div>
            <div>私
              <p>隐私包装</p>
            </div>
            <div>免
              <p>免配送费</p>
            </div>
          </div>
          <div class="box-bottom">
              <div class="col-us fl">联系我们</div>
              <div class="col-tel fr">0511-12345678</div>
              <div class="foot fl">
                <div class="qrcode">
                </div>
                <p>网站备案号: 苏ICP备16032554号</p>
              </div>
          </div>
        </div>
      </div>
      <img src="../../static/img/timg (3).jpg">
    </parallax>
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  import "../assets/css/semantic.min.css"
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      Parallax
    },
    methods:{
      showCollect(){
        var $=this.jquery;
        $(window).scroll(function(){
          var n=$(this).scrollTop();
          var opa=$('.collect').css("opacity")
          if(n>=1580 && opa!=1){
            $('.collect').show().animate({"opacity": 1}, 3000);
          }   
          if(n<1580){
            $('.collect').hide().css("opacity",'0').stop();
          }
        });
      }
    },
    mounted(){
      this.showCollect()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .search{
    width: 600px;
    height: 300px;
    position: absolute;
    top:100px;
    left:150px;
  }
  .search-log{
    width: 200px;
    height: 100px;
    margin: 20px auto;
  }
  .search-box{
    width: 400px;
    height:100px;
    position: absolute;
    left: 100px;
    bottom:50px;
  }
  .search-box input,button{
    border:0;
    outline: none;
  }
  .search-box input{
    padding: 0;
    height:100px;
    width: 200px;
    border-top-left-radius:50px; 
    border-bottom-left-radius:50px;
    float: left;
    text-indent: 2em;
    font-size:1.5em;
    box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
    transition: all 0.1s linear;
  }
  .search-box button{
    padding: 0;
    height: 100px;
    width: 200px;
    border-top-right-radius:50px; 
    border-bottom-right-radius:50px;
    float: left;
    font-size:1.5em;
    color:#fff;
    cursor: pointer;
    position: relative;
    background: red;
    text-shadow: rgba(0,0,0,0.9) 0px 1px 2px;
    box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
    transition: all 0.1s linear;
  }
  .search-box button:hover,input:hover{
    box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
  }
  .ask{
    width:280px;
    height: 120px;
    position: absolute;
    top:200px;
    right:180px;
  }
  .drug{
    width: 280px;
    height: 56px;
    background: url('../assets/img/对症下药.png') -5px -3px no-repeat;
    border:2px solid #000;
    float: left;
  }
  .online,.question{
    float: left;
    font-size: 16px;
    margin: 6px auto;
  }
  .online{
    color: #000;
  }
  .question{
    color:red;
  }
  .health{
    width: 250px;
    height: 250px;
    position: absolute;
    top: 120px;
    left: 150px;
    border:3px solid rgba(255,255,255,.8);
    border-radius: 10px;
  }
  .yang,.sheng{
    width: 240px;
    height: 120px;
    float: left;
    margin-left: 2px;
  }
  .yang{
    margin-top: 2px;
    background: url('../assets/img/养之.png');
    background-size:220%;
  }
  .sheng{
    background: url('../assets/img/生道.png');
    background-size:220%;
  }
  .health:hover{
    border:3px solid rgba(255,255,255,.9);
    box-shadow: 2px 1px 2px 2px rgba(200,200,200,.5)
  }
  .collect{
    position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: hidden;
  }
  .box{
    width:640px;
    height:500px;
    margin:100px auto 0;
  }
  .box-top{
    width: 640px;
    height: 200px;
  }
  .box-top div{
    float:left;
    width: 151px;
    margin-right:11px;
    height: 200px;
    border-color:red;
    border-style: solid;
    font-size: 50px;
    text-align: center;
    line-height:100px;
    font-weight: bold;
    font-family: "隶书";
    border-width:10px 2px 2px 10px;
    border-bottom-left-radius:30px;
    color:#000;
  }
  .box-top div p{
    font-size: 22px;
    color:#333;
    font-family: "新宋体";
  }
  .box-top div:last-of-type{
    margin-right:0px;
    border-color:#000;
    color:red;
  }
  .box-bottom{
    width: 640px;
    height: 300px;
    /* background: blue; */
  }
  .col-us{
    width: 200px;
    height: 50px;
    border:3px solid orange;
    color:orange;
    margin-top: 50px;
    font-size:30px;
    line-height: 45px;
    letter-spacing:15px;
    text-indent: 14px;
    background: rgba(255,255,255,.8);
  }
  .col-tel{
    width: 250px;
    height: 50px;
    border:3px solid #01FFFF;
    color:#01FFFF;
    margin-top: 50px;
    font-size:30px;
    line-height: 45px;
    background: rgba(255,255,255,.8);
  }
  .foot{
    width: 100%;
  }
  .qrcode{
    width: 180px;
    height: 180px;
    margin:10px auto;
    background: url('../assets/img/兄弟连H5.png');
    background-size: 100% 100%;
  }
</style>
