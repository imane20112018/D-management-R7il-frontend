<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const transporteurs = ref([])

onMounted(async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/admin/transporteurs/en-attente')
  transporteurs.value = res.data
})
</script>

<template>
  <div>
    <h2>🚚 Transporteurs en attente de validation</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Date inscription</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in transporteurs" :key="t.id">
          <td>{{ t.nom }}</td>
          <td>{{ t.email }}</td>
          <td>{{ t.telephone }}</td>
          <td>{{ t.date_inscription }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
