<template lang="">
  <div class="files flex max-w-[360px] cursor-pointer">
    <a :href="item.filePath" :download="item.filePath" class="file-item">
      <div
        class="file-item__inner flex items-center p-[20px] bg-[#fff] rounded-[12px]"
      >
        <div class="file-type-img mr-[25px]">
          <div class="w-[48px] h-[48px]">
            <img :src="item.fileImg" width="48" height="48" />
          </div>
        </div>
        <div class="info-detail">
          <h4
            class="file-item__title text-[16px] leading-[21px] text-[#2D2C3D]"
          >
            {{ item.title }}
          </h4>
          <div class="info-detail__file flex items-center">
            <p class="info-detail__text font-[14px] leading-[18px] ml-[6px]">
              <span>{{ item.fileType }}</span
              >: <span>{{ item.unit }}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
/* FILE-BOX */

.files {
  border-radius: 12px;
  transition: 0.5s ease-in-out;

  .file-item {
    transition: hover 0.5s ease;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  }

  &:hover {
    box-shadow: 0 4px 20px rgb(13 33 68 / 86%);
    border-radius: 12px;
  }

}

.info-detail {
  .file-item__title {
    font-weight: 700;
    color: #2d2c3d;
    font-size: 16px;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .info-detail__file {
    .info-detail__text {
      color: rgba(45, 44, 61, 0.5);
    }
  }
}

</style>
