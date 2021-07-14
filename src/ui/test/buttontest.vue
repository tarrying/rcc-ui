<template>
<div>
    <div class="button">
    <rc-button @click="onClick">按钮click</rc-button>
    <rc-button type="primary">按钮</rc-button>
    <rc-button type="success">按钮</rc-button>
    <rc-button type="info">按钮</rc-button>
    <rc-button type="warning">按钮</rc-button>
    <rc-button type="danger">按钮</rc-button>
    </div>

    <div class="button">
    <rc-button plain>按钮</rc-button>
    <rc-button  type="primary" plain>按钮</rc-button>
    <rc-button  type="success" plain>按钮</rc-button>
    <rc-button  type="info" plain>按钮</rc-button>
    <rc-button  type="warning" plain>按钮</rc-button>
    <rc-button  type="danger" plain>按钮</rc-button>
    </div>

    <div class="button">
    <rc-button plain round>按钮</rc-button>
    <rc-button  type="primary" plain round>按钮</rc-button>
    <rc-button  type="success" plain round>按钮</rc-button>
    <rc-button  type="info" plain round>按钮</rc-button>
    <rc-button  type="warning" plain round>按钮</rc-button>
    <rc-button  type="danger" plain round>按钮</rc-button>
    </div>

     <div class="button">
    <rc-button plain circle>按钮</rc-button>
    <rc-button  type="primary" plain circle> 按钮</rc-button>
    <rc-button  type="success" plain circle>按钮</rc-button>
    <rc-button  type="info" plain circle>按钮</rc-button>
    <rc-button  type="warning" plain circle>按钮</rc-button>
    <rc-button  type="danger" plain circle>按钮</rc-button>
    </div>

     <div class="button">
    <rc-button plain  icon="rc-icon-delete">按钮</rc-button>
    <rc-button  type="primary" plain icon="rc-icon-delete"> 按钮</rc-button>
    <rc-button  type="success" plain icon="rc-icon-info">按钮</rc-button>
    <rc-button  type="info" plain icon>按钮</rc-button>
    <rc-button  type="warning" plain icon>按钮</rc-button>
    <rc-button  type="danger" plain icon>按钮</rc-button>
    </div>

      <div class="button">
    <rc-button plain  icon="rc-icon-delete" disabled>按钮</rc-button>
    <rc-button  type="primary" plain icon="rc-icon-delete" disabled> 按钮</rc-button>
    <rc-button  type="success" plain icon="rc-icon-info" disabled>按钮</rc-button>
    <rc-button  type="info" plain icon disabled>按钮</rc-button>
    <rc-button  type="warning" plain icon disabled>按钮</rc-button>
    <rc-button  type="danger" plain icon disabled>按钮</rc-button>
    </div>
</div>
</template>

<script>


export default {
  name: 'buttonTest',
  components: {
    
  },
  methods:{
      onClick(){
          console.log("button click test")
      }
  }
}
</script>

<style scoped>
 .button button{
    margin: 10px
 }
</style>
