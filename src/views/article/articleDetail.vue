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
   
   <hr/>

    <section class="hero is-medium">
      <div class="container" >
             <article class="content">
                  <div class="content">
                  <div class="has-text-right toolbar"><span @click="goUrl"><i class="fa fa-list-ul"></i></span></div>
                  <div class="title title-self">{{dataItem.title}}</div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" v-for="(i,iindex) in dataItem.tag" :key="iindex">
                      <span class="tag">{{i}}</span>
                      </a>
                    </div>
                  </nav>
                  <div class="is-size-6 has-text-grey date">{{dataItem.date}}</div>
                  <div class="word is-size-6">{{dataItem.content}}</div>
                  
              </div>
              
          </article>
            <hr/>
           <div class="content">
             <span class="title-self">上一篇</span>
             <span class="title-self is-pulled-right">下一篇</span>
           </div>
      </div>
       
    </section>  
  </div>
</template>
<script type="text/babel">
export default {
  data(){
      return {
        dataItem:{
            title:'Material Design 新知',
            date:'2018-12-12',
            content:'在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？在 Google I/O 2018 大会上，Google 设计团队发布了他们最新的 Material Design 成果，抽空通读了一下官方文档，对 Material Design 有了一些新的认识，可以说是很惊喜了，原来用 Material Design 也能创造出这么多奇妙的产品，不再是刻板地硬搬设计规范。你能想象以下这些产品都来自 Material Design 吗？',
            tag:['技术','vuejs','杂想'],
            url:'https://bulma.io/images/placeholders/128x128.png'
          },
      }
  },
  methods:{
    goUrl(){
        this.$router.push('/article')
    }
  },
  mounted(){

  }
}
</script>
<style  lang="css" scoped>
  .toolbar{
      padding:10px;
   }
  .title-self{
    cursor: pointer;
  }
  .title-self:hover{
    color:#555;
  } 
  .date{
    padding-bottom:10px;
  }
  .content{
      padding:30PX;
  }
  .word{
      line-height: 28px
  }
</style>
