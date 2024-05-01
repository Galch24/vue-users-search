<template>
  <div class="user-item">
    <div class="item-image">
      <img :src="user.image" alt="" />
    </div>
    <div class="item-description">
      <div class="item-name">{{ user.name }}</div>
      <div class="item-email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserItem",
  psops: {
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
  box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
}
.user-image {
  border-right: 1px solid #e0e0e0;
  width: 70px;
  height: 70px;
  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
}
.item-name {
  font-weight: 600;
}
.item-email {
  color: #76787d;
}
</style>
