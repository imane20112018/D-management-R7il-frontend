<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <AppHeader />

    <!-- Contenu principal -->
    <div class="p-6 space-y-6">

      <!-- Titre -->
      <h1 class="text-2xl font-bold text-gray-800">Dashboard Admin</h1>

      <!-- 📊 Cards statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-4 rounded-2xl shadow">
          <h2 class="text-gray-600 text-sm">Transporteurs</h2>
          <p class="text-2xl font-bold">120</p>
        </div>
        <div class="bg-white p-4 rounded-2xl shadow">
          <h2 class="text-gray-600 text-sm">Clients</h2>
          <p class="text-2xl font-bold">340</p>
        </div>
        <div class="bg-white p-4 rounded-2xl shadow">
          <h2 class="text-gray-600 text-sm">Abonnements valides</h2>
          <p class="text-2xl font-bold text-green-600">75</p>
        </div>
        <div class="bg-white p-4 rounded-2xl shadow">
          <h2 class="text-gray-600 text-sm">Expirés</h2>
          <p class="text-2xl font-bold text-red-600">12</p>
        </div>
      </div>

      <!-- 📈 Graphique abonnements -->
      <div class="bg-white p-6 rounded-2xl shadow">
        <h2 class="text-lg font-semibold mb-4">Évolution des abonnements</h2>
        <BarChart />
      </div>

      <!-- 📋 Tableau derniers inscrits -->
      <div class="bg-white p-6 rounded-2xl shadow">
        <h2 class="text-lg font-semibold mb-4">Derniers transporteurs inscrits</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100 text-left">
              <th class="p-2">Nom</th>
              <th class="p-2">Email</th>
              <th class="p-2">Date inscription</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-2">Ali</td>
              <td class="p-2">ali@example.com</td>
              <td class="p-2">2025-08-10</td>
            </tr>
            <tr class="border-b">
              <td class="p-2">Imane</td>
              <td class="p-2">imane@example.com</td>
              <td class="p-2">2025-08-12</td>
            </tr>
            <tr>
              <td class="p-2">Omar</td>
              <td class="p-2">omar@example.com</td>
              <td class="p-2">2025-08-15</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/admin/AppHeader.vue'

// 📊 Exemple de graphique avec recharts
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Données fictives pour le graphique
const data = [
  { mois: "Jan", valides: 30, expires: 5 },
  { mois: "Fév", valides: 45, expires: 8 },
  { mois: "Mar", valides: 50, expires: 10 },
  { mois: "Avr", valides: 60, expires: 7 },
];

// Composant graphique
const BarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <ReBarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mois" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="valides" fill="#4ade80" />
      <Bar dataKey="expires" fill="#f87171" />
    </ReBarChart>
  </ResponsiveContainer>
);
</script>
