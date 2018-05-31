import Entity from "./entity";
import { Prop } from "vue-property-decorator";

export default class User extends Entity<number> {
    @Prop() name!: string;
}
