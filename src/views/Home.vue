<template>
  <span>
    <home-hero></home-hero>
    <home-filters></home-filters>
    <home-table></home-table>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeFilters from "@/components/HomeFilters";
import HomeTable from "@/components/HomeTable";

export default {
  name: "home",
  components: {
    HomeHero,
    HomeFilters,
    HomeTable
  }
};
</script>
