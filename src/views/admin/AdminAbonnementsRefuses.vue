<template>
  <main class="main" id="top">
    <div class="container py-4">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">❌ Abonnements refusés</h2>
        <div class="card shadow-sm px-3 py-2 bg-light">
          <strong>Total : {{ pagination.total }}</strong>
        </div>
      </div>

      <div class="table-responsive shadow-sm rounded bg-white p-3">
        <table class="table table-sm table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Transporteur</th>
              <th>Email</th>
              <th>Pack</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Motif refus</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(a,i) in abonnements" :key="a.id">
              <td>{{ (pagination.current_page - 1) * pagination.per_page + i + 1 }}</td>
              <td>{{ a.transporteur?.nom || '—' }}</td>
              <td>
                <a :href="`mailto:${a.transporteur?.email}`">{{ a.transporteur?.email || '—' }}</a>
              </td>
              <td><span class="badge bg-secondary">{{ mapType(a.type) }}</span></td>
              <td>{{ formatDate(a.date_debut) }}</td>
              <td>{{ formatDate(a.date_fin) }}</td>
              <td>{{ a.motif_refus || "—" }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-danger py-0 px-2"
                  @click="supprimer(a.id)"
                >
                  Supprimer
                </button>
              </td>
            </tr>
            <tr v-if="abonnements.length === 0">
              <td colspan="8" class="text-center py-4 text-muted">
                Aucun abonnement refusé.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav v-if="pagination.last_page > 1" class="mt-3">
        <ul class="pagination justify-content-center mb-0">
          <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
            <button class="page-link" @click="changePage(pagination.current_page - 1)">⬅ Précédent</button>
          </li>
          <li
            v-for="p in pagination.last_page"
            :key="p"
            class="page-item"
            :class="{ active: p === pagination.current_page }"
          >
            <button class="page-link" @click="changePage(p)">{{ p }}</button>
          </li>
          <li class="page-item" :class="{ disabled: pagination.current_page === pagination.last_page }">
            <button class="page-link" @click="changePage(pagination.current_page + 1)">Suivant ➡</button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
import api from "@/axios";

export default {
  name: "AdminAbonnementsRefuses",
  data() {
    return {
      abonnements: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
      },
    };
  },
  methods: {
    mapType(type) {
      switch (type) {
        case "free_14_days":
          return "Essai gratuit (14 jours)";
        case "pack_1_month":
          return "Pack 1 mois";
        case "pack_6_months":
          return "Pack 6 mois";
        case "pack_1_year":
          return "Pack 1 an";
        default:
          return type;
      }
    },
    async fetchRefuses(page = 1) {
      try {
        const { data } = await api.get("/admin/abonnements/refuses", {
          params: { page, per_page: 10 },
        });

        this.abonnements = data.data;
        this.pagination = {
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
        };
      } catch (err) {
        console.error("Erreur chargement refusés :", err.response?.data || err.message);
      }
    },
    async supprimer(id) {
      if (!confirm("Voulez-vous supprimer définitivement cet abonnement refusé ?")) return;

      try {
        await api.delete(`/admin/abonnements/${id}`);
        this.fetchRefuses(this.pagination.current_page);
      } catch (err) {
        console.error("Erreur suppression :", err.response?.data || err.message);
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.pagination.last_page) {
        this.fetchRefuses(page);
      }
    },
    formatDate(dateString) {
      if (!dateString) return "—";
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.fetchRefuses();
  },
};
</script>
