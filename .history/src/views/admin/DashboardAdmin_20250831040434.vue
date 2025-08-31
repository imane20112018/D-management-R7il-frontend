<template>
  <div class="p-6 space-y-6">
    <!-- Titre -->
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Tableau de bord
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Vue d’ensemble des abonnements et activités
      </p>
    </div>

    <!-- 📌 Statistiques compactes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
               p-4 rounded-xl shadow-sm"
      >
        <h2 class="text-xs font-medium text-gray-500 dark:text-gray-400">
          Abonnements Valides
        </h2>
        <p class="text-2xl font-bold text-green-500 mt-1">120</p>
      </div>
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
               p-4 rounded-xl shadow-sm"
      >
        <h2 class="text-xs font-medium text-gray-500 dark:text-gray-400">
          Abonnements Expirés
        </h2>
        <p class="text-2xl font-bold text-red-500 mt-1">25</p>
      </div>
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
               p-4 rounded-xl shadow-sm"
      >
        <h2 class="text-xs font-medium text-gray-500 dark:text-gray-400">
          Nouveaux Clients
        </h2>
        <p class="text-2xl font-bold text-blue-500 mt-1">15</p>
      </div>
    </div>

    <!-- 📊 Graphique compact -->
    <div
      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
             rounded-xl shadow-sm p-4"
    >
      <h2 class="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
        Évolution des abonnements
      </h2>
      <BarChartJS :data="chartData" :options="chartOptions" />
    </div>

    <!-- 📋 Tableau abonnements expirés -->
    <div
      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
             rounded-xl shadow-sm p-4"
    >
      <h2 class="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
        Derniers abonnements expirés
      </h2>
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300">
            <th class="p-2 text-left">Nom</th>
            <th class="p-2 text-left">Email</th>
            <th class="p-2 text-left">Date expiration</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in expiredSubs"
            :key="i"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition border-b border-gray-200 dark:border-gray-700"
          >
            <td class="p-2 text-gray-800 dark:text-gray-200">{{ item.nom }}</td>
            <td class="p-2 text-gray-600 dark:text-gray-300">{{ item.email }}</td>
            <td class="p-2 text-gray-600 dark:text-gray-300">{{ item.date_fin }}</td>
            <td class="p-2">
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs transition"
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

const chartData = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
  datasets: [
    { label: "Valides", backgroundColor: "#4ade80", data: [30, 45, 50, 60, 70, 90] },
    { label: "Expirés", backgroundColor: "#f87171", data: [5, 8, 10, 7, 12, 15] },
  ],
}
const chartOptions = { responsive: true, plugins: { legend: { position: "top", labels: { color: '#ccc', font: { size: 11 } } } } }

const expiredSubs = [
  { id: 1, nom: "Ali Ben", email: "ali@example.com", date_fin: "2025-07-15" },
  { id: 2, nom: "Sara K", email: "sara@example.com", date_fin: "2025-07-18" },
  { id: 3, nom: "Youssef M", email: "youssef@example.com", date_fin: "2025-07-20" },
]

const relancer = (id) => {
  alert(`Relance envoyée pour l'abonnement #${id}`)
}
</script>
