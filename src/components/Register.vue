<template lang="">
  <section class="register-section py-[64px]">
    <div class="container">
      <h4
        class="register-section__title md:text-[24px] text-[#fff] text-center font-normal"
      >
        {{ $t("registerForVoting") }}
      </h4>
      <div
        class="pt-[120px] grid lg:grid-cols-2 flex justify-around lg:flex-nowrap sm:flex-wrap gap-[20px]"
      >
        <div
          class="register volunteer"
          v-on:mouseover="mouseoverVolunteer"
          v-on:mouseleave="mouseleaveVolunteer"
        >
          <div class="register__hover">
            <div class="register__logo">
              <svg
                class="mr-[13px]"
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9965 7.97442C24.6026 4.41461 29.0817 1.68679 33.9973 0.393799C34.0027 3.54171 33.9973 6.69234 34 9.84298C29.6546 11.5588 25.8274 14.5021 22.9905 18.2038C19.8862 18.1574 16.782 18.2038 13.6804 18.1683C15.8518 21.6626 17.3466 25.5634 18.1104 29.6006C15.0744 29.6115 12.0356 29.6006 8.9995 29.6061C8.43757 24.4941 4.84775 19.9032 0.00314057 18.1656C0.0167797 14.9604 -0.024133 11.7525 0.0249678 8.54726C3.95576 9.22649 7.73652 11.0241 10.5216 13.9129C11.7382 15.1459 12.7284 16.5752 13.615 18.0565C15.6227 14.3957 17.9686 10.8768 20.9965 7.97442Z"
                  fill="#319C68"
                />
              </svg>
              <p
                class="register__logo__title text-[#fff] uppercase text-[24px] font-bold leading-[30px]"
              >
                {{ $t("voluteer") }}
              </p>
            </div>
            <p class="text-[16px] text-[#fff] font-normal text-center">
              {{ $t("volunteerText") }}
            </p>
          </div>
          <div class="register__img">
            <img
              class=""
              src="@/static/img/volunteer-img.png"
              alt="volunteer"
            />
          </div>
          <button @click="showModal()" class="register__btn text-[#fff]">
            {{ textVolunteer }}
          </button>
        </div>
        <transition name="modal" v-if="volunteerModal == true">
          <RegisterModal @close="volunteerModal = false">
            <template #header-title :level="1">
              <h3 class="font-bold text-[24px] text-[#fff]">
                {{ $t("voluteer") }}
              </h3>
            </template>
            <template #header-text>
              <p class="font-normal text-[16px] opacity-70 text-center">
                {{ $t("volunteerText") }}
              </p>
            </template>
          </RegisterModal>
        </transition>

        <div
          class="trener"
          v-on:mouseover="mouseoverTrener"
          v-on:mouseleave="mouseleaveTrener"
        >
          <div class="register__hover">
            <div class="register__logo">
              <svg
                class="mr-[13px]"
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9965 7.97442C24.6026 4.41461 29.0817 1.68679 33.9973 0.393799C34.0027 3.54171 33.9973 6.69234 34 9.84298C29.6546 11.5588 25.8274 14.5021 22.9905 18.2038C19.8862 18.1574 16.782 18.2038 13.6804 18.1683C15.8518 21.6626 17.3466 25.5634 18.1104 29.6006C15.0744 29.6115 12.0356 29.6006 8.9995 29.6061C8.43757 24.4941 4.84775 19.9032 0.00314057 18.1656C0.0167797 14.9604 -0.024133 11.7525 0.0249678 8.54726C3.95576 9.22649 7.73652 11.0241 10.5216 13.9129C11.7382 15.1459 12.7284 16.5752 13.615 18.0565C15.6227 14.3957 17.9686 10.8768 20.9965 7.97442Z"
                  fill="#319C68"
                />
              </svg>
              <p
                class="register__logo__title text-[#fff] uppercase text-[24px] font-bold leading-[30px]"
              >
                {{ $t("trener") }}
              </p>
            </div>
            <p class="text-[#fff] font-normal text-center">
              {{ $t("volunteerText") }}
            </p>
          </div>
          <div class="register__img">
            <img src="@/static/img/trener-img.png" alt="trener" />
          </div>
          <button @click="showModal()" class="register__btn text-[#fff]">
            {{ textTrener }}
          </button>
        </div>
        <transition name="modal" v-if="volunteerModal == true">
          <RegisterModal @close="hideModal()">
            <template #header-title :level="2">
              <h3 class="font-bold text-[24px] text-[#fff]">
                {{ $t("trener") }}
              </h3>
            </template>
            <template #header-text>
              <p class="font-normal text-[16px] opacity-70 text-center">
                {{ $t("volunteerText") }}
              </p>
            </template>
          </RegisterModal>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import RegisterModal from "@/components/RegisterModal";
