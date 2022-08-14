<template>
  <div class="flex justify-center bg-gray-100">
    <div class="w-300 flex flex-wrap pt-5">
      <div class="w-150" v-for="(item, index) in list" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  'https://oss.jchzp.com/website/images/dproduct/1660468260837.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468376709.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468405239.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468923585.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468461171.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468513495.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468569638.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468616660.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468649656.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468704445.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468756716.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468782004.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468812213.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468874423.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468898969.png',
  'https://oss.jchzp.com/website/images/dproduct/1660468898970.png',
]
</script>

<style lang="scss"></style>
