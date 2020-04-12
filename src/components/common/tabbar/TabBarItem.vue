<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TarBarItem",
  props:{
    path: String ,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed: {
    isActive(){
      // /home ->item1(/home) = true
      // /home ->item1(/category) = false
      // /home ->item1(/cart) = false
      // /home ->item1(/profile) = false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      //浏览器返回键不起作用
      //  this.$router.replace()
      //浏览器返回键起作用
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item  img{
    width:24px;
    height:24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>