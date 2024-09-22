import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import { Quasar, Notify } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v6";
import "@quasar/extras/mdi-v6/mdi-v6.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Quasar, {
                plugins: {Notify}, // import Quasar plugins and add here
                iconSet: quasarIconSet,
                config: {}, // quasar config see: https://quasar.dev/start/vite-plugin/
            })
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
