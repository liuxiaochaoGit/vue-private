// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/assets/styles/commonStyle.css';
import '@/assets/font/style.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    beforeCreate () {
        document.documentElement.style.fontSize = 26 / 375 * document.documentElement.clientWidth + 'px';
        window.addEventListener('resize', function () {
            document.documentElement.style.fontSize = 26 / 375 * document.documentElement.clientWidth + 'px';
        }, false);
    },
    router,
    components: {App},
    template: '<App/>'
});
