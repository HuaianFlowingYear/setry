import Vue from 'vue'
import App from './App.vue'
// import Router from "vue-router"
import * as Sentry from "@sentry/vue";
// Vue.use(Router);

Vue.config.productionTip = false

Sentry.init({
    Vue,
    dsn: "https://1e142fc416213d555bba29519747dad2@o4506386926600192.ingest.sentry.io/4506386975686658",
    integrations: [
        new Sentry.BrowserTracing({
            tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        }),
        new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

// 大傻傻的
new Vue({
    render: h => h(App),
}).$mount('#app')