import { Getters, Mutations, Actions, Module } from "vuex-smart-module";

import calendario from "../assets/json/calendario.json";

import Calendar from "../models/Calendar";
import User from "../models/User";

interface AddVacationsPayload {
  userId: number;
  day: number;
}

class MainState {
  public calendario: Calendar = calendario;
  public users: User[] = [];
}

class MainMutations extends Mutations<MainState> {
  public addUser(user: User): void {
    this.state.users.push(user);
  }

  public addUserVacations(payload: AddVacationsPayload): void {
    this.state.users[
      this.state.users.findIndex((user) => user.id === payload.userId)
    ].vacations.push(payload.day);
  }

  public removeUserVacations(payload: AddVacationsPayload): void {
    const vacationIdex: number = this.state.users[
      this.state.users.findIndex((user) => user.id === payload.userId)
    ].vacations.findIndex((vacation) => vacation === payload.day);

    this.state.users[
      this.state.users.findIndex((user) => user.id === payload.userId)
    ].vacations.splice(vacationIdex);
  }
}

class MainGetters extends Getters<MainState> {}

class MainActions extends Actions<
  MainState,
  MainGetters,
  MainMutations,
  MainActions
> {
  public addUser(user: User): void {
    this.state.users.find((usr) => usr.id === user.id)
      ? null
      : this.commit("addUser", user);

    localStorage.setItem("username", user.name);
  }

  public addUserVacations(payload: AddVacationsPayload): void {
    this.state.users[
      this.state.users.findIndex((user) => user.id === payload.userId)
    ].vacations.find((vacation) => vacation === payload.day)
      ? this.commit("removeUserVacations", payload)
      : this.commit("addUserVacations", payload);
  }
}

const mainStore = new Module({
  state: MainState,
  getters: MainGetters,
  actions: MainActions,
  mutations: MainMutations,
});

export default mainStore;
