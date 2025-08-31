<template>

  <div class="p-4 space-y-4">
    <!-- 📊 Ligne des cartes KPI -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Carte Verte -->
      <div class="bg-green-500 text-white p-4 rounded-lg shadow-md">
        <h2 class="text-sm font-medium uppercase">Abonnements Valides</h2>
        <p class="text-2xl font-bold mt-2">120</p>
      </div>

      <!-- Carte Rouge -->
      <div class="bg-red-500 text-white p-4 rounded-lg shadow-md">
        <h2 class="text-sm font-medium uppercase">Abonnements Expirés</h2>
        <p class="text-2xl font-bold mt-2">25</p>
      </div>

      <!-- Carte Bleue -->
      <div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h2 class="text-sm font-medium uppercase">Nouveaux Clients</h2>
        <p class="text-2xl font-bold mt-2">15</p>
      </div>
    </div>

    <!-- 📉 Graphique -->
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4">
      <h2 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
        Évolution des abonnements
      </h2>
      <BarChartJS :data="chartData" :options="chartOptions" style="height:250px;" />
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
    { label: "Valides", backgroundColor: "#22c55e", data: [30, 45, 50, 60, 70, 90] },
    { label: "Expirés", backgroundColor: "#ef4444", data: [5, 8, 10, 7, 12, 15] },
  ],
}
const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top", labels: { color: '#666', font: { size: 10 } } }
  },
  scales: {
    x: { ticks: { font: { size: 10 }, color: "#777" } },
    y: { ticks: { font: { size: 10 }, color: "#777" } }
  }
}
</script>
