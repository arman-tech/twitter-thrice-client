import { computed, defineComponent } from "vue";
import { useTweetStore } from "../../stores/tweetStore";
import { makeId } from "../../common/helper";
import TweetCard from "../../components/tweet-card/tweet-card.vue"

export default defineComponent({
    name: "home",
    components: {
        TweetCard
    },
    setup() {
        const store = useTweetStore();

        // get recent top 10 tweets
        store.fetchTopTenRecentTweets();

        const topTenRecentTweets = computed(() => store.getRecentTweets);

        const getRecentTweets = async () => {
            // call store action    
            var response = await store.getRecentTweets;
            console.log(JSON.stringify(response));
        }

        return {
            getRecentTweets,
            topTenRecentTweets,
            makeId
        }
    }
});