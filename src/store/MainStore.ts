import { Getters, Mutations, Actions, Module } from "vuex-smart-module";

import calendario from "../assets/json/calendario.json";

import Calendar from "../models/Calendar";

class MainState {
  public calendario: Calendar = calendario;
}

class MainMutations extends Mutations<MainState> {}

class MainGetters extends Getters<MainState> {}

class MainActions extends Actions<
  MainState,
  MainGetters,
  MainMutations,
  MainActions
> {}
const mainStore = new Module({
  state: MainState,
  getters: MainGetters,
  actions: MainActions,
  mutations: MainMutations,
});

export default mainStore;
