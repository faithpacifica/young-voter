<template>
<div class="w-[100%] mb-[24px]" :style="{ 'background-color': sliderBackgroundColor }">
  <div id="slider" ref="slider" :class="sliderClass" :style="{ color: textColor }">
    <div id="overlay" ref="overlay" :style="[overlayStyle, { 'background-color': overlayColor }]"></div>
    <button id="slide-button" ref="slideButton" class="slide-button" :style="[{ 'background-color': buttonColor }, slideButtonStyle]" @mousedown="startSwipe" @mousemove="continueSwipe" @mouseup="endSwipe" @touchstart="startSwipe" @touchmove="continueSwipe" @touchend="endSwipe">
      <div class="button-text" v-html="buttonText"></div>
    </button>
    <div class="slide-text">
      {{ instructionText }}
    </div>
    <div class="slide-tick" id="slide-tick">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.01572 12.0054L10.5699 16.8675L19.3862 6.2356" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "IdentifySwipeButton",
  props: {
    seriya: {
      type: String,
    },
    number: {
      type: Number,
    },
    initialInstructionText: {
      type: String,
      default: "Tasdiqlash uchun o‘ngga suring",
    },
    completedText: {
      type: String,
      default: "Tasdiqlandi",
    },
    buttonText: {
      type: String,
      default: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">/n' +
        '<path d="M13.125 17.625L18.75 12L13.125 6.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>/n' +
        '<path d="M5.25 17.625L10.875 12L5.25 6.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>/n' +
        "</svg>",
    },
    sliderBackgroundColor: {
      type: String,
      default: "#17255A",
    },
    overlayColor: {
      type: String,
      default: "#FFFFFF",
    },
    buttonColor: {
      type: String,
      default: "#D88373",
    },
    textColor: {
      type: String,
      default: "#F5E2C8",
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      initialMouseX: 0,
      currentMouseX: 0,
      startDrag: false,
      endPoint: 0,
      initialSliderWidth: 0,
      initialSlideButtonPosition: 0,
      instructionText: this.initialInstructionText,
      overlayStyle: {
        width: "0px",
      },
      slideButtonStyle: {
        left: "0px",
      },
      sliderClass: "",
      completed: false,
    };
  },
  methods: {
    startSwipe(event) {
      if (this.seriya.length === 0) {
        this.startDrag = false;
        this.continueSwipe = false;
      } else {
        this.startDrag = true;
      }
      if (this.number == null) {
        this.startDrag = false;
        this.continueSwipe = false;
      } else {
        this.startDrag = true;
      }
      console.log(this.seriya.length);
      console.log(this.number);

      if (this.completed) {
        return;
      }

      this.initialMouseX = this.getMouseXPosFromEvent(event);
      this.endPoint = this.getEndingPoint();
      this.calculateSliderInitialWidth();
      this.calculateSlideButtonInitialPosition();
      this.updateSlideButton(0);
      this.updateSlider(0);
      this.sliderClass = "started";
    },
    getEndingPoint() {
      const clientRects = this.$refs.slider.getClientRects()[0];
      return clientRects.right;
    },
    calculateSliderInitialWidth() {
      const sliderLeftPos = this.$refs.slider.getClientRects()[0].x;
      this.initialSliderWidth = this.initialMouseX - sliderLeftPos;
      if (this.initialSliderWidth < 0) {
        this.initialSliderWidth = 0;
      }
    },
    calculateSlideButtonInitialPosition() {
      this.initialSlideButtonPosition = this.$refs.slider.getClientRects()[0].x;
    },
    continueSwipe(event) {
      if (!this.startDrag) {
        return;
      }
      this.currentMouseX = this.getMouseXPosFromEvent(event);
      const delta = this.currentMouseX - this.initialMouseX;
      this.updateSlider(delta);
      this.updateSlideButton(delta);

      if (this.sliderReachedEndPoint()) {
        this.endSwipe();
      }
    },
    endSwipe() {
      this.startDrag = false;
      if (this.sliderReachedEndPoint()) {
        this.sliderClass = "completed";
        this.overlayStyle.width = `${
          this.$refs.slider.getClientRects()[0].width
        }px`;
        this.actionConfirmed();
      } else {
        this.sliderClass = "";
        this.overlayStyle.width = "0px";
        this.slideButtonStyle.left = "0px";
      }
    },
    getMouseXPosFromEvent(event) {
      return event.clientX || event.touches[0].pageX;
    },
    updateSlider(delta) {
      const sliderWidth = this.getSliderWidth();
      let newWidth = this.initialSliderWidth + delta;
      if (newWidth > sliderWidth) {
        newWidth = sliderWidth;
      }
      this.overlayStyle.width = `${newWidth}px`;
    },
    getSliderWidth() {
      return this.$refs.slider.getClientRects()[0].width;
    },
    updateSlideButton(delta) {
      if (delta < 0) {
        return;
      }
      this.slideButtonStyle.left = `${delta}px`;
      if (this.sliderReachedEndPoint()) {
        const buttonLeftPos = this.getSliderWidth() - this.getButtonWidth();
        this.slideButtonStyle.left = `${buttonLeftPos}px`;
      }
    },
    getButtonWidth() {
      const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.width;
    },
    sliderReachedEndPoint() {
      const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
      return slideButtonRect.right >= this.endPoint;
    },
    actionConfirmed() {
      if (!this.completed) {
        this.completed = true;
        this.instructionText = this.completedText;
        let slideBtn = document.getElementById("slide-button");
        let slideTick = document.getElementById("slide-tick");
        slideBtn.style.visibility = "hidden";
        slideTick.style.transform = "translateX(0)";
        this.$emit("actionConfirmed");
      }
    },
    reset() {
      this.completed = false;
      this.sliderClass = "";
      this.updateSlider(0);
      this.updateSlideButton(0);
      this.slideButtonStyle.left = "0px";
    },
    initEndPoint() {
      this.endPoint = this.getEndingPoint();
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.continueSwipe);
    document.addEventListener("mouseup", this.endSwipe);
    this.initEndPoint();
  },
  destroyed() {
    document.removeEventListener("mousemove", this.continueSwipe);
    document.removeEventListener("mouseup", this.endSwipe);
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin nonselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

#slider {
  position: relative;
  width: 100%;
  background: #253756;
  border: 1px solid #515f78;
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
  left: 0px;
  top: 0;
  width: 100px;
  height: 42px;
  border-radius: 12px;
  background: #253756 !important;
  @include flex-center;
  @include nonselect;
}

.slide-text {
  @include nonselect;
  z-index: 10;
  font-size: 12px;
  line-height: 20px;
  color: #93a3be;
}

.started {

  #overlay,
  .slide-button {
    transition: none;
  }
}

.slide-button {
  width: 18%;
  transition: 0.5s ease;
  position: absolute;
  top: 0;
  padding: 15px;
  border-radius: 6px 0 0 6px;
  background-color: #132543 !important;
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  .button-text {
    height: 24px;
  }
}

.slide-tick-show {
  transform: translateX(0);
}

.slide-button-none {
  transform: translateX(100%);
}

.swipe-button {
  border-radius: 8px !important;
}
</style>
