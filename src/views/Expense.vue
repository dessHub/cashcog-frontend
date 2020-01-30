<template>
  <span>
    <expense-header
      v-bind:expense="expense"
      v-bind:isFetching="isFetching"
      v-bind:isUpdating="isUpdating"
      v-bind:updateStatus="updateStatus"
      v-bind:deleteExpense="deleteExpense"
      v-bind:errorMessage="errorMessage"
      v-bind:redirect="redirect"
      v-bind:isDeleted="isDeleted"
    ></expense-header>
  </span>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ExpenseHeader from "@/components/ExpenseHeader";

export default {
  name: "home",
  components: {
    ExpenseHeader
  },
  props: [],
  created() {
    // eslint-disable-next-line no-console
    console.log("created", this.$route.path);
    this.$store.dispatch("getExpense", this.$route.path);
  },
  data: () => ({}),
  computed: {
    ...mapState({
      isFetching: state => state.expenses.isFetching,
      isUpdating: state => state.expenses.isUpdating,
      errorMessage: state => state.expenses.errorMessage,
      isDeleted: state => state.expenses.isDeleted
    }),
    ...mapGetters({ expense: "getOneExpense" })
  },
  methods: {
    updateStatus(status) {
      // eslint-disable-next-line no-console
      console.log("status", status);
      let payload = { path: this.$route.path, status };
      this.$store.dispatch("updateExpense", payload);
    },
    deleteExpense() {
      this.$store.dispatch("deleteExpense", this.$route.path);
    },
    redirect() {
      this.$router.push("/");
    }
  }
};
</script>
