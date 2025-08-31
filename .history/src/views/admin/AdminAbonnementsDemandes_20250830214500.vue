<template>
  <main class="main" id="top">
    <div class="container py-4">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">📬 Demandes d’abonnement</h2>
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
              <th>Type demandé</th>
              <th>Statut</th>
              <th>Date</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(a, i) in demandes" :key="a.id">
              <td>{{ (pagination.current_page - 1) * pagination.per_page + i + 1 }}</td>
              <td>{{ a.transporteur?.nom || '—' }}</td>
              <td>
                <a :href="`mailto:${a.transporteur?.email}`">{{ a.transporteur?.email || '—' }}</a>
              </td>
              <td><span class="badge bg-primary">{{ mapType(a.type) }}</span></td>
              <td>
                <span
                  class="badge"
                  :class="{
                    'bg-warning': a.statut === 'en_attente',
                    'bg-success': a.statut === 'valide',
                    'bg-danger': a.statut === 'refuse',
                  }"
                >
                  {{ a.statut }}
                </span>
              </td>
              <td>{{ formatDate(a.created_at) }}</td>
              <td class="text-center">
                <div class="d-flex justify-content-center gap-2">
                  <button
                    class="btn btn-sm btn-outline-success py-0 px-2"
                    @click="validerDemande(a.id)"
                    :disabled="a.statut !== 'en_attente'"
                  >
                    Valider
                  </button>
                  <button
                    class="btn btn-sm btn-outline-danger py-0 px-2"
                    @click="refuserDemande(a.id)"
                    :disabled="a.statut !== 'en_attente'"
                  >
                    Refuser
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="demandes.length === 0">
              <td colspan="7" class="text-center py-4 text-muted">
                Aucune demande en attente.
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
import api from "@/axios"; // ✅ utilise l’instance axios
import feather from "feather-icons";

export default {
  name: "AdminAbonnementsDemandes",
  data() {
    return {
      demandes: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
      },
    };
  },
  methods: {
    // 🔹 Charger les demandes en attente
    async loadDemandes(page = 1) {
      try {
        const { data } = await api.get("/admin/abonnements/demandes", {
          params: { page, per_page: 10 },
        });

        this.demandes = data.data; // tableau de demandes
        this.pagination = {
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
        };

        this.$nextTick(() => feather.replace());
      } catch (error) {
        console.error(
          "Erreur chargement des demandes :",
          error.response?.data || error.message
        );
      }
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
  }
},
    // 🔹 Valider une demande
    async validerDemande(id) {
      if (!confirm("Valider cette demande ?")) return;

      try {
        await api.post(`/admin/abonnements/${id}/valider`);
        this.loadDemandes(this.pagination.current_page);
      } catch (error) {
        console.error(
          "Erreur validation :",
          error.response?.data || error.message
        );
      }
    },

    // 🔹 Refuser une demande
    async refuserDemande(id) {
      if (!confirm("Refuser cette demande ?")) return;

      try {
        await api.post(`/admin/abonnements/${id}/refuser`);
        this.loadDemandes(this.pagination.current_page);
      } catch (error) {
        console.error(
          "Erreur refus :",
          error.response?.data || error.message
        );
      }
    },

    // 🔹 Pagination
    changePage(page) {
      if (page > 0 && page <= this.pagination.last_page) {
        this.loadDemandes(page);
      }
    },

    // 🔹 Format date affichage
    formatDate(dateString) {
      if (!dateString) return "—";
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.loadDemandes();
    this.$nextTick(() => feather.replace());
  },
  updated() {
    feather.replace();
  },
};
</script>
