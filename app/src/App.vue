<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
      shrink-on-scroll
      prominent
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

    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      left
      clipped
      dark
      src="@/assets/bg1.png"
    >

      <v-list dense nav class="py-0">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    items() {
      let menuItems =  [
        {
          title: 'Register',
          link: '/register'
        },
        {
          title: 'Login',
          link: '/login'
        },
        {
          title: 'Dashboard',
          link: '/dashboard'
        }
      ]
    return menuItems
    }
  },
  components: {
  },

  data: () => ({
    //
  }),
};
</script>
