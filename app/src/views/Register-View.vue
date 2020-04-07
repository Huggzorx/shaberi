<template>
  <v-container>
    <h1>Register View</h1>
    <Register></Register>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Register from  '../components/Register'

export default {
  name: 'Register-View',
  components: {
    Register,
  }
}
</script>
