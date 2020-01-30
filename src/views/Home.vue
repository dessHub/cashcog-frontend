<template>
  <span>
    <home-hero></home-hero>
    <home-filters
      v-bind:filterExpense="filterExpense"
    ></home-filters>
    <home-table 
      v-bind:status="status"
      v-bind:expenses="getExpenses" 
      v-bind:isFetching="isFetching"
      v-bind:filteredExpenses="filteredExpenses"
    ></home-table>
  </span>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HomeHero from "@/components/HomeHero";
import HomeFilters from "@/components/HomeFilters";
import HomeTable from "@/components/HomeTable";

export default {
  name: "home",
  components: {
    HomeHero,
    HomeFilters,
    HomeTable
  },
  props: [],
  created() {
    this.$store.dispatch("getExpenses");
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isFetching: state => state.expenses.isFetching,
      status: state => state.expenses.status
    }),
    ...mapGetters(
      { 
        getExpenses: "getExpenselist",
        filteredExpenses: "expensesByStatus"
      }
      )
  },
  methods: {
    filterExpense(status) {
      this.$store.dispatch("getExpenseByStatus", status);
    }
  }
};
</script>
