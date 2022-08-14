<template>
  <header class="nav-header fixed z-9 left-0 top-0 w-full h-30 bg-dark-900">
    <div class="max-w-4/5 m-auto flex justify-between items-center h-full">
      <div @click="goTop">
        <Logo />
      </div>
      <div class="flex items-center text-white">
        <NuxtLink class="btn mr-10" to="/">首页</NuxtLink>
        <NuxtLink class="btn mr-10" to="/product">产品定制</NuxtLink>
        <NuxtLink class="btn" to="/about-us">关于我们</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.nav-header {
  height: var(--nav-height);
}
</style>
