<template>
    <v-container fluid>
      <v-card class="mx-auto" max-width="600">
        <v-card-title>
            <span>Login</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-form>
          <v-text-field
            v-model="email"
            label="email"
            required
            prepend-icon="mdi-account"
            type="text"
          />
          <v-text-field
            v-model="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          />
        </v-form>
        <v-card-actions>
          
          <v-spacer />
          <v-btn
            color="primary"
            @click="login"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginAction', user)
    },

  }
};
</script>