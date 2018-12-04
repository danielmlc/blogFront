<template>
  <div id="photo">
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
          <div class="columns is-multiline">
                 <div class="column is-4 is-gap is-mobile" v-for="(item,index) in dataList" :key="index">
                   <div class="photo" @click="viewDetail(item)">
                      <p class="title is-4">{{item.name}}</p>
                      <p class="is-size-6">{{item.createTime}}</p>
                      <p class="is-size-7">{{item.description}}</p>
                   </div>
                 </div>
          </div>
     

      <div class="content">
             <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
                <ul class="pagination-list ">
                  <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                  <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                  <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
                </ul>
            </nav>
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
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
         {
          id:'1',
          name:"童年回忆",
          description:'童年的往昔总是童年的往昔总是童年的往昔总是童年的往昔总是童年的往昔总是童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
         {
           id:'1',
          name:"童年回忆",
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
         {
           id:'1',
          name:"童年回忆",
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
        {
          id:'1',
          name:"童年回忆",
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
        {
          id:'1',
          name:"童年回忆",
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
        {
          id:'1',
          name:"童年回忆",
          description:'童年的往昔总是美好的...',
          createTime:'2018-12-03',
        },
      ]
    }
  },
  methods:{
    viewDetail(item){
       this.$router.push('/photoDetail?id='+item.id);
    }
  },
  props:{

  },
  computed:{

  },
  mounted(){

  }
}
</script>
<style  lang="css" scoped>
.photo{margin:20px;padding:20px;border:2px #ddd double}
.content{padding: 10px 0px;}
</style>
