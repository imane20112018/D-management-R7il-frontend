<template>
  <AppHeader />

  <div class="p-6 space-y-6">
    <!-- Titre -->
    <h1 class="text-3xl font-bold">Dashboard Admin</h1>
    <p class="text-gray-500">Vue d'ensemble des activités sur la plateforme</p>

    <!-- 📊 Statistiques rapides -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white shadow rounded-2xl p-6">
        <h2 class="text-gray-500">Transporteurs</h2>
        <p class="text-3xl font-bold text-blue-600">{{ stats.transporteurs }}</p>
      </div>

      <div class="bg-white shadow rounded-2xl p-6">
        <h2 class="text-gray-500">Clients</h2>
        <p class="text-3xl font-bold text-green-600">{{ stats.clients }}</p>
      </div>

      <div class="bg-white shadow rounded-2xl p-6">
        <h2 class="text-gray-500">Abonnements Actifs</h2>
        <p class="text-3xl font-bold text-purple-600">{{ stats.abonnementsActifs }}</p>
      </div>
    </div>

    <!-- 📈 Graphique abonnements -->
    <div class="bg-white shadow rounded-2xl p-6">
      <h2 class="text-lg font-semibold mb-4">Abonnements (Validés vs Expirés)</h2>
      <ResponsiveContainer width="100%" height="300">
        <ReBarChart :data="data">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="valides" fill="#4ade80" name="Validés" />
          <Bar dataKey="expires" fill="#f87171" name="Expirés" />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/admin/AppHeader.vue'
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// 📌 Statistiques rapides (tu pourras remplacer par un appel API)
const stats = {
  transporteurs: 120,
  clients: 340,
  abonnementsActifs: 85
}

// 📌 Données du graphique
const data = [
  { mois: "Jan", valides: 30, expires: 5 },
  { mois: "Fév", valides: 45, expires: 8 },
  { mois: "Mar", valides: 50, expires: 10 },
  { mois: "Avr", valides: 60, expires: 7 },
  { mois: "Mai", valides: 70, expires: 12 },
  { mois: "Juin", valides: 90, expires: 15 },
];
</script>

<style scoped>
/* Tu peux ajuster les couleurs pour correspondre à ton thème */
</style>
