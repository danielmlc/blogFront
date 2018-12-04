<template>
  <div class="diary">
    <section class="hero">
      <div class="hero-body">
          <div class="container">
            <h1 class="title">
               每一天都值得记录
            </h1>
            <p class="is-size-7">每天尝试这记录自己行走、吃饭、冥想、工作的样子。或者记录平日里所见所得事迹、感概。</p>
          </div>
      </div>
   </section>
   <hr/>
    <section> 
      <div class="container is-fluid">
          <div class="columns" v-for="(item,index) in diaryList" :key="index">
            <div class="column is-3 is-size-4 has-text-right has-text-weight-semibold">
              <div class="dateSum"> {{item.date}}</div>
            </div>
            <div class="column is-9">
                <div class="content" v-for="(iitem,iindex) in item.item" :key="iindex">
                  <p class="is-size-6 has-background-light"><i class="fa fa-sun-o has-text-grey" ></i> {{iitem.weather}} <i class="fa fa-clock-o has-text-grey"></i> {{iitem.time}}</p>
                  <p >{{iitem.content}}</p>
                  <div class="imglist">
                          <img class="imgitem" v-for="(iiitem,iiindex) in iitem.medias" 
                          :key="iiindex" 
                          :src="iiitem">
                   </div>
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
import dayjs from 'dayjs'
export default {
  data(){
    return {
      time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
      weather:'晴',
      diaryList:[
          {
            date:"2018-11-23",
            item:[
              {
                time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
                weather:'晴',
                content:'今天是个好日子！',
                medias:[
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                ]
              },
              {
                time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
                weather:'晴',
                content:'今天是个好日子！',
                 medias:[
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                ]
              },
              {
                time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
                weather:'晴',
                content:'某高中同学在网上告诉我小樱领证结婚了，还给我发来他们的结婚照。红底照片上的一对新人好似金童玉女，十分合衬。我盯着小樱光洁的额头看，突然好奇，新郎知道小樱曾经额头上都是毛发吗？',
                 medias:[
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                ]
              }
            ]
          },
          {
            date:"2018-11-23",
            item:[
              {
                time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
                weather:'晴',
                content:'某高中同学在网上告诉我小樱领证结婚了，还给我发来他们的结婚照。红底照片上的一对新人好似金童玉女，十分合衬。我盯着小樱光洁的额头看，突然好奇，新郎知道小樱曾经额头上都是毛发吗？',
                 medias:[
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                  'https://bulma.io/images/placeholders/128x128.png',
                ]
              }
            ]
          },
          {
            date:"2018-11-23",
            item:[
              {
                time:dayjs().format('YYYY-MM-DD HH:mm:ss'),
                weather:'晴',
                content:'今天是个好日子！',
                 medias:[
                  'https://bulma.io/images/placeholders/128x128.png',
                ]
              }
            ]
          },
      ]
    }
  }
}
</script>
<style  lang="css" scoped>
.dateSum{
  padding-right:10px;
}
.content{
  padding:20px 10px;
}
.imglist{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imglist .imgitem{
  width:128px;
  margin:5px;
}
</style>
