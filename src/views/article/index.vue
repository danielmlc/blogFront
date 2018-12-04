<template>
  <div id="article">
      <section class="hero">
        <div class="hero-body">
            <div class="container">
              <h1 class="title">
                写作是对生活的品味和探究
              </h1>
              <p class="is-size-7">以前是非常喜欢写作的，也有断断续续写文章，写日记的习惯。可到了如今，好些年都没有写过丁点文字。有时觉得孤独，想和自己说话的时候，写作是一种极好的沟通方式！</p>
            </div>
        </div>
    </section>
   
    <section >
     <div class="container is-fluid">
        <span class="tag tagselect">全部</span>
        <span class="tag tagselect">技术</span>
        <span class="tag tagselect">散文</span>
        <span class="tag tagselect">杂想</span>
        <span class="tag tagselect">vuejs</span>
        <span class="tag tagselect">docker</span>
      </div>
    </section>
     <hr/>
    <section class="hero is-medium">
      <div class="container" >
          <article class="media item" v-for="(item,index) in dataList" :key="index">
            <figure class="media-left is-hidden-mobile" v-if="item.url">
              <p class="image is-128x128">
                <img :src="item.url">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                  <div class="title title-self" @click="_linkDetail(item)">{{item.title}}</div>
                 
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" v-for="(i,iindex) in item.tag" :key="iindex">
                      <span class="tag">{{i}}</span>
                      </a>
                    </div>
                  </nav>
                  <div >{{item.content}}</div>
                   <div class="is-size-6 has-text-grey date">{{item.date}}</div>
              </div>
              
            </div>
          </article>
         
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
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'一年四季，十二个月的更替，每个月都有着独特的风景，总有一些风景能带给我们不一样的回忆和感受，画了这样一个系列将这些景色记录下来，希望自己能够用心去感受生活...',
            tag:['技术','vuejs','杂想'],
            url:'https://bulma.io/images/placeholders/128x128.png'
          },
           {
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'一年四季，十二个月的更替，每个月都有着独特的风景，总有一些风景能带给我们不一样的回忆和感受，画了这样一个系列将这些景色记录下来，希望自己能够用心去感受生活...',
            tag:['技术','vuejs','杂想'],
            url:'https://bulma.io/images/placeholders/128x128.png'
          },
           {
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'一年四季，十二个月的更替，每个月都有着独特的风景，总有一些风景能带给我们不一样的回忆和感受，画了这样一个系列将这些景色记录下来，希望自己能够用心去感受生活...',
            tag:['技术','vuejs','杂想'],
            url:''
          },
           {
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'一年四季，十二个月的更替，每个月都有着独特的风景，总有一些风景能带给我们不一样的回忆和感受，画了这样一个系列将这些景色记录下来，希望自己能够用心去感受生活...',
            tag:['技术','vuejs','杂想'],
            url:'https://bulma.io/images/placeholders/128x128.png'
          },
           {
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'一年四季，十二个月的更替，每个月都有着独特的风景，总有一些风景能带给我们不一样的回忆和感受，画了这样一个系列将这些景色记录下来，希望自己能够用心去感受生活...',
            tag:['技术','vuejs','杂想'],
            url:'https://bulma.io/images/placeholders/128x128.png'
          }
        ]
      }
  },
  methods:{
    _linkDetail(item){
       this.$router.push('/articleDetail');
       localStorage.setItem('articleDetail',JSON.stringify(item))
    }
  }
}
</script>
<style  lang="css" scoped>
  .tagselect{
    margin:10px;
    cursor: pointer;
  }
  .item{
    padding:45px 40px;
  }
  .title-self{
    cursor: pointer;
  }
  .title-self:hover{
    color:#555;
  } 
  .date{
    padding-top :10px;
  }
  .content{
    padding :10px;
  }
</style>
