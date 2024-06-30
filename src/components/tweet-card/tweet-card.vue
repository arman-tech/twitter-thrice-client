<template>
    <v-card class="mx-auto text-white" color="#26c6da" max-width="400" prepend-icon="mdi-twitter"
        title="Twitter Thrice">
        <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
        </template>

        <v-card-text class="text-h5 py-2">
            {{ message }}
        </v-card-text>

        <v-card-actions>
            <v-list-item class="w-100">
                <template v-slot:prepend>
                    <v-avatar color="grey-darken-3"
                        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
                </template>
                <v-list-item-title>{{ username }}</v-list-item-title>
                <v-list-item-subtitle>{{ postedDate }}</v-list-item-subtitle>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts" src="./tweet-card.ts" />
<style src="./tweet-card.css" scoped />