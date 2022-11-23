<template lang="">
  <footer
    class="footer bg-[#0D2144] bg-[url('@/static/img/footer-bg.png')] bg-cover bg-no-repeat pt-[135px] text-[#fff]"
  >
    <div class="container">
      <div class="footer-inner flex lg:gap-[3%] sm:gap-[10%]">
        <div
          class="footer__item_first flex flex-col gap-[28px] lg:w-[32%] sm:w-[30%]"
        >
          <a href="https://yoshlar.gov.uz/uz/">
            <img src="@/static/img/gerb.svg" alt="" />
          </a>
          <p class="footer__text md:text-[14px] leading-[20px] sm:text-[12px]">
            {{ $t("footerAlertText") }}
          </p>
          <div class="social flex items-center gap-[18px]">
            <a
              class="social__link w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] transition ease-in-out duration-600 hover:bg-transparent"
              data-aos="zoom-in-right"
              data-aos-duration="700"
              data-aos-easing="easy-in-out"
              href="https://www.facebook.com/yoshlaragentligirasmiy/"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                class="facebook"
              >
                <path
                  d="M17.9999 2.3999H5.9999C4.01123 2.3999 2.3999 4.01123 2.3999 5.9999V17.9999C2.3999 19.9886 4.01123 21.5999 5.9999 21.5999H17.9999C19.9886 21.5999 21.5999 19.9886 21.5999 17.9999V5.9999C21.5999 4.01123 19.9886 2.3999 17.9999 2.3999ZM17.5118 12.7398H15.7151V19.3889H12.7147V12.7398H11.5509V10.5001H12.7147V9.07338C12.7155 7.20286 13.4923 6.09221 15.6966 6.09221H17.9305V8.32384H16.633C15.7749 8.32384 15.7188 8.64359 15.7188 9.24175L15.7151 10.4993H17.7562L17.5118 12.7398Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              class="social__link w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] transition ease-in-out duration-600 hover:bg-transparent"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-easing="easy-in-out"
              href="https://www.instagram.com/yoshlaragentligi/"
              target="_blank"
            >
              <svg
                class="instagram"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9998 2.8C16.2998 2.8 16.7498 2.8 18.0998 2.8C19.2998 2.8 19.8998 3.1 20.3498 3.25C20.9498 3.55 21.3998 3.7 21.8498 4.15C22.2998 4.6 22.5998 5.05 22.7498 5.65C22.8998 6.1 23.0498 6.7 23.1998 7.9C23.1998 9.25 23.1998 9.55 23.1998 13C23.1998 16.45 23.1998 16.75 23.1998 18.1C23.1998 19.3 22.8998 19.9 22.7498 20.35C22.4498 20.95 22.2998 21.4 21.8498 21.85C21.3998 22.3 20.9498 22.6 20.3498 22.75C19.8998 22.9 19.2998 23.05 18.0998 23.2C16.7498 23.2 16.4498 23.2 12.9998 23.2C9.54981 23.2 9.24981 23.2 7.89981 23.2C6.69981 23.2 6.09981 22.9 5.64981 22.75C5.04981 22.45 4.59981 22.3 4.14981 21.85C3.69981 21.4 3.39981 20.95 3.24981 20.35C3.09981 19.9 2.9498 19.3 2.7998 18.1C2.7998 16.75 2.7998 16.45 2.7998 13C2.7998 9.55 2.7998 9.25 2.7998 7.9C2.7998 6.7 3.09981 6.1 3.24981 5.65C3.54981 5.05 3.69981 4.6 4.14981 4.15C4.59981 3.7 5.04981 3.4 5.64981 3.25C6.09981 3.1 6.69981 2.95 7.89981 2.8C9.24981 2.8 9.69981 2.8 12.9998 2.8ZM12.9998 0.549999C9.54981 0.549999 9.24981 0.549999 7.89981 0.549999C6.54981 0.549999 5.64981 0.85 4.89981 1.15C4.14981 1.45 3.39981 1.9 2.64981 2.65C1.89981 3.4 1.59981 4 1.14981 4.9C0.849806 5.65 0.699805 6.55 0.549805 7.9C0.549805 9.25 0.549805 9.7 0.549805 13C0.549805 16.45 0.549805 16.75 0.549805 18.1C0.549805 19.45 0.849806 20.35 1.14981 21.1C1.44981 21.85 1.89981 22.6 2.64981 23.35C3.39981 24.1 3.99981 24.4 4.89981 24.85C5.64981 25.15 6.54981 25.3 7.89981 25.45C9.24981 25.45 9.69981 25.45 12.9998 25.45C16.2998 25.45 16.7498 25.45 18.0998 25.45C19.4498 25.45 20.3498 25.15 21.0998 24.85C21.8498 24.55 22.5998 24.1 23.3498 23.35C24.0998 22.6 24.3998 22 24.8498 21.1C25.1498 20.35 25.2998 19.45 25.4498 18.1C25.4498 16.75 25.4498 16.3 25.4498 13C25.4498 9.7 25.4498 9.25 25.4498 7.9C25.4498 6.55 25.1498 5.65 24.8498 4.9C24.5498 4.15 24.0998 3.4 23.3498 2.65C22.5998 1.9 21.9998 1.6 21.0998 1.15C20.3498 0.85 19.4498 0.699999 18.0998 0.549999C16.7498 0.549999 16.4498 0.549999 12.9998 0.549999Z"
                  fill="white"
                ></path>
                <path
                  d="M12.9998 6.55C9.39981 6.55 6.54981 9.4 6.54981 13C6.54981 16.6 9.39981 19.45 12.9998 19.45C16.5998 19.45 19.4498 16.6 19.4498 13C19.4498 9.4 16.5998 6.55 12.9998 6.55ZM12.9998 17.2C10.7498 17.2 8.79981 15.4 8.79981 13C8.79981 10.75 10.5998 8.8 12.9998 8.8C15.2498 8.8 17.1998 10.6 17.1998 13C17.1998 15.25 15.2498 17.2 12.9998 17.2Z"
                  fill="white"
                ></path>
                <path
                  d="M19.5998 7.9C20.4282 7.9 21.0998 7.22843 21.0998 6.4C21.0998 5.57157 20.4282 4.9 19.5998 4.9C18.7714 4.9 18.0998 5.57157 18.0998 6.4C18.0998 7.22843 18.7714 7.9 19.5998 7.9Z"
                  fill="white"
                ></path>
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#c2ce21"></stop>
                  <stop offset="50%" stop-color="#ea0c5f"></stop>
                  <stop offset="100%" stop-color="#9d00ff"></stop>
                </linearGradient>
              </svg>
            </a>
            <a
              class="social__link w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] transition ease-in-out duration-600 hover:bg-transparent"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-easing="easy-in-out"
              href="https://twitter.com/youthagencyuz"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                class="twitter"
              >
                <path
                  d="M22.4001 5.98889C21.634 6.32629 20.8123 6.55355 19.9483 6.65708C20.8302 6.13202 21.5074 5.30008 21.8253 4.311C21.0011 4.79646 20.0865 5.14953 19.115 5.33926C18.3373 4.51434 17.228 4 16.0009 4C13.6437 4 11.733 5.89898 11.733 8.24094C11.733 8.57297 11.7712 8.89634 11.8447 9.20734C8.29813 9.03039 5.15329 7.34177 3.04802 4.77584C2.68075 5.40361 2.47076 6.13243 2.47076 6.9091C2.47076 8.38035 3.22273 9.67796 4.36895 10.4398C3.66844 10.4175 3.0115 10.2265 2.43631 9.90852C2.43631 9.92667 2.43631 9.94399 2.43631 9.96255C2.43631 12.0183 3.90706 13.73 5.85795 14.1218C5.50106 14.2192 5.12383 14.2703 4.73456 14.2703C4.459 14.2703 4.19133 14.2439 3.9303 14.1936C4.47519 15.8769 6.0501 17.1056 7.91716 17.1398C6.45762 18.277 4.61753 18.9542 2.61767 18.9542C2.27198 18.9542 1.93334 18.9344 1.6001 18.8948C3.4875 20.0988 5.73179 20.8 8.14126 20.8C15.9909 20.8 20.284 14.3375 20.284 8.73465C20.284 8.54987 20.2795 8.36591 20.2716 8.18525C21.1049 7.58718 21.8286 6.83939 22.4001 5.98889Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              class="social__link w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] transition ease-in-out duration-600 hover:bg-transparent"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-easing="easy-in-out"
              href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                class="youtube"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.68701 14.8593L9.6863 8.52095L15.7385 11.7011L9.68701 14.8593ZM22.9758 7.42261C22.9758 7.42261 22.7567 5.86816 22.0854 5.18364C21.2335 4.28481 20.2787 4.28057 19.8412 4.22841C16.7066 4 12.0047 4 12.0047 4H11.9949C11.9949 4 7.29301 4 4.15841 4.22841C3.72021 4.28057 2.76611 4.28481 1.91351 5.18364C1.24221 5.86816 1.0238 7.42261 1.0238 7.42261C1.0238 7.42261 0.799805 9.24847 0.799805 11.0736V12.7853C0.799805 14.6112 1.0238 16.4363 1.0238 16.4363C1.0238 16.4363 1.24221 17.9908 1.91351 18.6753C2.76611 19.5741 3.8854 19.5459 4.3838 19.6397C6.1758 19.8131 11.9998 19.8667 11.9998 19.8667C11.9998 19.8667 16.7066 19.8596 19.8412 19.6312C20.2787 19.5783 21.2335 19.5741 22.0854 18.6753C22.7567 17.9908 22.9758 16.4363 22.9758 16.4363C22.9758 16.4363 23.1998 14.6112 23.1998 12.7853V11.0736C23.1998 9.24847 22.9758 7.42261 22.9758 7.42261Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              class="social__link w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] transition ease-in-out duration-600 hover:bg-transparent"
              data-aos="zoom-in-left"
              data-aos-duration="700"
              data-aos-easing="easy-in-out"
              href="https://t.me/yoshlaragentligi"
              target="_blank"
            >
              <svg
                class="telegram"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14987 8.56244C8.59231 5.75557 12.8883 3.90512 15.0378 3.01107C21.175 0.45837 22.4503 0.0149404 23.2815 0.000141954C23.4643 -0.00292234 23.8731 0.0423843 24.1379 0.257234C24.3614 0.438648 24.4229 0.683713 24.4524 0.855714C24.4818 1.02771 24.5185 1.41954 24.4893 1.7257C24.1568 5.22014 22.7177 13.7002 21.9856 17.6141C21.6758 19.2702 21.0658 19.8254 20.4753 19.8798C19.1919 19.9979 18.2174 19.0317 16.9744 18.2169C15.0294 16.9419 13.9305 16.1482 12.0425 14.904C9.86064 13.4662 11.2751 12.6759 12.5185 11.3844C12.844 11.0464 18.4985 5.90319 18.6079 5.43662C18.6216 5.37827 18.6343 5.16076 18.5051 5.04591C18.3759 4.93105 18.1851 4.97033 18.0475 5.00156C17.8524 5.04584 14.7452 7.0996 8.72584 11.1628C7.84386 11.7685 7.04499 12.0636 6.32924 12.0481C5.54017 12.0311 4.02233 11.6019 2.89397 11.2352C1.50999 10.7853 0.410032 10.5474 0.505814 9.7834C0.555703 9.38545 1.10372 8.97846 2.14987 8.56244Z"
                  fill="white"
                ></path></svg
            ></a>
          </div>
        </div>
        <div class="footer__item_second lg:w-[65%] sm:w-[60%]">
          <nav
            class="footer-nav flex gap-[32px] items-center pb-[20px] border-b border-[#ffffff1a] grow"
          >
            <a
              href="#about"
              class="footer-nav__link font-bold md:text-[18px] sm:text-[12px] leading-[22px] uppercase transition ease-in-out delay-300 hover:text-[#28a0ff]"
            >
              {{ $t("footerNav1") }}</a
            >
            <a
              href="#sources"
              class="footer-nav__link font-bold md:text-[18px] sm:text-[12px] leading-[22px] uppercase transition ease-in-out delay-300 hover:text-[#28a0ff]"
              >{{ $t("footerNav2") }}</a
            >
            <a
              href="/"
              class="footer-nav__link font-bold md:text-[18px] sm:text-[12px] leading-[22px] uppercase transition ease-in-out delay-300 hover:text-[#28a0ff]"
              >{{ $t("footerNav3") }}</a
            >
            <a
              href="http://ys.bimm.uz/"
              class="footer-nav__link font-bold md:text-[18px] sm:text-[12px] leading-[22px] uppercase transition ease-in-out delay-300 hover:text-[#28a0ff]"
              >{{ $t("footerNav4") }}</a
            >
          </nav>
          <div class="contact flex flex-col gap-[18px] pt-[28px]">
            <div class="contact__item flex items-center gap-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g opacity="0.75">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.30377 3.99792C6.30379 3.99791 6.30404 3.99817 6.30444 3.99878L6.30377 3.99792ZM6.34683 4.06621L8.3541 7.26003C8.11154 7.48999 7.84697 7.71777 7.56223 7.96291C7.3175 8.17359 7.05788 8.39711 6.78454 8.64585C6.10705 9.26238 5.97619 10.2539 6.41466 11.0256C8.73326 15.1062 11.8957 16.963 13.3107 17.6296C14.1632 18.0312 15.0894 17.7143 15.605 17.058L16.994 15.2899C16.9949 15.2888 16.9948 15.2891 16.9943 15.2894C16.9942 15.2895 16.9952 15.2889 16.9973 15.2885C16.9994 15.2882 17.0015 15.2882 17.0032 15.2885C17.0045 15.2888 17.0062 15.2892 17.0091 15.291C17.8185 15.7906 18.9477 16.4694 19.985 17.0442C19.7987 18.1688 19.3708 18.824 18.8989 19.2246C18.4035 19.6451 17.7628 19.8665 17.0482 19.9464C15.6213 20.106 14.1728 19.6731 13.8516 19.5677C13.4971 19.3864 11.5536 18.3634 9.47717 16.7056C7.33609 14.9961 5.18918 12.7178 4.36809 10.1049C3.768 8.19529 3.99428 6.85151 4.46593 5.92459C4.92188 5.02852 5.65972 4.42034 6.34683 4.06621ZM5.62071 2.17596C6.56664 1.72731 7.54477 2.19509 8.00037 2.92002L10.1003 6.26123C10.5248 6.9367 10.5539 7.92415 9.86374 8.60058C9.56796 8.89048 9.15645 9.24679 8.77351 9.57836C8.56331 9.76036 8.36173 9.93491 8.19262 10.0869C10.1881 13.5617 12.856 15.1693 14.0694 15.7572L15.4201 14.0378C16.0579 13.226 17.1934 13.0363 18.0581 13.57C18.858 14.0636 19.9638 14.7281 20.966 15.2829C21.6343 15.653 22.1124 16.4244 21.977 17.2954C21.7337 18.8596 21.0982 19.999 20.1926 20.7678C19.3022 21.5237 18.2415 21.8444 17.2698 21.953C15.3585 22.1668 13.5305 21.588 13.1967 21.4763C13.1122 21.4479 13.042 21.4181 12.9666 21.3798C12.6083 21.1977 10.4963 20.0965 8.23016 18.2872C5.98759 16.4967 3.45851 13.9066 2.45514 10.7137C1.71811 8.36823 1.93614 6.46651 2.68011 5.0044C3.41105 3.56791 4.59475 2.66257 5.62071 2.17596Z"
                    fill="white"
                  ></path>
                </g></svg
              ><a href="tel:1093" class="contact__item-link">1093</a>
            </div>
            <div class="contact__item flex items-center gap-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g opacity="0.75">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM4.09132 6.58194C4.24961 6.23843 4.59696 6 5 6H19C19.403 6 19.7504 6.23843 19.9087 6.58194L12.6139 12.2556C12.2528 12.5365 11.7472 12.5365 11.3861 12.2556L4.09132 6.58194ZM4 9.04464V14.865L7.61261 11.8544L4 9.04464ZM4.0829 17.3993C4.23705 17.7529 4.58966 18 5 18H19C19.4103 18 19.763 17.7529 19.9171 17.3993L14.7715 13.1113L13.8418 13.8343C12.7585 14.6769 11.2415 14.6769 10.1582 13.8343L9.22853 13.1113L4.0829 17.3993ZM20 14.865V9.04464L16.3874 11.8544L20 14.865Z"
                    fill="white"
                  ></path>
                </g></svg
              ><a href="mailto:info@yoshsaylovchi.uz" class="contact__item-link"
                >info@yoshsaylovchi.uz
              </a>
            </div>
            <div class="contact__item flex items-center gap-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g opacity="0.75">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5487 12.1637L12.0455 18.7203L7.50811 12.1855C6.76428 10.7087 6.68438 8.94769 7.29099 7.40024C9.04849 2.91683 14.9513 2.90133 16.7347 7.38581C17.3475 8.92687 17.2791 10.6851 16.5487 12.1637ZM18.1983 13.1099L13.1142 20.8423L13.1135 20.8438L13.0642 20.9436L12.5873 21.6568C12.3503 22.1366 11.713 22.1391 11.4723 21.6613L11.0438 20.9518L10.9937 20.8523L10.993 20.8509L5.86579 13.1451C4.85099 11.1302 4.74198 8.7277 5.56957 6.61652C7.96992 0.493191 16.0219 0.482173 18.4522 6.59367C19.2878 8.69494 19.1949 11.0925 18.1983 13.1099ZM12.9778 9.38272C12.9791 9.9386 12.5619 10.3903 12.0459 10.3915C11.5299 10.3928 11.1105 9.94318 11.1092 9.3873C11.1078 8.83142 11.525 8.37976 12.041 8.3785C12.557 8.37723 12.9764 8.82684 12.9778 9.38272ZM14.8463 9.37814C14.8504 11.0458 13.5988 12.4008 12.0509 12.4045C10.5029 12.4083 9.24469 11.0595 9.2406 9.39187C9.23652 7.72423 10.4881 6.36926 12.0361 6.36547C13.5841 6.36168 14.8423 7.7105 14.8463 9.37814Z"
                    fill="white"
                  ></path>
                </g></svg
              ><a
                href="https://goo.gl/maps/fLDgc5ts23Y6zPqg9"
                target="_blank"
                class="contact__item-link"
              >
                {{ $t("footerAddress") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import AOS from "aos";
import FooterBottom from "../components/FooterBottom.vue";
export default {
  components: {
    FooterBottom,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>

<style lang="scss">
.footer {
  background-position: top -50px left 0;
  background-size: 1400px;
}

.social {
  &__link {
    background-color: rgba(13, 33, 68, 0.4392156862745098);
    transition: 0.6s ease-in-out;

    &:hover .facebook path {
      fill: #1877f2;
      transition: 0.4s ease-in-out;
    }

    &:hover .instagram path {
      fill: #db7093;
      transition: 0.4s ease-in-out;
    }

    &:hover .twitter path {
      fill: #1da1f2;
      transition: 0.4s ease-in-out;
    }

    &:hover .youtube path {
      fill: #f70000;
      transition: 0.4s ease-in-out;
    }

    &:hover .telegram path {
      fill: #08c;
      transition: 0.4s ease-in-out;
    }
  }
}

@media only screen and (max-width: 640px) {
  .footer-inner {
    display: flex;
    flex-direction: column;
  }

  .footer__item_first {
    width: 100%;
    margin-bottom: 30px;
  }

  .footer__item_second {
    width: 100%;

    nav {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .footer-nav__link {
    font-size: 12px;
  }

  .footer__text {
    font-size: 12px;
  }

  .contact__item-link {
    font-size: 12px;
  }
}
</style>
