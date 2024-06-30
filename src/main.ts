import { createApp } from 'vue'
import { router } from './routes'
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import app from './app.vue'



// import the blueprint you want to use
import { md3 } from 'vuetify/blueprints';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


// import { fa } from 'vuetify/iconsets/fa';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
// import './assets/global.css';


const vuetify = createVuetify({
    blueprint: md3, // use material design 2.
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
            // fa
        },
    },
    theme: {
        defaultTheme: 'light',
        //
    },
});

const root = createApp(app)
root.use(vuetify)
root.use(createPinia())
root.use(router)
root.mount('#app')
