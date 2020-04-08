<template>
    <v-container fluid>
      <v-card class="mx-auto" max-width="600">
        <v-card-title>
            <span>Register</span>
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
          @click="register"
        >Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</template>

<script>


export default {
  name: "Register",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    register () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('registerAction', user)
    },
  }
};
</script>