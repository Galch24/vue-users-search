<template>
  <div class="loader-wrapper">
    <div class="loader">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ReplayIcon"
      >
        <path
          d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
  props: {
    width: {
      type: String,
      default: "40",
    },
  },
});
</script>

<style scoped lang="scss">
.loader-wrapper {
  position: relative;
  overflow: hidden;
}
.loader {
  width: 100%;
  text-align: center;
  opacity: 0.5;
  animation: aniRotate 1.1s infinite ease;

  img {
    max-width: 100%;
    height: auto;
  }
  svg {
    width: 40px;
    height: 40px;
  }
}
@keyframes aniRotate {
  0% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
