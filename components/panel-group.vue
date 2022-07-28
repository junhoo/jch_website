<template>
  <div class="panel-products flex flex-col items-center py-15 bg-gray-50">
    <h1 data-aos="fade-up" data-aos-offset="50" class="font-semibold text-center w-65 text-3xl mb-8">
      企业优势<span class="text-size-[18px] text-gray-400"> / ADVANTAGE</span>
    </h1>
    <!-- <div data-aos="fade-left" class="text-base text-gray-500">Groups</div> -->
    <div class="flex justify-center py-12">
      <template v-for="({ imgUrl, title, desc }, index) of data">
        <div data-aos="fade-left" :data-aos-delay="index * 200">
          <div
            class="shadow-xl shadow-gray-100 flex flex-col items-center w-70 transform mx-5 bg-white transition ease duration-300 hover:scale-110 shadow shadow-gray-200 shadow-2xl"
          >
            <img class="w-20 h-20 my-10" :src="imgUrl" />
            <div
              class="text-drak-50 px-5 pb-12 flex flex-col justify-center items-center text-dark-200"
            >
              <div class="title text-2xl font-bold mb-5">{{ title }}</div>
              <!-- <span class="w-5 h-px bg-dark-100 my-3"></span> -->
              <p class="desc multi-3-ellipsis text-mid text-gray-500 font-bold text-center">
                {{ desc }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    imgUrl: 'https://oss.jchzp.com/website/images/advantage_bao.png',
    title: '进口设备',
    desc: '专注不锈钢板、铝板、铁板。',
  },
  {
    imgUrl: 'https://oss.jchzp.com/website/images/advantage_zhi.png',
    title: '优质品质',
    desc: '品质保障，专业典范，标准过硬。',
  },
  {
    imgUrl: 'https://oss.jchzp.com/website/images/advantage_jia.png',
    title: '性价比高',
    desc: '价格优胜，同质同款，性价比高。',
  },
]
</script>
