import { defineComponent } from "vue";


export default defineComponent({
    name: "tweetCard",
    props: {
        // id: {
        //     type: String,
        //     required: true
        // },
        username: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        postedDate: {
            type: String,
            required: true
        }
    },
    setup() {

        return {}
    }
});