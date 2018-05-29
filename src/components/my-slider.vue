<template>
    <Slider v-model="value" range />
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class MySlider extends Vue {
      value = [20, 30];
}
</script>