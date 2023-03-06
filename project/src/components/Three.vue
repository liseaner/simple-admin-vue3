<template>
  <div>
      <h2>报修统计</h2>
      <div id="chartThree" class="three"></div>
  </div>
</template>

<script setup>
import {inject,onMounted,reactive} from "vue"
import link from "../api/Link.js"
import apiUrl from "../api/url.js"
// let data=reactive({})
let xdata=reactive([])
let ydata=reactive([])
let $echarts=inject("echarts")

onMounted(()=>{
  let myChart=$echarts.init(document.getElementById("chartThree"))
link(apiUrl.chartDataThree).then((ok)=>{
  console.log(ok);
 
  myChart.setOption({
    legend:{top:"bottom"},
    tooltip:{},
    series:[
      {
        type:"pie",
        data:ok.data,
        radius:[15,100],
        center:["50%","45%"],
        roseType:"area"
      }
    ]

  })
})

 
})
</script>

<style lang="scss" scoped>
h2{
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size:0.25rem;
}
.three{
  height: 4.5rem;

}
</style>