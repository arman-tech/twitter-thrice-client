<template>
    <v-container fluid>
        <v-col>
            <v-row v-for="tweet in topTenRecentTweets" :key="makeId()" class="row-ma-05">
                <tweet-card :id="makeId(10)" :message="tweet.message" :username="tweet.username"
                    :postedDate="tweet.postedDate" />
            </v-row>
        </v-col>
    </v-container>
</template>
<script lang="ts" src="./home.ts" />
<style src="./home.css" scoped />