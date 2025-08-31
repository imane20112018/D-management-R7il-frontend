<template>
  <AppHeader />

  <div class="p-6 space-y-6">
    <h1 class="text-3xl font-bold">Dashboard Admin</h1>
    <p class="text-gray-500">Vue d'ensemble des abonnements</p>

    <!-- 📌 Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-green-100 p-6 rounded-2xl shadow">
        <h2 class="text-xl font-semibold text-green-800">Abonnements Valides</h2>
        <p class="text-3xl font-bold mt-2">120</p>
      </div>
      <div class="bg-red-100 p-6 rounded-2xl shadow">
        <h2 class="text-xl font-semibold text-red-800">Abonnements Expirés</h2>
        <p class="text-3xl font-bold mt-2">25</p>
      </div>
      <div class="bg-blue-100 p-6 rounded-2xl shadow">
        <h2 class="text-xl font-semibold text-blue-800">Nouveaux Clients</h2>
        <p class="text-3xl font-bold mt-2">15</p>
      </div>
    </div>

    <!-- 📊 Graphique -->
    <div class="bg-white shadow rounded-2xl p-6">
      <h2 class="text-lg font-semibold mb-4">Évolution des abonnements</h2>
      <BarChartJS :data="chartData" :options="chartOptions" />
    </div>

    <!-- 📋 Tableau des abonnements expirés -->
    <div class="bg-white shadow rounded-2xl p-6">
      <h2 class="text-lg font-semibold mb-4">Derniers abonnements expirés</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-3">Nom</th>
            <th class="p-3">Email</th>
            <th class="p-3">Date expiration</th>
            <th class="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in expiredSubs" :key="i" class="border-b">
            <td class="p-3">{{ item.nom }}</td>
            <td class="p-3">{{ item.email }}</td>
            <td class="p-3">{{ item.date_fin }}</td>
            <td class="p-3">
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg"
                @click="relancer(item.id)"
              >
                Relancer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/admin/AppHeader.vue'

// 📊 Chart.js
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from "chart.js"
import { Bar as BarChartJS } from "vue-chartjs"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Données fictives pour graphique
const chartData = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
  datasets: [
    { label: "Valides", backgroundColor: "#4ade80", data: [30, 45, 50, 60, 70, 90] },
    { label: "Expirés", backgroundColor: "#f87171", data: [5, 8, 10, 7, 12, 15] },
  ],
}
const chartOptions = { responsive: true, plugins: { legend: { position: "top" } } }

// 📋 Données fictives abonnements expirés
const expiredSubs = [
  { id: 1, nom: "Ali Ben", email: "ali@example.com", date_fin: "2025-07-15" },
  { id: 2, nom: "Sara K", email: "sara@example.com", date_fin: "2025-07-18" },
  { id: 3, nom: "Youssef M", email: "youssef@example.com", date_fin: "2025-07-20" },
]

// 🚀 Fonction relance
const relancer = (id) => {
  alert(`Relance envoyée pour l'abonnement #${id}`)
  // Tu pourras remplacer par un appel axios POST vers ton API :
  // await api.post(`/admin/abonnements/${id}/relancer`)
}
</script>
