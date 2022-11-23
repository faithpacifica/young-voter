<template>
  <section class="bg-[#0f1c34]">
    <div
      class="vieo-post flex items-center overflow-auto flex justify-between lg:nowrap sm:flex-wrap"
    >
      <div
        class="video-post__main lg:w-[60%] sm:w-[100%] sm:h-[552px] cursor-pointer relative"
        @click="removeOverlay"
      >
        <div ref="overlay" class="video-post-overlay cursor-pointer"></div>
        <iframe
          class="main-video w-[100%] h-[100%]"
          :src="selected ? selected.src : videos[0].src"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <ul
        class="video-post__list lg:p-[64px] sm:p-[16px] overflow-auto h-[552px] lg:w-[40%] sm:w-[100%]"
      >
        <li
          class="video-post__item flex mb-[12px]"
          v-for="(item, index) in videos"
          :key="index"
          @click="switchVideo(item.id)"
        >
          <div class="relative opacity-20">
            <img
              class="absolute top-0 right-0 left-0 bottom-0 h-[100%] w-[100%] object-cover object-center"
              :src="item.img"
              alt="youtube-video"
            />
            <iframe
              width="116"
              height="100"
              :src="item.src"
              title="YouTube video player"
              frameborder="0"
            ></iframe>
          </div>
          <div class="vpost-info flex flex-col p-[12px] w-[100%]">
            <div class="flex justify-between lg:mb-[11px]">
              <span class="vpost-date text-[#a1a1a1] text-[12px] font-normal">{{
                item.date
              }}</span>
              <span
                class="vpost-time md:self-center text-[#fff] py-[2px] px-[6px] bg-[#ffffff33] text-[12px] font-normal"
                >{{ item.duration }}</span
              >
            </div>
            <h2 class="vpost-info__title text-[14px] font-medium text-[#fff]">
              {{ item.title }}
            </h2>
          </div>
        </li>
        <a
          class="flex items-center gap-[16px] mt-[16px]"
          href="https://www.youtube.com/channel/UCX56mtcUc4w6ShBlCmBPC2g"
          target="_blank"
        >
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path
              d="M24.8108 5.81639C24.5273 4.7078 23.692 3.8347 22.6313 3.53841C20.7089 3 13 3 13 3C13 3 5.29119 3 3.36868 3.53841C2.30805 3.83475 1.47271 4.7078 1.1892 5.81639C0.674072 7.82578 0.674072 12.0182 0.674072 12.0182C0.674072 12.0182 0.674072 16.2106 1.1892 18.22C1.47271 19.3286 2.30805 20.1653 3.36868 20.4616C5.29119 21 13 21 13 21C13 21 20.7088 21 22.6313 20.4616C23.692 20.1653 24.5273 19.3286 24.8108 18.22C25.326 16.2106 25.326 12.0182 25.326 12.0182C25.326 12.0182 25.326 7.82578 24.8108 5.81639ZM10.4788 15.8246V8.2118L16.9219 12.0183L10.4788 15.8246Z"
              fill="#0083FF"
            ></path>
          </svg>
          <span class="text-[#fff] text-[14px] font-medium leading-[17px]">
            {{ $t("all") }}</span
          >
        </a>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          src: "https://www.youtube.com/embed/eRTLkIWRtsw",
          img: "https://img.youtube.com/vi/eRTLkIWRtsw/maxresdefault.jpg",
          title: "Kelajaging uchun ovoz ber! / Келажагинг учун овоз бер!",
          type: "Future",
          date: "14 sentyabr 2021",
          duration: "1:08",
        },
        {
          id: 2,
          src: "https://www.youtube.com/watch?v=3DdxF5NNTLg",
          img: "https://img.youtube.com/vi/3DdxF5NNTLg/maxresdefault.jpg",
          title: "«Ёш сайловчи-2021» форуми ва ўқув семинарлари",
          type: "Future",
          date: "14 sentyabr 2021",
          duration: "6:14",
        },
        {
          id: 3,
          src: "https://www.youtube.com/embed/yt6wXeJbyCI",
          img: "https://img.youtube.com/vi/yt6wXeJbyCI/maxresdefault.jpg",
          title:
            "Новости 24 | Повышение правовой грамотности молодых избирателей в Каракалпакстане",
          type: "Texnalogiya",
          date: "21 dekabr 2020",
          duration: "2:43",
        },
        {
          id: 4,
          src: "https://www.youtube.com/embed/SwRfNYBbShg",
          img: "https://img.youtube.com/vi/SwRfNYBbShg/hqdefault.jpg",
          title:
            "My5: Qoraqalpog’iston Respublikasida “Yosh saylovchi” loyihasi o’tkazilmoqda.",
          type: "Project",
          date: "23 noyabr 2020",
          duration: "1:53",
        },
        {
          id: 5,
          src: "https://www.youtube.com/embed/G5GMPs63ok4",
          img: "https://i.ytimg.com/vi_webp/G5GMPs63ok4/maxresdefault.webp",
          title: 'Jasur Jumayev, "Jasorat" medali sohibi',
          type: "Project",
          date: "14 sentyabr 2021",
          duration: "5:03",
        },
        {
          id: 6,
          src: "https://www.youtube.com/embed/SttAmW1MgMI",
          img: "https://i.ytimg.com/vi_webp/SttAmW1MgMI/maxresdefault.webp",
          title:
            'Suhrob Abduhafizov, Toshkent shahar "Kelajak liderlari" klubi prezidenti',
          type: "Project",
          date: "30 sentyabr 2021",
          duration: "1:40",
        },
        {
          id: 7,
          src: "https://www.youtube.com/embed/4rigmM0vOes",
          img: "https://i.ytimg.com/vi_webp/4rigmM0vOes/maxresdefault.webp",
          title: "Sarvar Bahodirov, jurnalist",
          type: "Project",
          date: "1 oktabr 2021",
          duration: "2:14",
        },
        {
          id: 8,
          src: "https://www.youtube.com/embed/lY7PrlsKqr8",
          img: "https://i.ytimg.com/vi_webp/lY7PrlsKqr8/maxresdefault.webp",
          title: 'Shaxzod Bahodirov, "Kelajak bunyodkori" medali sohibi',
          type: "Project",
          date: "30 sentyabr 2021",
          duration: "1:45",
        },
      ],
      selected: null,
    };
  },
  methods: {
    switchVideo(id) {
      this.selected = this.videos.find((element) => id === element.id);
    },
    removeOverlay() {
      this.$refs.overlay.classList.remove("video-post-overlay");
    },
  },
};
</script>

<style lang="scss">
.video-post {
  position: relative;
  &__item {
    background-color: rgba(61, 64, 71, 0.2);
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover .vpost-info {
      background-color: rgba(68, 127, 236, 0.1);
    }

    .vpost-info__title {
      overflow: hidden !important;
      display: inline-block !important;
      text-overflow: ellipsis !important;
      display: -webkit-box !important;
      -webkit-line-clamp: 2 !important;
      -webkit-box-orient: vertical !important;
    }
  }
}

.video-post-overlay {
  background-color: rgba(19, 30, 52, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

@media only screen and (max-width: 640px) {
  .vieo-post {
    flex-wrap: wrap;
    height: 100%;
  }

  .video-post__main {
    width: 100%;
    height: 288px;
  }

  .video-post__list {
    width: 100%;
    padding: 16px;
  }

  .vpost-info__title {
    font-size: 14px;
  }
}
</style>
