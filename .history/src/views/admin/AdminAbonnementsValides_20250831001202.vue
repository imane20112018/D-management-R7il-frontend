<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">📌 Abonnements valides</h2>

    <table class="min-w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-3 py-2 border">Transporteur</th>
          <th class="px-3 py-2 border">Pack</th>
          <th class="px-3 py-2 border">Date fin</th>
          <th class="px-3 py-2 border">Statut</th>
          <th class="px-3 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in abonnements" :key="a.id" class="text-center">
          <td class="px-3 py-2 border">{{ a.transporteur?.nom }}</td>
          <td class="px-3 py-2 border">{{ a.type }}</td>
          <td class="px-3 py-2 border">{{ a.date_fin }}</td>
          <td class="px-3 py-2 border">
            <span class="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">✅ Actif</span>
          </td>
          <td class="px-3 py-2 border">
            <button 
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              @click="resilier(a.id)"
            >
              ❌ Résilier
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/axios";

export default {
  data() {
    return {
      abonnements: []
    }
  },
  methods: {
    async fetchValides() {
      const res = await api.get('/admin/abonnements/valide");
      this.abonnements = res.data;
    },
    async resilier(id) {
      if (!confirm("Voulez-vous vraiment résilier cet abonnement ?")) return;

      await api.patch(`/admin/abonnements/${id}/resilier`);
      this.fetchValides(); // refresh la liste
    }
  },
  mounted() {
    this.fetchValides();
  }
}
</script>
