<template>
  <div class="container">
    <div class="itemleft"> 
      <IP> 
        <template #main> 
          <One />
        </template>
      </IP>
      <IP>
        <template #main> 
          <Two />
        </template>
      </IP>
    </div>
    <div class="itemright">
      <IP>
        <template #main> 
          <Three />
        </template>
      </IP>
      <IP>
        <template #main> 
          <Four />
        </template>
      </IP>
    </div>
  </div>
</template>

<script setup>
import IP from "../../../components/ItemPage.vue";
import One from "../../../components/One.vue";
import Two from "../../../components/Two.vue";
import Three from "../../../components/Three.vue";
import Four from "../../../components/Four.vue";

</script>

<style lang="scss">
  .container{
    width:100%;
    height: 100%;
    margin:0 auto;
    // background-color: gray;
    display: flex;
    .itemleft,.itemright{
      flex:1
    }
  }
</style>