import { Getters, Mutations, Actions, Module } from "vuex-smart-module";

class MainState {
  public testData: boolean = true;
}

class MainMutations extends Mutations<MainState> {
  public changeTestData(): void {
    this.state.testData = !this.state.testData;
  }
}

class MainGetters extends Getters<MainState> {
  public get reverseTestdata(): boolean {
    return !this.state.testData;
  }
}

class MainActions extends Actions<
  MainState,
  MainGetters,
  MainMutations,
  MainActions
> {
  public changeTestData(): void {
    this.commit("changeTestData");
  }
}
const mainStore = new Module({
  state: MainState,
  getters: MainGetters,
  actions: MainActions,
  mutations: MainMutations,
});

export default mainStore;
