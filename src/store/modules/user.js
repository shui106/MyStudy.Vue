import baseModule from "./base";
class UserModule extends baseModule {
    constructor() {
        super(...arguments);
        this.state = {
            Name: "Name"
        };
        this.actions = {};
        this.mutations = {
            appendSomething(state) {
                state.Name += "+Test";
            }
        };
    }
}
const userModule = new UserModule();
export default userModule;
//# sourceMappingURL=user.js.map