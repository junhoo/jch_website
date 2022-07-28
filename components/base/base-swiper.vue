<template>
  <div class="base-swiper relative h-full">
    <Swiper
      class="h-full"
      v-bind="options"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(item, index) of data">
        <slot v-bind="item" :swiper="swiperRef" :index="index"></slot>
      </SwiperSlide>
    </Swiper>
    <slot name="pagination" :swiper="swiperRef">pagination</slot>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
// import { Pagination } from 'swiper'
// import 'swiper/css/pagination'

defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Array,
    default: () => [],
  },
})

const swiperRef = ref({})

const onSwiper = (swiper) => {
  // console.log(swiper)
  swiperRef.value = swiper
}
const onSlideChange = () => {
  // console.log('slide change')
}

const modules = [] // Pagination
</script>
