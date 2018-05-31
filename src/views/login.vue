<template>
    <div>
        <MySlider></MySlider>
        login
        <div>{{getName()}}</div>
        <button @click="save">click</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MySlider from "@/components/my-slider.vue";

@Component({
    components: { MySlider }
})
export default class Login extends Vue {
    save() {
        this.$store.commit("user/appendSomething");
    }
    getName() {
        return this.$store.state.user.Name;
    }
}
</script>

