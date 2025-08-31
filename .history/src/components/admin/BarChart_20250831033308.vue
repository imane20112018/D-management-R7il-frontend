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

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { mois: "Jan", valides: 30, expires: 5 },
  { mois: "Fév", valides: 45, expires: 8 },
  { mois: "Mar", valides: 50, expires: 10 },
  { mois: "Avr", valides: 60, expires: 7 },
];
</script>
