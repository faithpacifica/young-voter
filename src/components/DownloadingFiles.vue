<template lang="">
-->
<div id="sources" class="downloadfiles border-red-900 pt-[64px] pb-[60px] bg-[#F8F9FB] h-[100%]">
  <div class="container">
    <div class="tabs-wrapper">
      <el-tabs tab-position="left" style="height: 400px" class="demo-tabs my-tab">
        <el-tab-pane class="uppercase flex flex-wrap" :label="$t('forVoters')">
          <div>
            <div class="files-group overflow-auto flex flex-wrap items-start justify-between w-[100%] gap-[24px]">
              <Files :item="item" v-for="(item, index) in ForVoters" :key="index" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="uppercase flex flex-wrap" :label="$t('forVolunteers')">
          <div>
            <div class="files-group overflow-auto flex flex-wrap items-start justify-between w-[100%] gap-[24px]">
              <Files :item="item" v-for="(item, index) in ForVolonteers" :key="index" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="uppercase flex flex-wrap" :label="$t('forTreners')">
          <div>
            <div class="files-group overflow-auto flex flex-wrap items-start justify-between w-[100%] gap-[24px]">
              <Files :item="item" v-for="(item, index) in ForCoaches" :key="index" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
</template>

<script>
import Files from "./Files.vue";
export default {
  components: {
    Files,
  },
  data() {
    return {
      ForVoters: [{
          filePath: "https://yoshsaylovchi.uz/files/uz_constitution.pdf",
          fileImg: require("@/static/img/doc.png"),
          title: " O'zbekiston Respublikasi Konstitutsiyasi",
          fileType: "XLS",
          unit: "325KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/uz_codex.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O'zbekiston Respublikasi Konstitutsiyasi",
          fileType: "ZIP",
          unit: "225KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/uz_constitution.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: "  O'zbekiston Respublikasi Saylov kodeksi ",
          fileType: "PDF",
          unit: "425KB",
        },
      ],

      ForVolonteers: [{
          filePath: "https://yoshsaylovchi.uz/files/partiya_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O'zbekiston Respublikasining qonuni Siyosiy partiyalar to'g'risida ",
          fileType: "PDF",
          unit: "431KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/referendum_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " Saylov va referendumga tayyorgarlik ko‘rish hamda ularni o‘tkazish bilan bog‘liq bo‘lgan hujjatlarni saqlash, arxivga topshirish va yo‘q qilish tartibi to‘g‘risida ",
          fileType: "PDF",
          unit: "212KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/saylov_qollanma_uz.pdf",
          fileImg: require("@/static/img/doc.png"),
          title: "  ЁШ САЙЛОВЧИ ҚЎЛЛАНМАСИ (Савол-жавоб шаклида) ",
          fileType: "PDF",
          unit: "829KB",
        },
      ],

      ForCoaches: [{
          filePath: "https://yoshsaylovchi.uz/files/trener_komissiyatarkibi_uz.pdf",
          fileImg: require("@/static/img/doc.png"),
          title: " Okrug va uchastka saylov komissiyalari tarkibini shakllantirish bo‘yicha YO‘RIQNOMA ",
          fileType: "PDF",
          unit: "215KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_kuzatuvchilar_uz.pdf",
          fileImg: require("@/static/img/zip.png"),
          title: " O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
          fileType: "PDF",
          unit: "383KB",
        },
        {
          filePath: "https://yoshsaylovchi.uz/files/trener_qaror_uz.pdf",
          fileImg: require("@/static/img/doc.png"),
          title: "  O‘ZBEKISTON RESPUBLIKASI SAYLOVCHILARINING YAGONA ELEKTRON RO‘YXATINI SHAKLLANTIRISH VA YURITISH CHORA-TADBIRLARI TO‘G‘RISIDA  ",
          fileType: "PDF",
          unit: "407KB",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.downloadfiles {
  // 3 hil tilda obyekt yozish
  background-image: url(@/static/img/files-shadow-bg.svg);
  background-repeat: no-repeat;
  background-position: left 0px bottom -136px;
  background-size: 420px 530px;

  .el-tabs__header {
    width: 30%;
  }

  .el-tabs__active-bar {
    width: 10px !important;
    height: 10px !important;
    background: #0083ff !important;
    box-shadow: 0px 0px 20px rgba(0, 131, 255, 0.65);
    border-radius: 40px !important;
    left: 0 !important;
    top: 10px !important;
    position: absolute;
    display: inline-block;
  }

  .el-tabs--left {
    overflow: auto;

    @media (min-width: 370px) and (max-width: 640px) {
      overflow: unset !important;
    }
  }

  .el-tabs--left .el-tabs__item.is-left {
    height: auto !important;
    padding: 0 !important;
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #b4b7bd;
    margin-bottom: 20px;
    margin-left: 10px;
    text-transform: uppercase !important;
  }

  .el-tabs--left .el-tabs__item.is-active {
    color: #0d2144 !important;
  }

  .el-tabs--left .el-tabs__item.is-active {
    transform: translateX(15px);
  }

  .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
  }

  .el-tabs__item {
    white-space: break-spaces !important;
  }

  //FILE-BOX

  .files-group {
    padding: 10px 18px 30px;
  }
}

// RESPONSIVE
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .el-tabs__item.is-left {
    font-size: 22px !important;
  }
}

@media screen and (min-width: 640px) and (max-width: 767px) {
  .file-item__inner {
    padding: 8px;
  }

  .el-tabs__item.is-left {
    font-size: 22px !important;
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .el-tabs__item {
    white-space: unset !important;
  }

  .my-tab {
    display: flex !important;
    flex-direction: column !important;
  }

  .el-tabs--left .el-tabs__header.is-left {
    width: 100%;
  }

  .el-tabs__item.is-left {
    font-size: 24px !important;
    line-height: 28px !important;
  }

  .el-tabs--left {
    height: fit-content !important;
  }
}
</style>
