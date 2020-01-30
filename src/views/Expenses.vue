<template>
  <span>
    <v-container grid-list-lg>
      <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
          >All Expenses</v-flex
        >
      </v-layout>
    </v-container>
    <home-table
      v-bind:expenses="getExpenses.expenses"
      v-bind:isFetching="isFetching"
    ></home-table>
  </span>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HomeTable from "@/components/HomeTable";

export default {
  name: "expenses",
  components: {
    HomeTable
  },
  props: [],
  created() {
    this.$store.dispatch("getExpenses");
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isFetching: state => state.expenses.isFetching
    }),
    ...mapGetters({
      getExpenses: "getExpenselist"
    })
  }
};
</script>
