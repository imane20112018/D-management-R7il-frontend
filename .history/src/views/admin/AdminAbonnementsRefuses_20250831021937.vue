<script>
import api from "@/axios";

export default {
  name: "AdminAbonnementsRefuses",
  data() {
    return {
      abonnements: [],
      loading: true,
      error: null,
      page: 1,
      perPage: 10,
      total: 0,
    };
  },
  mounted() {
    this.fetchRefuses();
  },
  methods: {
    async fetchRefuses() {
      this.loading = true;
      try {
        const res = await api.get(`/admin/abonnements/refuses?page=${this.page}&per_page=${this.perPage}`);
        this.abonnements = res.data.data;
        this.total = res.data.total;
      } catch (err) {
        this.error = "Impossible de charger les abonnements refusés.";
      } finally {
        this.loading = false;
      }
    },
    async deleteAbonnement(id) {
      if (!confirm("Supprimer définitivement cet abonnement ?")) return;
      try {
        await api.delete(`/admin/abonnements/${id}`);
        this.fetchRefuses();
      } catch (err) {
        alert("Erreur lors de la suppression");
      }
    }
  }
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">📋 Abonnements refusés</h2>

    <div v-if="loading">Chargement...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else>
      <table class="min-w-full border">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2 border">ID</th>
            <th class="px-4 py-2 border">Transporteur</th>
            <th class="px-4 py-2 border">Motif refus</th>
            <th class="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ab in abonnements" :key="ab.id">
            <td class="px-4 py-2 border">{{ ab.id }}</td>
            <td class="px-4 py-2 border">{{ ab.transporteur?.nom ?? '-' }}</td>
            <td class="px-4 py-2 border">{{ ab.motif_refus ?? 'Non précisé' }}</td>
            <td class="px-4 py-2 border">
              <button
                class="bg-red-500 text-white px-3 py-1 rounded"
                @click="deleteAbonnement(ab.id)"
              >
                🗑 Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
