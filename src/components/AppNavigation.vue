<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/">
              Menu
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/expenses">
              Expenses
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/">
              Join
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <router-link to="/">
              Sign Out
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="brown darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>
        <router-link to="/">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-btn text class="hidden-sm-and-down">
        <router-link to="/expenses">All Expenses</router-link></v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down">SIGN OUT</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Cashcog",
      drawer: false
    };
  }
};
</script>

<style scoped>
.v-toolbar__title > a {
  text-decoration-line: none;
  color: #fff;
}
.v-list-item__content > a {
  text-decoration-line: none;
  color: #fff;
}
.v-btn__content > a {
  text-decoration-line: none;
  color: #fff;
}
</style>
