<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Añadir usuario</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="ID">
          <b-input
            v-model="idUser"
            :value="idUser"
            min="1"
            type="number"
            placeholder="ID"
            required
          />
        </b-field>
        <b-field label="Nombre">
          <b-input
            v-model="nameUser"
            :value="nameUser"
            type="text"
            placeholder="Nombre"
            required
          />
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="$emit('close')" />
        <b-button label="Añadir" @click="addUser()" type="is-primary" />
      </footer>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/MainStore";

@Component({
  name: "AddUserModal",
})
export default class AddUserModal extends Vue {
  private mainStore = mainStore.context(this.$store);

  private nameUser: string = "";
  private idUser: number = 1;

  private addUser(): void {
    this.mainStore.actions.addUser({
      id: this.idUser,
      name: this.nameUser,
      vacations: [],
    });

    this.nameUser = "";
  }
}
</script>

<style lang="scss" scoped></style>
