<template>
  <div v-if="user" class="user-card">
    <div class="item-image">
      <img src="/images/image-placeholder-lg.svg" alt="" />
    </div>
    <div class="item-description">
      <div class="item-name item-field">{{ user.name }}</div>
      <div class="item-email item-field">
        <div class="option-label">email:</div>
        <div class="option-value">{{ user.email }}</div>
      </div>
      <div class="item-phone item-field">
        <div class="option-label">phone:</div>
        <div class="option-value">{{ user.phone }}</div>
      </div>
      <h3>О себе:</h3>
      <div class="item-about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  </div>
  <div v-else class="empty-message">
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { UserInterface } from "@/types/storeTypes";

// TODO скорректировать тип
type TMapState = Partial<{
  user: (state: any) => UserInterface | null;
}>;

export default defineComponent({
  name: "UserCard",
  computed: {
    ...mapState<any, TMapState>({
      user: (state) => state.user.selectedUser,
    }),
  },
});
</script>

<style scoped lang="scss">
@import "/src/styles/variables/grid";
.empty-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.user-card {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 1.2;
  flex-wrap: wrap;
  align-items: flex-start;
}
.item-image {
  width: 50%;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
  @media #{$media-md-up} {
    padding-right: 43px;
  }
  @media #{$media-to-md} {
    width: 100%;
  }
}
.item-name,
.option-label,
h3 {
  color: #333;
}
.item-name {
  font-weight: 600;
}
.option-label {
  font-weight: 600;
  margin-right: 10px;
}
.item-email {
  color: #76787d;
  word-break: break-word;
}
.item-description {
  padding: 2px 19px;
  width: 50%;
  box-sizing: border-box;
  color: #76787d;
  @media #{$media-to-md} {
    width: 100%;
  }
}
.item-field {
  margin-bottom: 14px;
  display: flex;
  align-items: flex-start;
}

h3 {
  margin-bottom: 27px;
  margin-top: 22px;
}
</style>
