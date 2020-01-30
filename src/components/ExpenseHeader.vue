<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Expense Detail</v-flex
      >
    </v-layout>
    <div
     v-if="isFetching">
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br>
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br>
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
      <br>
      <v-progress-linear
        indeterminate
        color="brown lighten-2"
      ></v-progress-linear>
    </div>
    <v-layout row wrap v-else>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline text-xs-center mb-1">Expenditure Details</h3>
                <v-divider
                ></v-divider>
              <div class="text-left">
                <p class="font-weight-light mb-0 mt-2">Amount: 
                  <v-chip color="gray darken-2">{{ expense.currency }}.{{ expense.amount }}</v-chip></p>
                <p class="font-weight-light">Description: {{ expense.description }}</p>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline text-xs-center mb-1">Employee</h3>
                <v-divider
                ></v-divider>
              <div class="text-left">
                <p class="font-weight-light mb-0 mt-2">First Name: {{ expense.employee.first_name }}</p>
                <p class="font-weight-light">Last Name: {{ expense.employee.last_name }}</p>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline text-xs-center mb-1">
                Status: <v-chip :color="getColor(expense.approved)">{{ expense.approved }}</v-chip>
              </h3>
              <v-divider></v-divider>
              <div class="text-center mt-3">
                <v-container style="height: 200px;" v-if="isUpdating">
                    <v-row
                        class="fill-height"
                        align-content="center"
                        justify="center"
                    >
                        <v-col
                        class="subtitle-1 text-center"
                        cols="12"
                        >
                        Processing
                        </v-col>
                        <v-col cols="6">
                        <v-progress-linear
                            color="deep-purple accent-4"
                            indeterminate
                            rounded
                            height="6"
                        ></v-progress-linear>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container v-else-if="isDeleted">
                  <p class="green--text">Successfuly deleted {{ redirect() }} </p>
                </v-container>
                <v-card class="d-flex justify-center mb-6" color="lighten-2" flat tile v-else>
                    <v-btn 
                      class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 green--text text--lighten-1" 
                      @click="updateStatus('Approved')" 
                      >
                    Approve
                    </v-btn>
                    <v-btn 
                      class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 orange--text " 
                      @click="updateStatus('Declined')" 
                      >
                    Decline
                    </v-btn>
                    <v-btn 
                      class="pa-2 ma-xs-1 ma-sm-2 ma-md-3 red--text " 
                      @click="deleteExpense()"
                      >
                    Delete
                    </v-btn>
                </v-card>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "ExpenseHeader",
  props: ["expense", "isFetching", "isUpdating", "updateStatus", "deleteExpense", "isDeleted", "redirect", "errorMessage"],
  methods: {
    getColor(value) {
      if (value === "Declined") return "red";
      else if (value === "Approved") return "orange";
      else return "green";
    }
  }
};
</script>

<style scoped></style>
