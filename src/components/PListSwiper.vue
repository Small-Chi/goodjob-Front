<template>
  <div id="listswiper">
    <div class="name me-5">
      <router-link :to="`/user/${portfolio._id}/userself/`">
        <v-avatar size="90" class="me-2 d-none d-sm-flex d-lg-flex mt-sm-5 mb-sm-n5 mt-md-0 mb-md-0 avatarSwipwer">
          <v-img :src="'https://source.boringavatars.com/beam/120/' + portfolio.account"></v-img>
        </v-avatar>
      </router-link>
      <router-link :to="`/user/${portfolio._id}/userself/`">
        <v-avatar size="60" class="me-1 d-flex d-sm-none d-lg-none avatarSwipwer">
          <v-img :src="'https://source.boringavatars.com/beam/120/' + portfolio.account"></v-img>
        </v-avatar>
      </router-link>
      <div class="nametext">
        <h3 class="mb-3 pb-2" style="border-bottom: 1px solid var(--color-lightY)">{{ portfolio.username }}</h3>
        <div class="goodIcon">
          <h4 class="mb-2">
            <v-icon color="var(--color-white)">mdi-charity</v-icon>
            <span>75</span>
          </h4>
          <h4 class="mb-2">
            <v-icon color="var(--color-white)">mdi-thumb-up</v-icon>
            <span>62</span>
          </h4>
          <h4 class="mb-2">
            <v-icon color="var(--color-white)">mdi-thumb-down</v-icon>
            <span>13</span>
          </h4>
        </div>
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" style="width: 100%; padding-bottom: 10px">
      <swiper-slide v-for="(portfolio, index) in portfolio.portfolios" :key="index">
        <!-- 卡片呈現 -->

        <v-card class="card mx-auto card-portfolio" max-width="350" color="var(--color-lightblue)">
          <v-btn class="cardBtn" min-width="50" min-height="20" style="padding: 0" color="var(--color-red)">
            <v-icon size="18" color="white" class="justify-content-center; Btn1Icon">mdi-heart</v-icon>
            <div class="heartNum">{{ portfolio.favorite }}</div>
          </v-btn>
          <!-- <v-btn class="cardBtn2" min-width="40" min-height="20" style="padding: 0" color="var(--color-blue)">
              <v-icon size="18" color="white" class="justify-content-center; Btn2Icon">mdi-message-outline</v-icon>
            </v-btn> -->
          <!-- <v-btn icon class="cardBtn3" max-width="20" max-height="20" style="padding: 0; background-color: var(--color-red)">
                <v-icon size="10" color="white" class="justify-content-center; Btn3Icon" @click="deletePortfolio(portfolio._id)">mdi-close</v-icon>
              </v-btn>
              <v-btn icon class="cardBtn4" min-width="30" style="padding: 0; background-color: var(--color-blue)" @click="editPortfolio(index)">
                <v-icon size="18" color="white" class="justify-content-center; Btn4Icon">mdi-pencil-outline</v-icon>
              </v-btn> -->
          <router-link :to="`/user/${portfolio.user}/portfolioPage/` + portfolio._id">
            <v-img :src="portfolio.image" height="200px" style="border-radius: 10px; background-color: var(--color-white)"></v-img>
          </router-link>
          <v-card-title class="ctext1 textlightY" style="margin-left: 10px">
            <router-link :to="`/user/${portfolio.user}/portfolioPage/` + portfolio._id">
              <h2 style="color: var(--color-lightY)">{{ portfolio.pname }}</h2>
            </router-link>
            <!-- <div class="textWhite sell">
              {{ portfolio.sell ? '公開' : '隱藏' }}
            </div> -->
          </v-card-title>
          <v-card-subtitle class="textWhite d-flex" style="margin-left: 10px">
            <h3>$</h3>
            <h3 class="textlightY ms-2">{{ portfolio.price }}</h3>
          </v-card-subtitle>
          <div class="hr mx-auto"></div>
          <v-card-actions>
            <v-chip>{{ portfolio.category.big }}</v-chip>
            <v-chip style="color: var(--color-white); background: var(--color-lightblue); border: 1px solid var(--color-white)">
              {{ portfolio.category.small }}
            </v-chip>
            <!-- <v-spacer></v-spacer>
                <v-btn icon @click="show = !show" color="var(--color-white)">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn> -->
          </v-card-actions>
        </v-card>
      </swiper-slide>

      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-next d-none d-xl-flex" slot="button-next"></div>
      <div class="swiper-button-prev d-none d-xl-flex" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import '../../node_modules/swiper/css/swiper.css'
  export default {
    name: 'carrousel',
    props: {
      portfolio: {
        type: Object
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // freeMode: true,
          breakpoints: {
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          },
          spaceBetween: 0
          // Some Swiper option/callback...
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mountd() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
