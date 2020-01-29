<template>
  <span>

    <home-hero></home-hero>
    <home-filters></home-filters>
    <home-table v-bind:expenses="getExpenses"></home-table>
  </span>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
    this.$store.dispatch('getExpenses');
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isFetching: state => state.expenses.isFetching,
    }),
    ...mapGetters(
      {getExpenses: 'getExpenselist'}
    )
  }
};
</script>
