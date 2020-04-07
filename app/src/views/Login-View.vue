<template>
  <v-container>
    <h1>Login View</h1>
    <Login></Login>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from  '../components/Login'

export default {
  name: 'Login-View',
  components: {
    Login,
  }
}
</script>