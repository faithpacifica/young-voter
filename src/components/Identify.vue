<template>
<div id="votelocation" class="identity max-w-[381px] z-2">
  <div class="identity-wrapper rounded-[12px] text-[#fff] bg-[#021432]">
    <h2 class="identity__title font-bold p-[32px] text-[18px] leading-[22px]">
      {{ $t("findMyLocation") }}
    </h2>

    <form action="#" @submit.prevent="submitForm" methods="post" class="identity__form bg-[#0D2144] p-[32px]">
      <label for="passport" class="form__label block text-[16px] leading-[20px] opacity-[0.75px] mb-[8px]">
        {{ $t("inputPasportDetails") }}</label>

      <div class="form__inputs flex mb-[24px] w-[100%]">
        <input v-mask="'AA'" v-model="seriya" @keyup="uppercase" v-on:keypress="isLetterUppercase(event)" :maxlength="maxLetters" @click="isLetterUppercase" :class="{ 'error-text': v$.seriya.$error }" type="text" placeholder="AA" required="required" class="identify-form-input code max-w-[18%] form__passport form__passport-id mr-[12px] p-[12px] rounded-[8px]" />

        <input v-model="number" v-mask="'#######'" :class="{ 'error-text': v$.number.$error }" type="text" :maxlength="numberMax" placeholder="1234567" required="required" class="identify-form-input w-[82%] form__passport form__passport-number p-[12px] rounded-[8px]" />
      </div>

      <IdentifySwipeButton ref="swipe" @click="submitButton" class="swipe-button" @actionConfirmed="onActionConfirmed" :seriya="seriya" :number="number" :buttonColor="buttonColor" />

      <button type="submit" :disabled="disabled" class="identity__btn post font-medium text-[16px] leading-[20px] p-[14px] cursor-pointer text-center w-[100%] rounded-[8px] mb-[32px]" :class="!this.disabled ? 'green-bg' : ''" @click="send - button">
        {{ $t("findVotingLocation") }}
      </button>

      <div class="identity__info flex items-center w-[100%]">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="identity__info-img block w-[70px] h-[80px] mr-[17px]">
          <path opacity="0.7" d="M56.8056 7.92425C51.3484 6.05578 46.9362 3.61592 43.5888 1.37161C41.4117 -0.0874131 38.5899 -0.0874131 36.4128 1.37161C33.0639 3.61592 28.6532 6.05578 23.1945 7.92425C17.253 9.95772 11.8889 10.6911 7.74408 10.9049C6.11699 10.989 4.85963 12.3334 4.86574 13.962C4.9238 30.2649 5.92908 50.2376 23.1945 67.5015C25.7291 70.0361 32.3016 75.2626 36.4357 78.4908C38.5319 80.127 41.4667 80.127 43.5628 78.4908C47.697 75.2626 54.2695 70.0361 56.8041 67.5015C74.0695 50.2376 75.0748 30.2649 75.1344 13.9605C75.1405 12.3319 73.8816 10.9874 72.256 10.9034C68.1112 10.6895 62.7471 9.95772 56.8056 7.92425Z" fill="url(#paint0_linear123)"></path>
          <path d="M61.3875 26.2241C61.3875 27.0033 61.082 27.7824 60.5014 28.3783L39.7374 49.1423L37.5359 51.3423C36.3641 52.5141 34.462 52.5141 33.2902 51.3423L31.0886 49.1423L22.5468 40.6005C21.3705 39.4088 21.3705 37.4685 22.5468 36.2769C23.1427 35.6963 23.9218 35.3908 24.7163 35.3908C25.4955 35.3908 26.2746 35.6963 26.8705 36.2769L35.4123 44.8187L56.1763 24.0547C57.368 22.8783 59.3082 22.8783 60.4999 24.0547C61.082 24.6505 61.3875 25.4297 61.3875 26.2241Z" fill="white"></path>

          <defs>
            <linearGradient id="paint0_linear123" x1="40" y1="0.277726" x2="40" y2="79.7191" gradientUnits="userSpaceOnUse">
              <stop stop-color="#42D778"></stop>
              <stop offset="0.428" stop-color="#3DCA76"></stop>
              <stop offset="1" stop-color="#34B171"></stop>
            </linearGradient>
          </defs>
        </svg>
        <p class="identity__info-text text-[14px] max-w-[72%] leading-[20px] opacity-[0.75px]">
          {{ $t("privacy") }}
          <a class="text-[#036AD0]" href="#"> {{ $t("more") }}</a>
        </p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import IdentifySwipeButton from "@/components/IdentifySwipeButton.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength
} from "@vuelidate/validators";

export default {
  components: {
    IdentifySwipeButton,
  },
  data() {
    return {
      seriya: "",
      number: null,
      disabled: true,
      maxLetters: 2,
      numberMax: 7,
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      seriya: {
        required,
        minLength: minLength(2),
      },
      number: {
        required,
        minLength: minLength(7),
      },
    };
  },

  methods: {
    uppercase() {
      this.seriya = this.seriya.toUpperCase();
    },

    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {}
    },
    submitButton() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("junatildi");
      }
    },
    onActionConfirmed() {
      (this.disabled = false),
      setTimeout(() => {
        this.$refs.swipe.reset();
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.identity {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}

.identity-wrapper {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

.identity__form {
  border-radius: 0 0 12px 12px;
}

.identify-form-input {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.swipe-button {
  .slider {
    position: relative;
    width: 100%;
    background-color: #253756;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 14px 0;
    text-align: center;
    overflow-x: hidden;
  }

  #overlay {
    transition: 0.5s ease;
    position: absolute;
    left: 0;
    top: 0;
    width: 18%;
    height: 44px;
    border-radius: 8px 0 0 8px;
    background-color: #132543;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-button {
    transition: 0.5s ease;
    position: absolute;
    top: 0;
    padding: 12px;
    border-radius: 6px 0 0 6px;
    border: none;
    height: 100%;
    display: flex;
    align-items: start;
  }

  .button-text {
    height: 24px;
    padding-left: 10px;
    padding-right: 10px;

    .slide-text {
      font-size: 12px;
      line-height: 20px;
      color: #93a3be;
      height: 44px;
      top: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px 0 0 6px;
      left: 0;
    }
  }

  .slide-tick {
    transition: 0.5s ease;
    position: absolute;
    top: 0;
    right: 45px;
    padding: 10px;
    border-radius: 0 6px 6px 0;
    background-color: #309c68 !important;
    border: none;
    outline: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(100%);
    z-index: -1;
  }
}

.identity__btn {
  background-color: rgba(255, 255, 255, 0.4);
}

.green-bg {
  z-index: 10;
  transition: 0.5s ease;
  padding: 12px;
  background-color: #309c68 !important;
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
}

.error-text {
  outline: 1px solid #eb4c42;
  white-space: nowrap;
}

// RESPONSIVE
@media screen and (min-width: 370px) and (max-width: 440px) {
  .identity {
    padding-left: 15px;
    padding-right: 15px;
    left: 5%;
  }

  .identity__form {
    padding: 20px;
  }
}
</style>
