<template>
  <v-container grid-list-lg>
    <div>
      <v-card class="d-flex justify-center mb-6" color="lighten-2" flat tile>
        <v-btn
          class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 green--text text--lighten-1"
          @click="filterExpense('Pending')"
        >
          New
        </v-btn>
        <v-btn
          class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 orange--text"
          @click="filterExpense('Approved')"
        >
          Approved
        </v-btn>
        <v-btn
          class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 red--text"
          @click="filterExpense('Declined')"
        >
          Declined
        </v-btn>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeFilters",
  props: ["filterExpense"]
};
</script>

<style scoped></style>
