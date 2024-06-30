import { reactive } from 'vue';

export function useEnv() {
    const env = reactive({
        mode: import.meta.env.MODE,
        isProd: import.meta.env.PROD,
        isDev: import.meta.env.DEV,
        baseUrl: import.meta.env.VITE_BASE_URL as string,
    });

    return env;
}