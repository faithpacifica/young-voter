<template>
<div>
  <div class="statistics pt-[48px] pb-[100px]">
    <img src="/assets/images/background.svg" alt="" class="backimg" />
    <div class="container">
      <h3 class="statistics__title font-bold text-[40px] leading-[48px] text-[ #0D2144] m-0">
        {{ $t("statistics") }}
      </h3>

      <ul class="statistics__list flex flex-wrap justify-between gap-[24px]" data-aos="fade-up">
        <li class="statistics__item aos-init w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-1.svg" width="96" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="6000000" :endAmount="6993924" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard1") }}
          </p>
        </li>
        <li class="statistics__item w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-2.svg" width="90" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="800000" :endAmount="880155" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard2") }}
          </p>
        </li>
        <li class="statistics__item w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-3.svg" width="90" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="300000" :endAmount="400000" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard3") }}
          </p>
        </li>
        <li class="statistics__item w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-4.svg" width="90" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="700000" :endAmount="767251" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard4") }}
          </p>
        </li>
        <li class="statistics__item w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-5.svg" width="90" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="900000" :endAmount="1089120" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard5") }}
          </p>
        </li>
        <li class="statistics__item w-[31%] flex flex-col text-center relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="easy-in-out" data-aos-anchor-placement="bottom-bottom">
          <img class="statistics__icon inline" src="@/static/img/statistic-6.svg" width="90" height="90" />
          <span class="amount-number font-bold text-[36px] leading-[47px] text-[#171D28]">
            <vue3-autocounter :startAmount="4000000" :endAmount="4537553" :duration="3" :autoinit="true" />
          </span>
          <p class="number-description font-medium text-[20px] leading-[26px] text-[#798894]">
            {{ $t("statisticsCard6") }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {
  defineComponent
} from "vue";
import Vue3autocounter from "vue3-autocounter";

export default {
  components: {
    "vue3-autocounter": Vue3autocounter,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.statistics {
  background-image: url(@/static/img/statistic-bg-image.svg);
  background-repeat: no-repeat;
  background-position: right -40px bottom 0px;
}

.statistics__title {
  border-bottom: 2px solid #0083ff;
  width: 178px;
}

.statistics__item {
  border: 1px solid #ececec;
  background: #ffffff;
  border-radius: 12px;
  padding: 64px 24px 32px;
  margin-top: 86px;
}

.statistics__icon {
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
}

// RESPONSIVE
@media screen and (min-width: 640px) and (max-width: 767px) {
  .statistics {
    padding-bottom: 45px;
    padding-bottom: 30px;
  }

  .statistics__item {
    margin-top: 50px;
    width: 48% !important;
    padding: 48px 16px 24px;
    justify-content: center;
  }

  .amount-number {
    line-height: 28px;
    font-size: 28px;
  }
}

@media screen and (min-width: 370px) and (max-width: 639px) {
  .statistics__item {
    width: 100% !important;
  }
}
</style>
