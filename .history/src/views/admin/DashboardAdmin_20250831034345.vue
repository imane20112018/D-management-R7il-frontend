<template>
   />

  <div class="p-6 space-y-6">
    <h1 class="text-3xl font-bold">Dashboard Admin</h1>
    <p class="text-gray-500">Vue d'ensemble des abonnements</p>

    <!-- Carte Statistiques -->
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

    <!-- Graphique -->
    <div class="bg-white shadow rounded-2xl p-6">
      <h2 class="text-lg font-semibold mb-4">Évolution des abonnements</h2>
      <BarChartJS :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/admin/AppHeader.vue'

// 📊 Import Chart.js et vue-chartjs
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from "chart.js"
import { Bar as BarChartJS } from "vue-chartjs"

// Enregistrement des composants nécessaires
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Données pour le graphique
const chartData = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
  datasets: [
    {
      label: "Valides",
      backgroundColor: "#4ade80",
      data: [30, 45, 50, 60, 70, 90],
    },
    {
      label: "Expirés",
      backgroundColor: "#f87171",
      data: [5, 8, 10, 7, 12, 15],
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
  },
}
</script>
