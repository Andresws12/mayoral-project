<template>
  <div class="home section">
    <b-modal
      v-model="isAddUserModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <add-user-modal @close="hideModal" />
    </b-modal>
    <h1 class="title">Calendario de vacaciones</h1>
    <b-field label="Añadir usuario">
      <b-button type="is-info" @click="isAddUserModalActive = true">
        Añadir usuario
      </b-button>
    </b-field>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th colspan="31">Enero</th>
            <th colspan="28">Febrero</th>
            <th colspan="31">Marzo</th>
            <th colspan="30">Abril</th>
            <th colspan="31">Mayo</th>
            <th colspan="30">Junio</th>
            <th colspan="31">Julio</th>
            <th colspan="31">Agosto</th>
            <th colspan="30">Septiembre</th>
            <th colspan="31">Octubre</th>
            <th colspan="30">Noviembre</th>
            <th colspan="31">Diciembre</th>
            <th colspan="31">Enero</th>
          </tr>
          <tr>
            <th></th>
            <th v-for="day in calendario.datos" :key="day.fecha">
              {{ getDay(day.fecha) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <th>
              {{ user.name }}
              <b-tag type="is-success">{{ user.vacations.length }}/22</b-tag>
            </th>
            <th v-for="day in calendario.datos" :key="day.fecha">
              {{ getDay(day.fecha) }}
              <b-checkbox
                true-value="yes"
                :native-value="day.fecha"
                :disabled="
                  day.tipoId === 'S' ||
                  day.tipoId === 'F' ||
                  user.vacations.length >= 22
                "
                class="vacations-day-check"
                :class="{
                  'is-weekend': day.tipoId === 'S',
                  'is-festive': day.tipoId === 'F',
                }"
                @input="addDayVacations(user.id, day.fecha)"
              >
              </b-checkbox>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/MainStore";

import Calendar from "../models/Calendar";
import User from "../models/User";

import AddUserModal from "@/components/AddUserModal.vue";

@Component({
  name: "Home",
  components: {
    AddUserModal,
  },
})
export default class Home extends Vue {
  private mainStore = mainStore.context(this.$store);

  private isAddUserModalActive: boolean = false;

  private get calendario(): Calendar {
    return this.mainStore.state.calendario;
  }

  private get users(): User[] {
    return this.mainStore.state.users;
  }

  private addDayVacations(userId: number, day: number): void {
    this.mainStore.actions.addUserVacations({ userId, day });
  }

  private hideModal(): void {
    this.isAddUserModalActive = false;
  }

  private getDay(date: number): string {
    const textDate: string = date.toString();
    return textDate.slice(6);
  }
}
</script>

<style lang="scss" scoped>
.vacations-day-check {
  &.is-weekend {
    /deep/.check {
      background-color: red !important;
    }
  }
  &.is-festive {
    /deep/.check {
      background-color: blue !important;
    }
  }
}
</style>
