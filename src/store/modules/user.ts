class UserModule {
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
