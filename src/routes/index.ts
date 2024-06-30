import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Tweet from '../views/tweet/tweet.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/tweet',
        name: 'tweet',
        component: Tweet
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})