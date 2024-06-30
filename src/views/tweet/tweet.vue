<template>
    <v-container fluid>
        <v-card class="mx-auto pa-12 pb-8 ma-4" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Make a Tweet</div>

            <v-text-field v-model="username" :rules="usernameRules" placeholder="Username"
                prepend-inner-icon="mdi-account" variant="outlined" :maxlength="255"></v-text-field>

            <!-- <v-text-field v-model="email" :rules="emailRules" placeholder="Email" prepend-inner-icon="mdi-account"
                variant="outlined" :maxlength="255"></v-text-field>
 -->
            <v-text-field v-model="password" :rules="passwordRules" :maxlength="255"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-textarea label="Message" :rules="messageRules" variant="outlined" density="compact" :counter="maxLength"
                :maxlength="maxLength" v-model="message">
            </v-textarea>


            <v-btn @click="onHandleTweet" :disabled="isTweetBtnDisabled" class="mt-4" color="primary" size="large"
                block>
                Tweet!
            </v-btn>

            <v-card-text class="text-center">
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script lang="ts" src="./tweet.ts" />
<style src="./tweet.css" scoped />