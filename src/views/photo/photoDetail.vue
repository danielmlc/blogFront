<template>
  <div id="project">
     <section class="hero">
        <div class="hero-body">
            <div class="container">
              <h1 class="title">
                图像或者视频流可以勾起五味杂陈的回忆
              </h1>
              <p class="is-size-7">
                到目前已经拍了好多的照片和视频，总想着能够一个地方能把这些照片和视频存储起来。希望能够有条理的在这里整理和展现以前的生活片段！
              </p>
            </div>
        </div>
    </section>

     <section>
       <div class="container is-fluid">
         <div class="title is-4">童年的回忆 <span class="is-size-6 has-text-grey">2018-12-12</span></div>
          <div class="columns is-multiline">
                 <div class="column is-2 is-mobile" v-for="(item,index) in dataList" :key="index">
                   <div class="photo" >
                     <img width="100%" :src="item.url">
                      <p class="is-size-7 has-text-centered name">{{item.name}}</p>
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
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
        {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
         {
          id:'1',
          name:"童年回忆",
          url:'https://bulma.io/images/placeholders/128x128.png',
        },
      ]
    }
  }
}
</script>
<style  lang="css" scoped>
.name{padding:10px 0px;}
.photo{padding:10px;}
</style>
