<template>
  <div class="panel-products flex flex-col items-center py-15 bg-gray-100">
    <h2 data-aos="fade-up" data-aos-offset="50" class="text-3xl mb-8">
      产品标题
    </h2>
    <div
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="200"
      class="text-base text-gray-500"
    >
      产品介绍
    </div>
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="bottom-bottom"
      class="flex justify-center py-12"
    >
      <div
        class="flex flex-col justify-center items-center w-80 transform mx-5 bg-white transition transition ease duration-300 hover:scale-110"
        v-for="({ imgUrl, title, desc }, index) of data"
      >
        <img class="object-cover w-full h-80" :src="imgUrl" />
        <div
          class="py-6 flex flex-col justify-center items-center text-dark-200"
        >
          <div class="title mb-2">{{ title }}</div>
          <div class="desc text-sm">{{ desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imgUrl = 'https://oss.jchzp.com/website/images/8.jpeg'
const data = [
  {
    imgUrl,
    title: 'Title Name',
    desc: 'Related description',
  },
  {
    imgUrl,
    title: 'title',
    desc: 'Related description',
  },
  {
    imgUrl,
    title: 'title',
    desc: 'Related description',
  },
  {
    imgUrl,
    title: 'title',
    desc: 'Related description',
  },
]
</script>
