<template>
  <div
    class="election-date-navbar w-[70%] translate-y-[-55%] mx-[auto] bg-[#fff] rounded-[12px]"
  >
    <div class="text-[#fff]">
      <p
        class="election-date-navbar__title uppercase translate-y-[-50%] translate-x-[-1px] bg-[#0083FF] text-[#fff] py-[12px] px-[30px] font-bold inline-block rounded-tl-[12px] rounded-tr-[22px] rounded-br-[22px]"
      >
        {{ $t("todaysDate") }}: {{ currentDay() }}
      </p>
    </div>
    <div
      class="election lg:grid px-[28px] lg:grid-cols-2 translate-y-[-20%] lg:flex-nowrap sm:flex-wrap"
    >
      <div
        class="election-wrapper mt-[28px] lg:border-r-[1px] lg:border-solid lg:border-[#0D2144]-100/[.55] lg:border-b-[0] sm:border-b-[1px] sm:border-solid sm:border-[#0D2144]-100/[.55]"
      >
        <p
          class="font-normal text-[16px] leading-[20px] text-[#2D2C3D] mb-[8px]"
        >
          {{ $t("deadline") }}
        </p>
        <div
          v-if="!expired"
          class="election-inner flex sm:justify-center lg:pr-[20px] sm:pr-[0] lg:mb-[0px] sm:mb-[20px]"
          ref="distance-day"
        >
          <span class="text-center election-item">
            <p class="text-[33px] font-bold">{{ displayDays }}</p>
            <p
              class="election-item__subtitle text-[18px] font-normal opacity-[0.5]"
            >
              {{ $t("day") }}
            </p>
          </span>
          <span
            class="election-inner__detail text-[33px] text-[#e0e0e0] font-extra-bold mx-[20px]"
            >:</span
          >
          <span class="text-center election-item">
            <p class="text-[33px] font-bold">{{ displayHours }}</p>
            <p
              class="election-item__subtitle text-[18px] font-normal opacity-[0.5]"
            >
              {{ $t("hour") }}
            </p>
          </span>
          <span
            class="election-inner__detail text-[33px] text-[#e0e0e0] font-extra-bold mx-[20px]"
            >:</span
          >
          <span class="text-center election-item">
            <p class="text-[33px] font-bold">{{ displayMinutes }}</p>
            <p
              class="election-item__subtitle text-[18px] font-normal opacity-[0.5]"
            >
              {{ $t("minute") }}
            </p>
          </span>
          <span
            class="election-inner__detail text-[33px] text-[#e0e0e0] font-extra-bold mx-[20px]"
            >:</span
          >
          <span class="text-center election-item">
            <p class="text-[33px] font-bold">{{ displaySeconds }}</p>
            <p
              class="election-item__subtitle text-[18px] font-normal opacity-[0.5]"
            >
              {{ $t("second") }}
            </p>
          </span>
        </div>
        <div
          v-else
          class="election-inner flex sm:justify-start lg:pr-[20px] sm:pr-[0] lg:mb-[0px] sm:mb-[20px] font-bold text-[24px]"
        >
          Saylov boshlandi !
        </div>
      </div>
      <div class="election-wrapper mt-[28px] pl-[28px]">
        <p
          class="font-normal text-[16px] leading-[20px] text-[#2D2C3D] mb-[8px]"
        >
          {{ $t("findVotePlace") }}
        </p>
        <div class="flex election-location">
          <svg
            class="election-location__icon mr-[20px]"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.375 34.65C40.275 34.65 41.1 34.2375 41.7 33.5625C44.8125 29.775 50.0625 22.65 49.875 17.2125C49.6875 11.3625 45.075 6.75 39.375 6.75C33.675 6.75 29.0625 11.3625 28.875 17.2125C28.725 22.65 33.9375 29.8125 37.05 33.5625C37.65 34.275 38.475 34.65 39.375 34.65ZM35.625 17.25C35.625 15.1875 37.3125 13.5 39.375 13.5C41.4375 13.5 43.125 15.1875 43.125 17.25C43.125 19.3125 41.4375 21 39.375 21C37.3125 21 35.625 19.3125 35.625 17.25Z"
              fill="#0D2144"
            />
            <path
              d="M26.0251 11.1C26.6251 10.9875 27.0376 10.3875 26.8876 9.75002C26.7751 9.15002 26.1751 8.73752 25.5376 8.88752C18.7876 10.35 13.2376 14.7375 10.3126 21C7.87511 26.25 7.61261 32.175 9.60011 37.6125C11.5876 43.05 15.5626 47.4375 20.8501 49.875C23.7751 51.225 26.8876 51.9375 30.0376 51.9375C32.5501 51.9375 35.0626 51.4875 37.5001 50.625C42.9751 48.6375 47.3251 44.6625 49.7626 39.375C50.8126 37.125 51.4501 34.7625 51.7126 32.325C51.7876 31.725 51.3376 31.1625 50.7001 31.0875C50.1001 31.0125 49.5376 31.4625 49.4626 32.1C49.2376 34.275 48.6751 36.4125 47.7376 38.4375C45.5251 43.1625 41.6251 46.725 36.7501 48.525C31.8751 50.2875 26.5501 50.0625 21.8626 47.8875C21.1501 47.55 20.4751 47.175 19.8001 46.7625C20.4376 46.725 21.1126 46.5375 21.7126 46.2C22.3876 45.825 23.1001 45.375 23.8876 44.85C24.4126 44.475 24.8626 43.9875 25.2001 43.425C25.5751 42.75 26.0251 42.0375 26.2501 41.2125C27.7126 35.5875 22.8376 35.3625 22.6876 34.125C22.5376 32.7375 24.3376 31.6875 25.4251 30.6C26.5126 29.5125 26.8501 27.825 26.2876 26.85C24.4876 23.625 20.2126 25.3125 19.8001 28.7625C19.5751 30.825 18.3376 32.925 17.2876 34.0125C16.2376 35.0625 14.1751 34.5 13.6126 32.9625C12.9751 31.2375 15.1876 30.6 14.8501 28.3875C14.7751 27.7875 14.1376 27.4875 13.3501 27.375L10.7626 27.45C11.0251 25.575 11.5876 23.7375 12.4126 22.0125C14.9626 16.35 19.9501 12.4125 26.0251 11.1Z"
              fill="#0D2144"
            />
          </svg>
          <div>
            <p
              class="election-location__title uppercase text-[18px] text-[#2d2c3d] font-bold leading-[23px] whitespace-nowrap"
            >
              {{ $t("myVotePlace") }}
            </p>
            <a
              class="election-search pt-[4px] text-[#0083FF] text-[18px]"
              href="#map"
              >{{ $t("search") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthNames: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ],
      weekNames: [
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
        "Yakshanba",
      ],
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      expired: false,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date("Aprel 18, 2024 00:00:00");
        const distance = end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    },
    currentDay() {
      let current = new Date();
      let date = current.getDate();
      const monthName = this.monthNames[current.getMonth()];
      const weekName = this.weekNames[current.getDay() - 1];
      return `${date}-${monthName}, ${weekName}`;
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 640px) {
  .election {
    padding: 0 20px !important;
  }

  .election-wrapper {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(13, 33, 68, 0.1);
      padding-bottom: 20px !important;
    }

    padding-left: 0px !important;
    margin-top: 20px;

    &__title {
      font-size: 14px !important;
    }
  }

  .election-date-navbar {
    width: 100%;
    transform: translateY(-20%);
  }

  .election-inner {
    justify-content: center;

    &__detail {
      font-size: 28px !important;
      margin: 0 16px !important;
    }
  }

  .election-item {
    &__subtitle {
      font-size: 15px;
    }
  }

  .election-location {
    &__icon {
      width: 34px;
      height: 34px;
    }

    &__title {
      font-size: 14px;
    }
  }

  .election-search {
    font-size: 16px;
  }

  .election-date-navbar__title {
    transform: translateX(-50%, 50% !important);
  }
}
</style>
