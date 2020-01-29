<template>
  <v-container grid-list-lg>
    <div>
      <v-card class="d-flex justify-center mb-6" color="lighten-2" flat tile>
        <v-btn class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 red--text text--lighten-1">
          New
        </v-btn>
        <v-btn class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 ">
          Approved
        </v-btn>
        <v-btn class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 ">
          Disapproved
        </v-btn>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeFilters"
};
</script>

<style scoped></style>
