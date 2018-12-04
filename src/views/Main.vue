
<template>
  <div class="main">

    <section class="section">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a 
              class="navbar-item" 
              @click="linkPage('home')">
              <img 
                src="https://bulma.io/images/bulma-logo.png" 
                alt="Bulma: a modern CSS framework based on Flexbox" 
                width="112" 
                height="28">
            </a>
             <a role="button" @click="_toggleClass" class="navbar-burger burger" :class="{'is-active':isActive}"  aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
          </div>
          <div class="navbar-menu" :class="{'is-active':isActive}" id="navbarBasic" >
            <div class="navbar-end">
              <a 
                class="navbar-item" 
                @click="linkPage('diary')">
                日记
              </a>
              <a 
                class="navbar-item" 
                @click="linkPage('article')">
                文章
              </a>
              <a 
                class="navbar-item" 
                @click="linkPage('photo')">
                相册
              </a>
              <a 
                class="navbar-item" 
                @click="linkPage('project')">
                专题
              </a>
              <a 
                class="navbar-item" 
                @click="linkPage('todolist')">
                ToDoList
              </a>
              <!-- <a 
                class="navbar-item"
                @click="linkPage('me')" >
                我
              </a> -->
            </div>
          </div>
        </nav>
      </div>
    </section>

    
  
   	<transition name="fade" >
							<!-- <keep-alive :include="includedComponents"> -->
								<router-view></router-view>
							<!-- </keep-alive> -->
	  </transition>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Blog</strong> by <a href="https://github.com/danielmlc">danielmlc</a>
          ©2018Baidu 京ICP证030173号-1 
        </p>
      </div>
    </footer>
  </div>
</template>

<script type="text/babel">
export default {
  data(){
    return {
      isActive:false
    }
  },
  props:{

  },
  methods:{
      linkPage(url){
        if(this.isActive){
          this.isActive=false;
        }
        this.$router.push(url);
      },
      _toggleClass(){
        this.isActive=!this.isActive;
      }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
