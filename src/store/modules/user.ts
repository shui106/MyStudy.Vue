import baseModule from "./base";

class UserModule extends baseModule {
    state = {
        Name: "Name"
    };
    actions = {};
    mutations = {
        appendSomething(state: any) {
            state.Name += "+Test";
        }
    };
}       
const userModule = new UserModule();
export default userModule;
