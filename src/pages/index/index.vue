<template>
  <view class="view">
    <text class="count">{{ count }}</text>
    <button class="btn" @click="handleClick">Click</button>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const rawCount = ref(0)

    const count = computed(() => rawCount.value)

    function handleClick() {
      rawCount.value++
    }

    watch(rawCount, val => {
      console.log(val)
    })

    return {
      count,
      handleClick
    }
  }
})
</script>

<style scoped>
.view {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.count {
  margin: 40rpx;
  font-size: 34rpx;
}

.btn {
  width: 200rpx;
}
</style>
