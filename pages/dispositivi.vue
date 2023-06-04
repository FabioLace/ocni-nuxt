<template>
  <div>
	<div v-if="dispositivi.length === 0">
		nessun dispositivo 
	</div >
	<div v-else>
    {{ dispositivi }}
	</div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { index } from '../api/dispositivi';
import axios from 'axios';

// Variabile reattiva per memorizzare la lista dei dispositivi
const dispositivi = reactive([]);

async function getAllDisposables() {
  try {
    const response = await index(axios);
    dispositivi = response.data; // Assegna la risposta alla variabile reattiva
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  try {
    await getAllDisposables();
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss" scoped>
</style>
