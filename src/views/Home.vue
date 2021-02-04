<template>
  <div class="home table-container">
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
        <tr>
          <th>Pepito</th>
          <th v-for="day in calendario.datos" :key="day.fecha">
            {{ getDay(day.fecha) }}
            <b-checkbox
              v-model="vacationsDays"
              :native-value="day.fecha"
              :disabled="
                day.tipoId === 'S' ||
                day.tipoId === 'F' ||
                vacationsDays.length >= 22
              "
              class="vacations-day-check"
              :class="{
                'is-weekend': day.tipoId === 'S',
                'is-festive': day.tipoId === 'F',
              }"
            >
            </b-checkbox>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/MainStore";

@Component({
  name: "Home",
})
export default class Home extends Vue {
  private mainStore = mainStore.context(this.$store);

  private vacationsDays: number[] = [];

  private get calendario(): any {
    return this.mainStore.state.calendario;
  }

  private getDay(date: number): string {
    const textDate: string = date.toString();
    return textDate.slice(6);
  }

  private isSelected(date: number): boolean {
    return this.vacationsDays.find((number) => number === date) ? true : false;
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
