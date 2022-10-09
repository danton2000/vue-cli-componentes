import Vue from 'vue'
import App from './App.vue'
//registrando o componente Contador, vai receber o que está em exports
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
//utilizando o componente
//importando de forma global
//nome-do-componente(tag), o Componente que foi importado
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
