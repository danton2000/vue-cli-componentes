<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <app-contador v-for="c in 5" :key="c" />
  </div>
</template>

<script>
//importando o componente
import Contador from './Contador.vue'

export default {
    //registrando o componente Contador de forma local
    components: {
        'app-contador': Contador
    }
};

//precisa ter a key(c) na hora de fazer o loop do componente
</script>

<style>
</style>