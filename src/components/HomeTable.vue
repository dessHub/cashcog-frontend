<template>
  <v-container grid-list-lg>
    <div v-if="isFetching">
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br />
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br />
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br />
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
    </div>
    <v-data-table
      :headers="headers"
      :items="status ? filteredExpenses : expenses"
      class="elevation-1 home-table"
      v-else
    >
      <template v-slot:item.approved="{ item }">
        <v-chip :color="getColor(item.approved)" dark>{{
          item.approved
        }}</v-chip>
      </template>
      <template v-slot:item.uuid="{ item }">
        <v-chip class="brown darken-4" dark @click="goToExpense(item.uuid)"
          >View</v-chip
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  props: ["expenses", "isFetching", "filteredExpenses", "status"],
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
        { text: "Employee", value: "fullName" },
        { text: "Action", value: "uuid" }
      ],
      value: 0
    };
  },
  methods: {
    getColor(value) {
      if (value === "Declined") return "red";
      else if (value === "Approved") return "orange";
      else return "green";
    },
    goToExpense(uuid) {
      this.$router.push({ name: "expense", params: { uuid } });
    }
  }
};
</script>

<style scoped>
.home-table {
  width: 100%;
}
</style>
