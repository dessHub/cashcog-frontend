<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Available Expenses</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs6 sm6 md6>
              <h3 class="headline text-xs-center mb-0">New</h3>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <div class="text-center">
                80
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs6 sm6 md6>
              <h3 class="headline text-xs-center mb-0">Approved</h3>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <div class="text-center">
                80
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs6 sm6 md6>
              <h3 class="headline text-xs-center mb-0">Disapproved</h3>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <div class="text-center">
                80
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped></style>
