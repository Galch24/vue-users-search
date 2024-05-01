<template>
  <div v-if="user" class="user-item">
    <div class="item-image">
      <img src="/images/image-placeholder.svg" alt="" />
    </div>
    <div class="item-description">
      <div class="item-name">{{ user.username }}</div>
      <div class="item-email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserItem",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.user-item {
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
}
.item-image {
  // border-right: 1px solid #e0e0e0;
  min-width: 70px;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 8px 0 0 8px;
  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
}
.item-name {
  font-weight: 600;
  margin-bottom: 5px;
}
.item-email {
  color: #76787d;
  word-break: break-word;
}
.item-description {
  padding: 8px 14px;
}
</style>
