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
        <div class="hero-body">
            <div class="container item" 
              v-for="(item,index) in dataList" :key="index"
              > 
                <div class="warper" :style="{backgroundImage:'url('+item.url+') '}"
                >
                  <div class="content" @click="viewDetail(item)">
                     <p class="title">{{item.title}}</p>
                     <p class="is-size-6">{{item.createTime}}</p>
                  </div>
                 
                </div>
            </div>
        </div>
    </section>

  </div>
</template>
<script type="text/babel">
export default {
  data(){
    return {
      dataList:[
        {
          id:1,
          title:"我的生日",
          createTime:'2018-12-12',
          url:'./img/bg.jpg',
        },
        {
          id:2,
          title:"我的生日",
          createTime:'2018-12-12',
          url:'./img/bg.jpg',
        },
        {
          id:3,
          title:"我的生日",
          createTime:'2018-12-12',
          url:'./img/bg.jpg',
        }
      ]
      }
  },
  methods:{
    viewDetail(item){
       this.$router.push('/projectDetail?id='+item.id);
    }
  }
}
</script>
<style  lang="css" scoped>
.item{margin:20px;}
.warper{
  border-radius:10px;
  height:150px;
  width: 60%;
  margin:0 auto;
  text-align:center;
  background:round;
}
.content{
  background-color: rgba(255,255,255,.6);
  height:100%;
  padding-top:20px;
  cursor: pointer;
}
.content:hover{
  background-color: rgba(255,255,255,.8);
}
</style>
