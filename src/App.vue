<template>
  <v-app id="app">
    <v-toolbar app fixed clipped-left color="blue-grey darken-2" dark>
      <v-toolbar-title>My #100DaysOfCode Progress Journal</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>Lex Martinez &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

