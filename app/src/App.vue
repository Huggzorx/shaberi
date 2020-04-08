<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Shaberi Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu
        v-if="userLoggedIn.uid"
        :open-on-hover="true"
        :close-on-click="true"
        :close-on-content-click="true"
        :offset-y="true"
      >
        <template v-slot:activator="{ on }">
          <v-btn
          small
          text
          v-on="on"
          v-if="userLoggedIn.uid"
          class="text-none"
        >
          {{ userLoggedIn.email }}
          <v-icon dark right>mdi-menu-down</v-icon>
        </v-btn>
        </template>
        <v-list dense>
          <v-list-item dense
            @click="logout"
          >
            logout
          </v-list-item>
        </v-list>
      </v-menu>

      

      <v-btn
        text
        to="register"
        v-if="!userLoggedIn.uid"
      >Register</v-btn>

      <v-btn
        text
        to="login"
        v-if="!userLoggedIn.uid"
      >Login</v-btn>

    </v-app-bar>
    <v-navigation-drawer
      app
      nav
      v-model="drawer"
      left
      clipped
      dark
      src="@/assets/bg1.png"
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Shaberi
          </v-list-item-title>
          <v-list-item-subtitle>
            Some random app
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav class="py-0">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    menuItems() {
      let menuItems =  [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          link: '/dashboard'
        }
      ]
    return menuItems
    },
    userLoggedIn() {
      return this.$store.getters.user
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutAction')
    }
  },
  components: {
  },

  data: () => ({
    //
  }),
};
</script>
