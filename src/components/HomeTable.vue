<template>
  <v-container fluid class="d-flex">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1 home-table"
    >
      <template v-slot:item.approved="{ item }">
        <v-chip :color="getColor(item.approved)" dark>{{
          item.approved
        }}</v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {

  props: ['expenses'],
  data() {
    return {
      headers: [
        {
          text: "Description",
          align: "left",
          sortable: false,
          value: "description"
        },
        { text: "Status", value: "approved" },
        { text: "Amount", value: "amount" },
        { text: "Currency", value: "currency" },
        { text: "Employee", value: "fullName" }
      ],
      desserts: this.expenses
    };
  },
  methods: {
    getColor(value) {
      if ( value === "Disapproved" ) return "red";
      else if (value === "Approved") return "orange";
      else return "green";
    }
  }
};
</script>

<style scoped>
.home-table {
  width: 100%;
}
</style>
