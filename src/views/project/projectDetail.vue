<template>
  <div id="project">
     <section class="hero">
        <div class="hero-body">
            <div class="container">
              <h1 class="title">
                  一条记录，一个故事
              </h1>
              <p class="is-size-7">
                有仪式感的生活就像在写一部小说，虽然有时剧情很简单，但是记录和过往的时光会使之变得美好！
              </p>
            </div>
        </div>
    </section>
    <section class="hero">
        
        <div class="warper">
          <img :src="item.order.url" width="100%" alt="">
        </div>
    </section>
    
   
  </div>
</template>
<script type="text/babel">
export default {
  data(){
    return {
      item:{
          order:{
            title:"我的生日",
            createTime:'2018-12-12',
            url:'./img/bg.jpg',
          },
          items:[
            {
              url:'',
            }
          ]
        }
      }
  }
}
</script>
<style  lang="css" scoped>
.warper{
  height:350px;
  width: 100%;
  overflow: hidden;
}
</style>
