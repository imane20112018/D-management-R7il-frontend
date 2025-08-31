<template>

  <main class="main" id="top">
    <nav class="mb-3" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
        <li class="breadcrumb-item active">Transporteurs incomplets</li>
      </ol>
    </nav>

    <div class="mb-9">
     <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">📝 Transporteurs incomplets</h2>
        <div class="card shadow-sm px-3 py-2 bg-light">
          <strong>Total : {{ pagination.total }}</strong>
        </div>
      </div>

      <!-- Table -->
      <div
        class="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
        <div class="table-responsive scrollbar-overlay mx-n1 px-1">
          <table class="table table-sm fs-9 mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Véhicule</th>
                <th>Permis</th>
                <th>Carte grise</th>
                <th>Date inscription</th>
                <th>Statut validation</th>
                <th>Informations manquants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="t in transporteurs" :key="t.id"
                class="hover-actions-trigger btn-reveal-trigger position-static">
                <td>{{ t.id }}</td>
                <td>{{ t.nom || '—' }}</td>
                <td>
                  <a v-if="t.email" :href="'mailto:' + t.email" class="fw-semibold">
                    {{ t.email }}
                  </a>
                  <span v-else>—</span>
                </td>
                <td>
                  <img :src="t.photo_vehicule
                      ? `http://127.0.0.1:8000/${t.photo_vehicule}`
                      : '/assets/img/icons/no-file.png'
                    " alt="Photo véhicule" class="rounded" width="60" height="40" />
                </td>
                <td>
                  <img
                    :src="
                      t.permis
                        ? `http://127.0.0.1:8000/${t.permis}`
                        : '/assets/img/icons/no-file.png'
                    "
                    alt="Permis"
                    class="rounded"
                    width="60"
                    height="40"
                  />
                </td>
                <td>
                  <img :src="t.carte_grise
                      ? `http://127.0.0.1:8000/${t.carte_grise}`
                      : '/assets/img/icons/no-file.png'
                    " alt="Carte grise" class="rounded" width="60" height="40" />
                </td>
                <td>
                  <span class="badge bg-secondary-subtle text-secondary">
                    {{ formatDate(t.date_inscription) }}
                  </span>
                </td>
                <td>
                  <span class="badge bg-warning">incomplet</span>
                </td>
                <td>
                  <ul class="text-danger small mb-0">
                    <li v-for="field in t.missing_fields" :key="field">{{ field }}</li>
                  </ul>
                </td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="deleteTransporteur(t.id)">
                    Supprimer
                  </button>
                </td>
              </tr>

              <tr v-if="transporteurs.length === 0">
                <td colspan="8" class="text-center py-4 text-muted">
                  Aucun transporteur incomplet trouvé ✅
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
         <!-- Pagination -->
      <nav v-if="pagination.last_page > 1" class="mt-3">
        <ul class="pagination justify-content-center mb-0">
          <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
            <button class="page-link" @click="changePage(pagination.current_page - 1)">
              ⬅ Précédent
            </button>
          </li>

          <li
            v-for="page in pagination.last_page"
            :key="page"
            class="page-item"
            :class="{ active: page === pagination.current_page }"
          >
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

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppHeader from '@/components/admin/AppHeader.vue'

const transporteurs = ref([])
const pagination = ref({
  current_page: 1,
  per_page: 10,
  total: 0,
  last_page: 1,
})

// 👉 Formater la date
function formatDate(dateString) {
  if (!dateString) return '—'
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// 👉 Charger transporteurs incomplets avec pagination
async function fetchTransporteurs(page = 1) {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(
      `http://127.0.0.1:8000/api/admin/transporteurs/incomplets?page=${page}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )

    transporteurs.value = response.data.data
    pagination.value = {
      current_page: response.data.current_page,
      per_page: response.data.per_page,
      total: response.data.total,
      last_page: response.data.last_page,
    }
  } catch (error) {
    console.error('Erreur lors du chargement des transporteurs incomplets :', error)
  }
}

// 👉 Supprimer transporteur
async function deleteTransporteur(id) {
  if (!confirm("⚠️ Voulez-vous vraiment supprimer ce transporteur ?")) return;

  try {
    const token = localStorage.getItem('token')
    await axios.delete(`http://127.0.0.1:8000/api/admin/transporteurs/incomplets/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    // Recharger la page actuelle après suppression
    fetchTransporteurs(pagination.value.current_page)

    alert("✅ Transporteur supprimé !")
  } catch (error) {
    console.error("Erreur suppression :", error)
    alert("❌ Impossible de supprimer le transporteur")
  }
}

// 👉 Changer de page
function changePage(page) {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchTransporteurs(page)
  }
}

// Charger au montage
onMounted(() => {
  fetchTransporteurs()
})
</script>

