<template>
<el-dialog v-model="outerVisible" title="" draggable>
  <div class="relative text-center shareModal__modal">
    <img class="mb-[27px]" src="@/static/img/introModal-bg.png" alt="" srcset="" />
    <span class="modal-info absolutefont-bold text-[28px] leading-[36px] text-white mb[27px]">{{ $t("introHashtag") }}</span>
    <ul class="modal__list flex justify-center gap-[24px]">
      <li class="modal__list-item modal__facebook inline-block bg-[#B4BFD2] rounded-[50px] p-[12px]">
        <a href="https://www.facebook.com/" target="_blank" rel="nofollow" class="bg-white modal-social facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12C24 5.4 18.6 0 12 0C5.4 0 0 5.4 0 12C0 18 4.35 22.95 10.05 23.85V15.45H7.05V12H10.05V9.3C10.05 6.3 11.85 4.65 14.55 4.65C15.9 4.65 17.25 4.95 17.25 4.95V7.95H15.75C14.25 7.95 13.8 8.85 13.8 9.75V12H17.1L16.5 15.45H13.65V24C19.65 23.1 24 18 24 12Z" fill="white" />
          </svg>
        </a>
      </li>

      <li class="modal__list-item modal__twitter inline-block bg-[#B4BFD2] rounded-[50px]">
        <a href="https://twitter.com/" target="_blank" rel="nofollow" class="modal-social">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2.5C23.1 2.95 22.2 3.1 21.15 3.25C22.2 2.65 22.95 1.75 23.25 0.55C22.35 1.15 21.3 1.45 20.1 1.75C19.2 0.85 17.85 0.25 16.5 0.25C13.35 0.25 10.95 3.25 11.7 6.25C7.65 6.1 4.05 4.15 1.5 1.15C0.15 3.4 0.9 6.25 3 7.75C2.25 7.75 1.5 7.45 0.75 7.15C0.75 9.4 2.4 11.5 4.65 12.1C3.9 12.25 3.15 12.4 2.4 12.25C3 14.2 4.8 15.7 7.05 15.7C5.25 17.05 2.55 17.8 0 17.5C2.25 18.85 4.8 19.75 7.5 19.75C16.65 19.75 21.75 12.1 21.45 5.05C22.5 4.45 23.4 3.55 24 2.5Z" fill="white" />
          </svg>
        </a>
      </li>

      <li class="modal__list-item modal__telegram inline-block bg-[#B4BFD2] rounded-[50px]">
        <a href="https://telegram.me/share/url?url=https://yosh-saylovchi.vercel.app/&amp;text=#KelajagingUchunOvozBer" target="_blank" rel="nofollow" class="modal-social">
          <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.14987 8.56244C8.59231 5.75557 12.8883 3.90512 15.0378 3.01107C21.175 0.45837 22.4503 0.0149404 23.2815 0.000141954C23.4643 -0.00292234 23.8731 0.0423843 24.1379 0.257234C24.3614 0.438648 24.4229 0.683713 24.4524 0.855714C24.4818 1.02771 24.5185 1.41954 24.4893 1.7257C24.1567 5.22014 22.7177 13.7002 21.9856 17.6141C21.6758 19.2702 21.0658 19.8254 20.4753 19.8798C19.1919 19.9979 18.2174 19.0317 16.9744 18.2169C15.0294 16.9419 13.9305 16.1482 12.0425 14.904C9.86064 13.4662 11.2751 12.6759 12.5185 11.3844C12.844 11.0464 18.4985 5.90319 18.6079 5.43662C18.6216 5.37827 18.6343 5.16076 18.5051 5.04591C18.3759 4.93105 18.1851 4.97033 18.0475 5.00156C17.8524 5.04584 14.7452 7.0996 8.72584 11.1628C7.84386 11.7685 7.04499 12.0636 6.32924 12.0481C5.54017 12.031 4.02233 11.6019 2.89397 11.2352C1.50999 10.7853 0.410032 10.5474 0.505814 9.7834C0.555703 9.38545 1.10372 8.97846 2.14987 8.56244Z" fill="white" />
          </svg>
        </a>
      </li>

      <li class="modal__list-item modal__instagram inline-block bg-[#B4BFD2] rounded-[50px]">
        <a href="https://www.linkedin.com/" target="_blank" class="modal-social">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9999 2.80005C16.2999 2.80005 16.7499 2.80005 18.0999 2.80005C19.2999 2.80005 19.8999 3.10005 20.3499 3.25005C20.9499 3.55005 21.3999 3.70005 21.8499 4.15005C22.2999 4.60005 22.5999 5.05005 22.7499 5.65005C22.8999 6.10005 23.0499 6.70005 23.1999 7.90005C23.1999 9.25005 23.1999 9.55005 23.1999 13C23.1999 16.45 23.1999 16.75 23.1999 18.1C23.1999 19.3 22.8999 19.9 22.7499 20.35C22.4499 20.95 22.2999 21.4 21.8499 21.85C21.3999 22.3 20.9499 22.6 20.3499 22.75C19.8999 22.9 19.2999 23.05 18.0999 23.2C16.7499 23.2 16.4499 23.2 12.9999 23.2C9.54993 23.2 9.24993 23.2 7.89993 23.2C6.69993 23.2 6.09993 22.9 5.64993 22.75C5.04993 22.4501 4.59993 22.3 4.14993 21.85C3.69993 21.4 3.39993 20.95 3.24993 20.35C3.09993 19.9 2.94993 19.3 2.79993 18.1C2.79993 16.75 2.79993 16.45 2.79993 13C2.79993 9.55005 2.79993 9.25005 2.79993 7.90005C2.79993 6.70005 3.09993 6.10005 3.24993 5.65005C3.54993 5.05005 3.69993 4.60005 4.14993 4.15005C4.59993 3.70005 5.04993 3.40005 5.64993 3.25005C6.09993 3.10005 6.69993 2.95005 7.89993 2.80005C9.24993 2.80005 9.69993 2.80005 12.9999 2.80005ZM12.9999 0.550049C9.54993 0.550049 9.24993 0.550049 7.89993 0.550049C6.54993 0.550049 5.64993 0.85005 4.89993 1.15005C4.14993 1.45005 3.39993 1.90005 2.64993 2.65005C1.89993 3.40005 1.59993 4.00005 1.14993 4.90005C0.849928 5.65005 0.699927 6.55005 0.549927 7.90005C0.549927 9.25005 0.549927 9.70005 0.549927 13C0.549927 16.45 0.549927 16.75 0.549927 18.1C0.549927 19.45 0.849928 20.35 1.14993 21.1C1.44993 21.85 1.89993 22.6 2.64993 23.35C3.39993 24.1 3.99993 24.4 4.89993 24.85C5.64993 25.1501 6.54993 25.3 7.89993 25.45C9.24993 25.45 9.69993 25.45 12.9999 25.45C16.2999 25.45 16.7499 25.45 18.0999 25.45C19.4499 25.45 20.3499 25.1501 21.0999 24.85C21.8499 24.55 22.5999 24.1 23.3499 23.35C24.0999 22.6 24.3999 22 24.8499 21.1C25.1499 20.35 25.2999 19.45 25.4499 18.1C25.4499 16.75 25.4499 16.3 25.4499 13C25.4499 9.70005 25.4499 9.25005 25.4499 7.90005C25.4499 6.55005 25.1499 5.65005 24.8499 4.90005C24.5499 4.15005 24.0999 3.40005 23.3499 2.65005C22.5999 1.90005 21.9999 1.60005 21.0999 1.15005C20.3499 0.85005 19.4499 0.700049 18.0999 0.550049C16.7499 0.550049 16.4499 0.550049 12.9999 0.550049Z" fill="white" />
            <path d="M12.9999 6.55005C9.39993 6.55005 6.54993 9.40005 6.54993 13C6.54993 16.6 9.39993 19.45 12.9999 19.45C16.5999 19.45 19.4499 16.6 19.4499 13C19.4499 9.40005 16.5999 6.55005 12.9999 6.55005ZM12.9999 17.2C10.7499 17.2 8.79993 15.4 8.79993 13C8.79993 10.75 10.5999 8.80005 12.9999 8.80005C15.2499 8.80005 17.1999 10.6 17.1999 13C17.1999 15.25 15.2499 17.2 12.9999 17.2Z" fill="white" />
            <path d="M19.5999 7.90005C20.4284 7.90005 21.0999 7.22848 21.0999 6.40005C21.0999 5.57162 20.4284 4.90005 19.5999 4.90005C18.7715 4.90005 18.0999 5.57162 18.0999 6.40005C18.0999 7.22848 18.7715 7.90005 19.5999 7.90005Z" fill="white" />
          </svg>
        </a>
      </li>
    </ul>
    <button></button>
  </div>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      outerVisible: false,
    };
  },
  props: {
    modalProps: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.modal__facebook:hover {
  background-color: #1877f2;
}

.modal__telegram:hover {
  background-color: #0088cc;
}

.modal__twitter:hover {
  background-color: #1da1f2;
}

.modal__instagram:hover {
  background-image: linear-gradient(40.35deg,
      #ffab5a 5.58%,
      #f0506f 42.71%,
      #cf30ae 93.54%);
}

.modal__twitter {
  padding: 14.25px 12px;
}

.modal__telegram {
  padding: 14.25px 13.5px 13px 10.5px;
}

.modal__instagram {
  padding: 11px;
}

.modal-info {
  position: absolute;
  top: 25px;
  left: 75px;
}

.el-dialog {
  top: 110px;
  max-width: 470px !important;
  width: 100%;
  border-radius: 12px !important;
  padding: 51px 20px 30px !important;
}

.el-dialog__header {
  padding: 0 !important;
}

.el-dialog__body {
  padding: 0 !important;
}

.el-icon svg {
  color: white;
  /* height: 3em !important;
  width: 2em !important; */
}

.el-dialog__headerbtn {
  top: -45px;
}

// RESPONSIVE
@media screen and (min-width: 370px) and (max-width: 500px) {
  .el-dialog {
    max-width: 350px !important;
  }

  .modal-info {
    left: 55px;
    top: 18px;
    font-size: 20px;
  }
}
</style>
