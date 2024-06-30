<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Twitter Thrice</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goToHomePage">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="goToTweetPage">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-row no-gutters class="alert-row">
        <v-col v-show="errorMessage">
          <v-alert dismissible type="error" border="start" v-model="visible" class="text-center">
            {{ errorMessage }}
          </v-alert>
        </v-col>
        <router-view />
      </v-row>
    </v-main>
  </v-app>
</template>
<script lang="ts" src="./app.ts" />
<style src="./app.css" scoped />
