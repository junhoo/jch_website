<template>
  <div
    class="panel-advantage flex flex-col justify-center items-center bg-gray-100 w-full h-180"
  >
    <h1 class="font-semibold text-center w-65 text-3xl mb-8" data-aos="fade-up" data-aos-offset="50">
      产品案例<span class="text-size-[18px] text-gray-400"> / PRODUCT</span>
    </h1>
    <div
      class="text-base text-gray-500 mb-5"
      data-aos="fade-left"
      data-aos-offset="50"
      data-aos-delay="200"
    >
      <!-- 产品介绍 -->
    </div>
    <div class="flex flex-wrap justify-center w-260">
      <template v-for="({ imgUrl, title, desc }, index) of data">
        <div data-aos="fade-left" :data-aos-delay="index * 200">
          <div
            class="overflow-hidden flex justify-center items-center w-100 h-40 transform mx-5 my-3 bg-white transition ease duration-300 hover:scale-105 hover:shadow-gray-300 hover:shadow-3xl shadow-2xl shadow-gray-200"
          >
            <div
              class="icon-wrap flex justify-center items-center w-40 h-40 bg-gray-200"
            >
              <img class="object-cover w-36 h-36" :src="imgUrl" />
            </div>
            <div
              class="flex-grow py-6 flex flex-col justify-center items-center text-dark-200"
            >
              <div class="title mb-2">{{ title }}</div>
              <div class="desc text-sm">{{ desc }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const imgUrl = 'https://oss.jchzp.com/website/images/8.jpeg'
const data = [
  {
    imgUrl: '/images/product-1.jpeg',
    title: '类型1',
    desc: '',
  },
  {
    imgUrl: '/images/product-2.jpeg',
    title: '类型2',
    desc: '',
  },
  {
    imgUrl: '/images/product-3.jpeg',
    title: '类型3',
    desc: '',
  },
  {
    imgUrl: '/images/product-4.jpeg',
    title: '类型4',
    desc: '',
  },
  {
    imgUrl: '/images/product-5.jpeg',
    title: '类型5',
    desc: '',
  },
  {
    imgUrl: '/images/product-6.jpeg',
    title: '类型6',
    desc: '',
  },
]
</script>

<style scoped>
.panel-advantage {
  background: url('https://oss.jchzp.com/website/images/bg.jpeg') no-repeat
    center center / cover;
}
</style>
