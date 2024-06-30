import { defineStore } from 'pinia';
import axios from 'axios';
import { Tweet } from '../models/tweet';
import { TweetPost } from '../models/tweetPost';
import { router } from '../routes';

interface TweetState {
    tweets: Tweet[];
    errorMessage: string;
}

const TopTenRecentTweetsUrl = 'https://localhost:7206/api/Tweet/recent';
const PostTweetUrl = 'https://localhost:7206/api/Tweet/create';
const PostLoginUrl = 'https://localhost:7206/api/Auth/login';

export const useTweetStore = defineStore({
    id: 'tweetStore',
    state: (): TweetState => ({
        tweets: [],
        errorMessage: ''
    }),
    actions: {
        async fetchTopTenRecentTweetsIfEmpty() {
            if (this.tweets.length === 0) {
                await this.fetchTopTenRecentTweets();
            }
        },
        async fetchTopTenRecentTweets() {
            try {
                const response = await axios.get(TopTenRecentTweetsUrl);
                this.tweets = response.data;
            }
            catch (e) {
                this.errorMessage = "Failed to fetch recent tweets.  Please try again.";
                console.log(e);
            }
        },
        async addTweet(tweet: TweetPost): Promise<Tweet | undefined> {
            try {
                const freshtoken = await axios.post(PostLoginUrl, { username: tweet.username, password: tweet.password });


                if (freshtoken.status !== 200) {
                    this.errorMessage = "Failed to add tweet.  Please try again.";
                    return undefined;
                }

                const response = await axios.post(PostTweetUrl, tweet, {
                    headers: {
                        'Authorization': `Bearer ${freshtoken.data.token}`
                    }
                });

                if (response.status === 200) {
                    // route back to home page.
                    router.push({ name: 'home' });
                }
                else {
                    // show error message
                    this.errorMessage = "Failed to add tweet.  Please try again.";
                }

                return response.data as Tweet | undefined;
            }
            catch (e) {
                // show error message
                this.errorMessage = "Failed to add tweet.  Please try again.";
            }
        },
        async resetErrorMessage() {
            this.errorMessage = '';
        }

    },
    getters: {
        getRecentTweets(): Tweet[] {
            return this.tweets;
        }
    }
});
