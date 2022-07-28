<template>
  <div class="home-swiper-container h-full">
    <BaseSwiper :options="swiperOptions" :data="data">
      <template #default="{ imgUrl, mainTitle, title, desc }">
        <div class="h-full relative">
          <img class="w-full h-full object-cover" :src="imgUrl" />
          <div
            class="w-3/5 absolute left-1/2 top-1/2 text-white z-8 transform -translate-x-1/2 -translate-y-1/2 text-right"
          >
            <div data-aos="fade-up" class="text-4xl mb-2">
              {{ mainTitle }}
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              class="text-5xl mb-4 font-bold"
            >
              {{ title }}
            </div>
            <div data-aos="fade-up" data-aos-delay="400" class="text-base">
              {{ desc }}
            </div>
          </div>
          <div
            class="mask w-full h-full absolute left-0 top-0 bg-dark-500 bg-opacity-50"
          ></div>
        </div>
      </template>

      <template #pagination="{ swiper }">
        <div
          class="nav w-90 h-15 flex justify-between absolute left-1/2 bottom-0 transform -translate-y-20 hover:-translate-y-22 transition duration-500 ease-in-out bg-white z-8 transform -translate-x-1/2 rounded-full shadow-2xl shadow-gray-300 overflow-hidden"
        >
          <div
            v-for="({ imgUrl }, index) of data"
            class="w-1/3 flex justify-center items-center hover:bg-gray-100 cursor-pointer transition duration-300 ease"
            @click="() => swiper.slideToLoop(index)"
          >
            <img
              class="w-16 h-8 rounded-xl object-cover box-content"
              :class="
                swiper.realIndex === index
                  ? 'border-3 border-blue-500 border-solidr'
                  : ''
              "
              :src="imgUrl"
            />
          </div>
        </div>
      </template>
    </BaseSwiper>
  </div>
</template>

<script lang="ts" setup>
import { SwiperOptions } from 'swiper'
const imgUrl = 'https://oss.jchzp.com/website/images/sz-1.jpeg'
const imgUrl2 = 'https://oss.jchzp.com/website/images/sz-2.jpeg'
const imgUrl3 = 'https://oss.jchzp.com/website/images/sz-3.jpeg'

const data = [
  {
    imgUrl,
    mainTitle: '',
    title: '金创鸿不锈钢板材',
    desc: "金属加工定制",
    aos: {
      'data-aos': 'fade-left',
    },
  },
  {
    imgUrl: imgUrl2,
    mainTitle: '',
    title: '金创鸿不锈钢板材',
    desc: "金属加工定制",
    aos: {
      'data-aos': 'flip-up',
    },
  },
  {
    imgUrl: imgUrl3,
    mainTitle: '',
    title: '金创鸿不锈钢板材',
    desc: "金属加工定制",
    aos: {
      'data-aos': 'fade-right',
    },
  },
]

const swiperOptions: SwiperOptions = {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    clickable: true,
  },
}
</script>

<style lang="scss" scoped>
.home-swiper-container {
  @apply h-200 bg-gray-200;

  .nav {
    > div {
      position: relative;
    }

    & > div:not(:last-child)::after {
      content: '';
      @apply w-px h-4/5 bg-gray-200 absolute right-0 top-1/2 transform -translate-y-1/2;
    }
  }
}
</style>
