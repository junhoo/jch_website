<template>
  <div class="min-h-screen">
    <NavHeader />
    <main class="main">
      <slot></slot>
    </main>
    <NavFooter />
  </div>
</template>

<script setup>
import NavHeader from '~~/components/nav-header/index.vue'
const route = useRoute()
useHead({
  meta: [{ name: 'description', content: 'My amazing site.' }],
})
</script>

<style scoped>
.main {
  padding-top: var(--nav-height);
}
</style>
