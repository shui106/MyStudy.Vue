<template>
    <div>
        <MySlider></MySlider>
        login
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MySlider from "@/components/my-slider.vue";

@Component({
    components: { MySlider }
})
export default class Login extends Vue {}
</script>

