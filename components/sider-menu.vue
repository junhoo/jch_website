<template>
  <div>
    <img class="btn" src="~/assets/icons/icon-menu.svg" @click="showMenu" />
    <div
      class="sider-menu fixed top-0 right-0 w-100 h-full bg-dark-800 bg-opacity-80 transform translate-x-full transition ease duration-300"
      :class="{
        'translate-x-0': sliderMenuVisible,
        'opacity-0': !sliderMenuVisible,
      }"
    >
      <img
        class="btn absolute top-0 right-0 m-5 active:opacity-50"
        src="~/assets/icons/icon-close.svg"
        @click="closeMenu"
      />
      <div
        class="text-white text-lg flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        @click="closeMenu"
      >
        <NuxtLink class="btn mb-3" to="/">首页</NuxtLink>
        <NuxtLink class="btn" to="/about-us">关于我们</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const sliderMenuVisible = ref(false)

const showMenu = () => {
  sliderMenuVisible.value = true
}

const closeMenu = () => {
  sliderMenuVisible.value = false
}
</script>
