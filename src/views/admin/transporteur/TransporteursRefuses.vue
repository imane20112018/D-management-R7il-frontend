<template>
  <main class="main" id="top">
    <!-- Fil d'ariane -->
    <nav class="mb-3" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
        <li class="breadcrumb-item active">Transporteurs refusés</li>
      </ol>
    </nav>

    <div class="mb-9">
      <!-- Titre + total -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">🚫 Transporteurs refusés</h2>
        <div class="card shadow-sm px-3 py-2 bg-light">
          <strong>Total : {{ pagination.total }}</strong>
        </div>
      </div>

      <!-- Table -->
      <div
        class="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
        <div class="table-responsive scrollbar-overlay mx-n1 px-1">
          <table class="table table-sm fs-9 mb-0 align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Adresse</th>
                <th>Date inscription</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t, index) in transporteurs" :key="t.id">
                <td>{{ t.id }}</td>
                <td class="fw-semibold text-primary">{{ t.nom || "—" }}</td>
                <td>
                  <a :href="`mailto:${t.email}`" class="text-decoration-none">
                    {{ t.email }}
                  </a>
                </td>
                <td>{{ t.telephone || "—" }}</td>
                <td>{{ t.adresse || "—" }}</td>
                <td>
                  <span class="badge bg-secondary-subtle text-secondary">
                    {{ formatDate(t.date_inscription) }}
                  </span>
                </td>
                <td class="text-center">
                  <div class="d-flex justify-content-center gap-1">
                    <router-link :to="`/admin/transporteurs/${t.id}`" class="btn btn-sm btn-outline-primary py-0 px-1">
                      <span data-feather="eye" style="width:14px; height:14px;"></span>
                    </router-link>
                    <button class="btn btn-sm btn-outline-danger py-0 px-1" @click="deleteTransporteur(t.id)">
                      <span data-feather="trash-2" style="width:14px; height:14px;"></span>
                    </button>
                  </div>
                </td>


              </tr>

              <tr v-if="transporteurs.length === 0">
                <td colspan="7" class="text-center py-4 text-muted">
                  Aucun transporteur refusé trouvé ✅
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination -->
      <nav v-if="pagination.last_page > 1" class="mt-3">
        <ul class="pagination pagination-sm justify-content-center mb-0">
          <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
            <button class="page-link" @click="changePage(pagination.current_page - 1)">
              ⬅ Précédent
            </button>
          </li>

          <li v-for="page in pagination.last_page" :key="page" class="page-item"
            :class="{ active: page === pagination.current_page }">
            <button class="page-link" @click="changePage(page)">
              {{ page }}
            </button>
          </li>

          <li class="page-item" :class="{ disabled: pagination.current_page === pagination.last_page }">
            <button class="page-link" @click="changePage(pagination.current_page + 1)">
              Suivant ➡
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import feather from "feather-icons";

export default {
  name: "TransporteursRefuses",
  data() {
    return {
      transporteurs: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
      },
    };
  },
  methods: {
    async loadTransporteurs(page = 1) {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/admin/transporteurs/refuses?page=${page}&per_page=10`
        );
        this.transporteurs = data.data;
        this.pagination = {
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
        };
        this.$nextTick(() => feather.replace());
      } catch (error) {
        console.error("Erreur chargement transporteurs refusés :", error);
      }
    },
    formatDate(dateString) {
  if (!dateString) return '—'
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
    },
    changePage(page) {
      if (page > 0 && page <= this.pagination.last_page) {
        this.loadTransporteurs(page);
      }
    },
    async deleteTransporteur(id) {
      if (confirm("Supprimer ce transporteur ?")) {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/admin/transporteurs/${id}`);
          this.loadTransporteurs(this.pagination.current_page);
        } catch (e) {
          console.error("Erreur suppression :", e);
        }
      }
    },
  },
  mounted() {
    this.loadTransporteurs();
    this.$nextTick(() => feather.replace());
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped>
/* même style pour icônes que sur en attente */
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--bs-border-color, #dee2e6);
  background: transparent;
  padding: 0;
  line-height: 1;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.icon-btn:hover {
  background-color: var(--bs-light, #f8f9fa);
}

.icon-btn>span[data-feather] {
  width: 14px;
  height: 14px;
  stroke-width: 2;
}
</style>
