<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swcontent" style="height: 100%">
    <swiper-slide v-for="(item, index) in pages" :key="index">
      <div class="Img">
        <img class="sideItem" :src="item.image" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        pages: [],
        swiperOptions: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 6000,
            disableOninteraction: false
          }
        }
      }
    },
    async created() {
      try {
        const { data } = await this.api.get('/pages')
        this.pages = data.result
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得圖片失敗'
        })
      }
    }
  }
</script>
