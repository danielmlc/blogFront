
<template>
  <div class="reset">
    <div class="tabs">
      <ul>
        <li 
          :class="{ 'is-active':isActive=='modifiers' }" 
          @click="isActive='modifiers'"><a>辅助类</a> </li>
        <li 
          :class="{ 'is-active':isActive=='columns' }" 
          @click="isActive='columns'"><a>响应式系统</a></li>
        <li 
          :class="{ 'is-active':isActive=='layout' }" 
          @click="isActive='layout'"><a>布局</a></li>
        <li 
          :class="{ 'is-active':isActive=='form' }" 
          @click="isActive='form'"><a>表单</a></li>
        <li 
          :class="{ 'is-active':isActive=='components' }" 
          @click="isActive='components'"><a>元素</a></li>
        <li 
          :class="{ 'is-active':isActive=='elements' }" 
          @click="isActive='elements'"><a>组件</a></li>
      </ul>
    </div>
    <div class="content">
      <modifiers v-if="isActive=='modifiers'" />
      <columns v-else-if="isActive=='columns'" />
      <layout v-else-if="isActive=='layout'"/>
      <bulmaForm v-else-if="isActive=='form'"/>
      <components v-else-if="isActive=='components'"/>
      <elements v-else-if="isActive=='elements'"/>
    </div>
  </div>
</template>

<script type="text/babel">
import modifiers from './Modifiers';
import columns from './Columns';
import layout from './Layout';
import elements from './Elements';
import components from './Components';
import bulmaForm from './Form';
export default {
  data(){
    return {
      isActive:'modifiers'
    }
  },
  components:{
    modifiers,
    columns,
    layout,
    elements,
    'bulmaForm':bulmaForm,
    components,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
