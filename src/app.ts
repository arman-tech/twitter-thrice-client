import { defineComponent, ref, watch } from "vue";
import { useTweetStore } from './stores/tweetStore';
import { storeToRefs } from 'pinia';
import { router } from "./routes";

export default defineComponent({
    name: "app",
    setup() {

        const tweetStore = useTweetStore();
        const { errorMessage } = storeToRefs(tweetStore);
        const visible = ref(false);

        // clear error message after 4 seconds
        const clearErrorMessage = () => {
            setTimeout(() => {
                visible.value = false;
                tweetStore.resetErrorMessage();
            }, 4000);
        }

        // watch for changes in errorMessage
        watch(errorMessage, (newValue) => {
            if (newValue.length > 0) {
                visible.value = true;
                clearErrorMessage();
            }
        });

        const goToTweetPage = () => {
            router.push({ name: 'tweet' });
        }

        const goToHomePage = () => {
            router.push({ name: 'home' });
        }

        return {
            errorMessage,
            visible,
            goToTweetPage,
            goToHomePage
        }
    }
});