<template>
  <div class="content">
    <div class="inputDom">
      <el-input v-model="input" placeholder="请输入首款金额" />
      <el-button type="success" @click="MakeQrcode">生成二维码</el-button>
    </div>
    <div class="qrcode" ref="qrcodeDom"></div>
    <!-- qrcode js -->
  </div>
</template>

<script setup>
import {nextTick, ref} from "vue"
import QRcode from "qrcodejs2"
const input =ref('')
let qrcodeDom=ref(null)
let MakeQrcode=()=>{
  qrcodeDom.value.innerHTML=""
  nextTick(()=>{
    new QRcode(qrcodeDom.value,{
      text:input.value,//生成的二维码内容
      colorDark:"#000",//二维码的颜色
      colorLight:"#fff",//二维码的背景色
      //
    })
  })
}
</script>

<style lang="scss" scoped>
.qrcode{
width: 300px;
height: 300px;
  margin:0 auto;
}
.inputDom{
  input:400px;
  margin:0 auto;
}
.el-button{
  margin-top: 20px;
}
</style>