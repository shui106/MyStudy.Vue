import { Prop } from "vue-property-decorator";

export default class Entity<T> {
    @Prop() id!: T;
}
