<template>
  <div>
      <h2>人数统计</h2>
      <div id="chartFour" class="four"></div>
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
  let myChart=$echarts.init(document.getElementById("chartFour"))
link(apiUrl.chartDataFour).then((ok)=>{
  console.log(ok);
  let {data}=ok;

  myChart.setOption({
    grid:{
      top:"5%",
      left:"5%",
      containLabel:true
    },
    tooltip:{
      trigger:"axis",
      axisPointer:{
        type:"shadow"
      }
    },
     xAxis:{
      type:"category",
      data:data.day,
      axisLine:{
        lineStyle:{
          color:"#fff"
        }
      }
     },
     yAxis:{
      type:"value",
      axisLine:{
        lineStyle:{
          color:"#fff"
        }
      }
     },
     series:[
      {
        type:"bar",
        data:data.num.一般用户,
        stack:"Total",
        smooth:true,
      },
      {
        type:"bar",
        data:data.num.月租用户,
        stack:"Total",
        smooth:true,
      },
      {
        type:"bar",
        data:data.num.特殊车辆,
        stack:"Total",
        smooth:true,
      },
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
.four{
  height: 4.5rem;

}
</style>