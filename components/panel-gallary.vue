<template>
  <div
    class="panel-advantage flex flex-col justify-center items-center bg-gray-100 w-full pt-20 pb-15"
  >
    <h1 class="font-semibold text-center w-65 text-3xl mb-8" data-aos="fade-up" data-aos-offset="50">
      激光切割<span class="text-size-[18px] text-gray-400"> / CUTTING</span>
    </h1>
    <div data-aos="fade-left" class="text-base text-gray-500 mb-10">
      <!-- PRESENCE -->
    </div>
    <div class="flex justify-center">
      <template v-for="(url, index) of data">
        <div data-aos="flip-down" :data-aos-delay="index * 200">
          <div
            class="icon-wrap w-80 h-60 bg-orange-500 mx-2 transition ease duration-300 hover:transform hover:scale-105"
          >
            <img class="object-cover w-full h-full" :src="oss + url" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const oss = 'https://oss.jchzp.com/website/images/'
const data = [
  'jig_c1.jpeg',
  'jig_y1.jpeg',
  'jig_y2.jpeg',
  'jig_y3.jpeg',
]
</script>
