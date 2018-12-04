<template>
  <div>
    <div class="container has-background-primary">
      This container
    </div>

    <div class="container is-fluid  has-background-info">
      This container is <strong>is-fluid</strong>
    </div>

    <div class="container is-widescreen has-background-link">
      This container is <strong> is-widescreen</strong> 
    </div>

    <div class="container is-fullhd has-background-warning">
      This container is <strong>is-fullhd</strong> 
    </div>

    <div class="container is-fullhd">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input 
                  class="input" 
                  type="text" 
                  placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item"><strong>All</strong></p>
          <p class="level-item"><a>Published</a></p>
          <p class="level-item"><a>Drafts</a></p>
          <p class="level-item"><a>Deleted</a></p>
          <p class="level-item"><a class="button is-success">New</a></p>
        </div>
      </nav>
    </div>


    <div class="level">
      <div class="level-item has-text-centered has-background-primary">
        <div>
          <p class="heading has-text-white">Tweets</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
