import { Ref, computed, defineComponent, ref } from "vue";
import { useTweetStore } from "../../stores/tweetStore";
import { TweetPost } from "../../models/tweetPost";


export default defineComponent({
    name: "tweet",
    setup() {
        const store = useTweetStore();

        const visible = ref(false);
        const username: Ref<string> = ref("");
        const message: Ref<string> = ref("");
        // const email: Ref<string> = ref("");
        const password: Ref<string> = ref("");
        const usernameErrors = ref<string[]>([]);
        // const emailErrors = ref<string[]>([]);
        const passwordErrors = ref<string[]>([]);
        const messageErrors = ref<string[]>([]);
        const maxLength = 140;

        const onHandleTweet = () => {
            store.addTweet({
                username: username.value,
                // email: email.value,
                password: password.value,
                message: message.value
            } as TweetPost);
        }

        const isTweetBtnDisabled = computed(() => {
            // Reset error messages
            usernameErrors.value = [];
            // emailErrors.value = [];
            passwordErrors.value = [];
            messageErrors.value = [];

            // Collect rule violations or confirm validity
            // NOTE: we filter out boolean, so only string errors are left
            usernameErrors.value = usernameRules.map(rule => rule(username.value)).filter(result => result !== true);
            // emailErrors.value = emailRules.map(rule => rule(email.value)).filter(result => result !== true);
            passwordErrors.value = passwordRules.map(rule => rule(password.value)).filter(result => result !== true);
            messageErrors.value = messageRules.map(rule => rule(message.value)).filter(result => result !== true);

            // Tweet button is disabled if there are any error messages
            return usernameErrors.value.length > 0 || passwordErrors.value.length > 0 || messageErrors.value.length > 0;

        });

        const usernameRules = [
            (v: string) => !!v || 'Username is required',
            (v: string) => !/<[^>]+>/g.test(v) || 'Username cannot contain HTML tags',
        ];

        // const emailRules = [
        //     (v: string) => !!v || 'Email is required',
        //     (v: string) => !/<[^>]+>/g.test(v) || 'Email cannot contain HTML tags',
        // ];

        const passwordRules = [
            (v: string) => !!v || 'Password is required',
            (v: string) => !/<[^>]+>/g.test(v) || 'Password cannot contain HTML tags',
        ];

        const messageRules = [
            (v: string) => !!v || 'Message is required',
            (v: string) => !/<[^>]+>/g.test(v) || 'Message cannot contain HTML tags',
        ];

        return {
            visible,
            // email,
            password,
            message,
            username,
            maxLength,
            onHandleTweet,
            isTweetBtnDisabled,
            // emailRules,
            passwordRules,
            messageRules,
            usernameRules,
        }
    }
});