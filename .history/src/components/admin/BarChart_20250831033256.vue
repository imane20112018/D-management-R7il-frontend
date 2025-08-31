<template>
  <ResponsiveContainer width="100%" height="300">
    <ReBarChart :data="data">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mois" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="valides" fill="#4ade80" />
      <Bar dataKey="expires" fill="#f87171" />
    </ReBarChart>
  </ResponsiveContainer>
</template>

<script setup>
import AppHeader from '@/components/admin/AppHeader.vue'
import BarChart from '@/components/admin/BarChart.vue'
</script>
