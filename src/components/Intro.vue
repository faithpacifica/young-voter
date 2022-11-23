<template>
<section class="relative intro">
  <div class="container">
    <div class="grid grid-cols-2 intro__inner">
      <div class="intro__info max-w-[86%] pt-[144px] pb-[280px]">
        <button class="intro__hashtag text-[18px] leading-[22px] text-[#0083FF]" @click="outerVisible = true">
          {{ $t("introHashtag") }}
        </button>

        <ShareModal v-model="outerVisible" />

        <h2 class="intro__title font-bold text-[40px] leading-[48px] color-[#fff] mt-[18px] mb-[12px]">
          {{ $t("introTitle") }}
        </h2>
        <p class="intro__text text-[16px] leading-[20px]">
          {{ $t("introText") }}
        </p>
      </div>

      <div class="intro__slider relative w-[100%]">
        <div class="intro__slider__inner h-[100%] relative">
          <el-carousel trigger="click" height="800" direction="vertical" :autoplay="true">
            <el-carousel-item class="" v-for="item in sliderImages" :key="item">
              <div class="img-gradient">
                <div>
                  <img :src="item.img" />
                </div>
                <div class="gradient"></div>
              </div>
            </el-carousel-item>
          </el-carousel>

          <span class="absolute sliderShadow">
            <svg width="737" height="546" viewBox="0 0 737 546" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M491.564 177.476C575.991 94.1343 680.855 30.2711 795.936 0C796.064 73.6981 795.936 147.46 796 221.222C694.266 261.392 604.666 330.3 538.248 416.962C465.572 415.877 392.896 416.963 320.283 416.132C371.118 497.941 406.115 589.265 423.997 683.783C352.917 684.038 281.774 683.783 210.694 683.911C197.538 564.231 113.494 456.749 0.0735263 416.069C0.392842 341.029 -0.564996 265.926 0.584541 190.887C92.6113 206.789 181.126 248.875 246.33 316.506C274.813 345.372 297.995 378.836 318.751 413.514C365.754 327.81 420.676 245.426 491.564 177.476Z" fill="white" fill-opacity="0.1" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import ShareModal from "@/components/ShareModal.vue";

export default {
  components: {
    ShareModal,
  },

  data() {
    return {
      showModal: false,
      outerVisible: false,

      sliderImages: [{
          img: require("@/static/img/intro-slider-img.png"),
        },
        {
          img: require("@/static/img/intro-slider-img.png"),
        },
        {
          img: require("@/static/img/intro-slider-img.png"),
        },
        {
          img: require("@/static/img/intro-slider-img.png"),
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.outerVisible = true;
    },
  },
};
</script>

<style lang="scss">
.intro {
  color: #fff;

  .intro__info {
    .intro__hashtag {
      border-bottom: 2px solid rgba(0, 131, 255, 0.5);
    }
  }

  //   INTRO SLIDER
  .intro__slider {
    position: relative;

    .sliderShadow {
      position: absolute;
      bottom: 30px;
      right: -185px;
    }

    .img-gradient {
      position: relative;
    }

    .gradient {
      position: absolute;
      background: linear-gradient(0deg,
          #0d2144 5%,
          rgba(32, 48, 75, 0) 46%,
          hsla(0, 0%, 100%, 0));
      width: 100%;
      height: 100%;
      right: 0px;
      bottom: 0px;
    }

    // SLIDER INDICATOR STYLES
    .el-carousel__indicator.el-carousel__indicator--vertical.is-active {
      width: 10px;
      height: 10px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 20px;
      padding: 4px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .el-carousel__indicator.el-carousel__indicator--vertical.is-active button {
      transform: translate(-5%, -50%);
    }
    .el-carousel__indicators--vertical {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .el-carousel__item.is-animating {
      top: 40px;
    }
    .el-carousel__indicator {
      width: 10px;
      height: 10px;
      padding: 2px;
      opacity: 0.8;
      color: hsla(0, 0%, 100%, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
    }
    .el-carousel__indicator button {
      width: 6px;
      height: 6px;
      opacity: 0.8;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      padding: 2px;
      background-color: #fff;
      transform: translate(-20%, -10%);
    }

    .el-carousel__container {
      height: 600px !important;
    }
  }
}

// RESPONSIVE
@media screen and (min-width: 370px) and (max-width: 1023px) {
  .intro__inner {
    display: flex;
    flex-direction: column;
  }

  .intro__info {
    padding-bottom: 0;
    padding-top: 40px;
  }
}

@media screen and (min-width: 500px) and (max-width: 1023px) {
  .sliderShadow {
    bottom: -135px !important;
    right: -185px !important;
  }
}

@media screen and (min-width: 370px) and (max-width: 499px) {
  .sliderShadow {
    bottom: -130px !important;
    right: -185px;
    width: 640px !important;
  }
}

@media screen and (min-width: 370px) and (max-width: 639px) {
  .intro__title {
    line-height: 28px;
    font-size: 28px;
  }

  .intro .intro__slider .el-carousel__container {
    height: 500px !important;
  }

  .el-carousel__indicators--vertical {
    flex-direction: row !important;
    right: 35% !important;
    top: 75%;
  }
}

@media screen and (min-width: 370px) and (max-width: 500px) {
  .intro .intro__slider .el-carousel__container {
    height: 425px !important;
  }
}
</style>
