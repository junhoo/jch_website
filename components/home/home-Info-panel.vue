<template>
  <div class="home-info-panel pt-20 pb-15">
    <div
      data-aos="fade-up"
      :data-aos-delay="index * 300"
      class="info flex flex-col justify-center items-center w-80 h-45"
      v-for="({ title, desc }, index) of data"
    >
      <div v-if="title" class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    desc: 'Related fields',
  },
  {
    desc: 'Related fields',
  },
  {
    title: '1000+',
    desc: 'Related fields',
  },
  {
    title: '200+',
    desc: 'Related fields',
  },
]
</script>

<style lang="scss" scoped>
.home-info-panel {
  @apply flex justify-center items-center;

  > .info {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      display: block;
      height: 100%;
      width: 0.1px;
      @apply bg-gray-300 absolute top-0 right-0;
    }

    .title {
      @apply font-bold mb-10 text-3xl font-black;
    }

    .desc {
      @apply text-base;
    }
  }
}
</style>
