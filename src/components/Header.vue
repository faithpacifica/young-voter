<template>
<header class="site-header py-[28px]">
  <div class="container">
    <div class="site-header__inner flex items-center flex-row">
      <router-link class="site-logo-link" to="/">
        <img src="@/static/img/logo.svg" width="212" height="40" />
      </router-link>

      <nav class="navbar mobile-navbar ml-auto flex items-center" :class="{ 'active-menu': showMobileMenu }">
        <ul class="navbar-list flex mr-[66px]">
          <li @click="showMobileMenu = !showMobileMenu" class="navbar-item mr-[24px] font-bold text-[14px] leading-[18px] uppercase">
            <a class="navbar-link" href="#about">{{ $t("aboutProject") }}</a>
          </li>
          <li @click="showMobileMenu = !showMobileMenu" class="navbar-item mr-[24px] font-bold text-[14px] leading-[18px] uppercase">
            <a class="navbar-link" href="#sources">
              {{ $t("trainingBase") }}
            </a>
          </li>
          <li @click="showMobileMenu = !showMobileMenu" class="navbar-item font-bold text-[14px] leading-[18px] uppercase">
            <a class="navbar-link" href="#votelocation">{{
                $t("pollingStation")
              }}</a>
          </li>
        </ul>

        <!-- LANGUAGE DROPDOWN -->
        <!-- TODO:localStorage ga saqlash -->
        <div class="language-dropdown cursor-pointer w-[105px]">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" @click="isRotateClick = !isRotateClick">
              <template v-if="$i18n.locale === 'uz'">
                <img class="block mr-[8px]" src="@/static/img/uz-flag.svg" width="16" height="12 " />
                <span class="block text-[#fff]"> O'zbekcha</span>
              </template>

              <template v-if="$i18n.locale === 'ru'">
                <img class="block mr-[8px]" src="@/static/img/ru.svg" width="16" height="12 " />
                <span class="block text-[#fff]"> Русский</span>
              </template>

              <template v-if="$i18n.locale === 'en'">
                <img class="block mr-[8px]" src="@/static/img/en-flag.svg" width="16" height="12 " />
                <span class="block text-[#fff]">English</span>
              </template>

              <el-icon class="el-icon--right block font-[#fff] self-end" :class="{ active: isRotated }">
                <svg :class="isRotateClick ? 'isRotated' : ''" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5858 0H1.41421C0.523309 0 0.0771403 1.07714 0.707105 1.70711L5.29289 6.29289C5.68342 6.68342 6.31658 6.68342 6.70711 6.29289L11.2929 1.70711C11.9229 1.07714 11.4767 0 10.5858 0Z" fill="white" fill-opacity="0.32" />
                </svg>
              </el-icon>
            </span>


            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" @click="
                      ($i18n.locale = lang.language), (isRotateClick = false)
                    ">
                  <img class="block mr-[8px]" :src="lang.img" width="16" height="12 " />
                  <span class="block text-[#fff]"> 
                    {{ lang.title }}
                  </span>
                </el-dropdown-item>

              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </nav>

      <button class="hamburger" :class="{ active: active - menu }" @click="showMobileMenu = !showMobileMenu">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999023 8H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M0.999512 1.77734H9.88894" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M0.999023 14.2227H14.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      langs: [{
          language: "uz",
          title: "O'zbekcha",
          img: require("@/static/img/uz-flag.svg"),
        },
        {
          language: "en",
          title: "English",
          img: require("@/static/img/en-flag.svg"),
        },
        {
          language: "ru",
          title: "Русский",
          img: require("@/static/img/ru.svg"),
        },
      ],

      showMobileMenu: false,
      isRotateClick: false,
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.site-header {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  .navbar-link {
    transition: 0.3s ease-in-out;
    color: #fff;

    &:hover {
      color: #28a0ff;
    }
  }
}

.isRotated {
  transform: rotate(180deg);
}

.hamburger {
  display: none;
}

/* DROPDOWN STYLES */
.el-dropdown {
  display: flex;
}

.el-dropdown__popper.el-popper[role="tooltip"] {
  border: 0;
  border-radius: 13px;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 50%);
}

.el-dropdown-menu {
  background: #0d2144;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 10%);
}

.el-dropdown-item {
  &:hover {
    background: rgba(23, 61, 127, 0.78) !important;
  }
}

.el-dropdown-menu__item {
  padding: 7px 16px;

  &:hover .el-dropdown-menu__item {
    background-color: #243b82 !important;
  }

  &:focus {
    background-color: #223c8a !important;
  }
}

.el-dropdown-link {
  color: #fff !important;
  font-weight: 700;
  font-size: 14px !important;
  line-height: 18px !important;
  display: flex;
}

.el-popper__arrow::before {
  display: none !important;
}

.el-dropdown-menu__item:not(.is-disabled):focus {
  background-color: rgba(13, 33, 68, 0.2) !important;
  border: none !important;

  &:hover {
    background-color: rgba(13, 33, 68, 0.2) !important;
    border: none !important;
  }
}

// RESPONSIVE
@media screen and (min-width: 766px) and (max-width: 1024px) {
  .site-logo-link {
    margin-right: 30px;
    z-index: 3000;
  }
}

@media screen and (min-width: 370px) and (max-width: 776px) {
  .mobile-navbar {
    transition: 0.3s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    z-index: 2000;
    background-color: rgb(0 0 0 / 88%);
    align-items: flex-start !important;
    padding: 8%;
    transform: translateX(-100%);
  }

  .active-menu {
    transform: translateX(0);
  }

  .site-logo-link {
    position: absolute;
    z-index: 3000;
    top: 15%;
  }

  .site-header {
    position: relative;
  }

  .hamburger {
    position: absolute;
    right: 30px;
    display: block;
    cursor: pointer;
    z-index: 3000;
    top: 55%;
  }

  .site-header__inner {
    justify-content: space-between;
    align-items: flex-end;
  }

  .navbar-list {
    flex-direction: column;
  }

  .navbar-item {
    flex-direction: column;
    margin-bottom: 24px;
  }
}
</style>