export default {
  components: {
    RegisterModal,
  },
  data() {
    return {
      volunteerModal: false,
      registerValue: false,
      textVolunteer: "Kongilli",
      textTrener: "Trener",
    };
  },
  methods: {
    showModal() {
      this.volunteerModal = true;
      if (this.volunteerModal) {
        document.body.style.overflow = "hidden";
      }
    },
    hideModal() {
      this.volunteerModal = false;
      document.body.style.overflow = "auto";
    },
    mouseoverVolunteer: function () {
      this.textVolunteer = "Ro'yxatdan o'tish";
    },
    mouseleaveVolunteer: function () {
      this.textVolunteer = "Kongilli";
    },
    mouseoverTrener: function () {
      this.textTrener = "Ro'yxatdan o'tish";
    },
    mouseleaveTrener: function () {
      this.textTrener = "Trener";
    },
  },
};
</script>

<style lang="scss">
.register-section {
  background-image: url("@/static/img/reg-bg.png");
  background-color: #0d2144;
  background-repeat: no-repeat;
  background-size: 836px;
  background-position: top center;
  padding-top: 64px;

  &__title {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 50%;
      width: 20%;
      height: 3px;
      border-radius: 4px;
      transform: translateX(-50%);
      background: #0083ff;
      transition: 0.6s ease-in-out;
    }

    &:hover {
      &:after {
        width: 50%;
      }
    }
  }
}

.volunteer,
.trener {
  flex-basis: 48%;
  transition: 0.6s ease-in-out;
  padding: 32px 32px 32px 32px;
  overflow: hidden;
}

.register__hover {
  transform: scale(0);
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: 0.6s ease-in-out;
}

.register__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.volunteer:hover,
.trener:hover {
  background-image: url(@/static/img/reg-bg-shadow.svg);
  background-color: #061734;
  border-radius: 16px;
  background-size: 90%;
  background-position: 50%;
  background-repeat: no-repeat;
  opacity: 1;
  transform: scale(1);
  overflow: hidden;
}

.volunteer:hover .register__hover,
.trener:hover .register__hover {
  opacity: 1;
  transform: scale(1);
}

.register__img {
  transform: translateY(0);
  height: 430px;
  overflow: hidden;
  transition: 0.6s ease-in-out;

  img {
    transition: 0.6s ease-in-out;
    margin: 0 auto;
    overflow: hidden;
  }
}

.volunteer:hover .register__img img,
.trener:hover .register__img img {
  transform: translateY(12%);
  overflow: hidden;
}

.register__btn {
  padding: 12px 36px;
  display: block;
  text-align: center;
  background: #061734;
  border: 1px dashed #fff;
  width: 90%;
  margin: auto;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #fff;
  transform: translateY(-10px);
  transition: 0.6s ease-in-out;
}

.volunteer:hover .register__btn,
.trener:hover .register__btn {
  background: #0083ff;
  border-radius: 8px;
  border: 1px solid #0083ff;
}

@media only screen and (max-width: 640px) {
  .volunteer,
  .trener {
    background-image: url(@/static/img/reg-bg-shadow.svg);
    background-color: #061734;
    border-radius: 16px;
    background-size: 90%;
    background-position: 50%;
    background-repeat: no-repeat;
    opacity: 1;
    transform: scale(1);
    overflow: hidden;
  }

  .volunteer .register__hover,
  .trener .register__hover {
    opacity: 1;
    transform: scale(1);
  }

  .register__img {
    height: auto;
  }

  .volunteer .register__img img,
  .trener .register__img img {
    transform: translateY(20%);
    overflow: hidden;
  }

  .register-section__title {
    font-size: 18px;
  }

  .logo__title {
    font-size: 20px;
  }
}
</style>
