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
import { index,create } from '../api/dispositivi';
import axios from 'axios';
const token = localStorage.getItem('token');
// Variabile reattiva per memorizzare la lista dei dispositivi
let dispositivi = reactive([]);
const dispostate = ref({
	name:'',
	marca:'',
	modello:'',
})
async function getAllDevices() {
  try {
    const response = await index(axios);
    dispositivi = response.data; // Assegna la risposta alla variabile reattiva
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
async function createDevice(event){
	event.preventDefault();
	try {
		const response = await create(axios,dispostate)
	} catch (error) {
		console.log(error);
	}
}

onMounted(async () => {
  try {
    await getAllDevices();
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss" scoped>
</style>
