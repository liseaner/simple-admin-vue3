<template>
  <div class="item">
    <slot name="main"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.item{
    height: 6.75rem;
    border:1px solid #ccc;
    margin:0.25rem;
    background-color: rgb(196, 193, 193);
}

</style>