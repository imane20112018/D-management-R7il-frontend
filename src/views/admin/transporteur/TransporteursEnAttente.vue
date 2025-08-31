<template>
  <main class="main" id="top">
    <nav class="mb-3" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
        <li class="breadcrumb-item active">Transporteurs en attente</li>
      </ol>
    </nav>

    <div class="mb-9">
      <!-- Header avec titre + total -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">⏳ Transporteurs en attente</h2>
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
                <th>Téléphone</th>
                <th>Date inscription</th>
                <th>Statut validation</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t, index) in transporteurs" :key="t.id">
                <td>{{ t.id }}</td>
                <td>{{ t.nom }}</td>
                <td>{{ t.email }}</td>
                <td>{{ t.telephone || '—' }}</td>
                <td>
                  <span class="badge bg-secondary-subtle text-secondary">
                    {{ formatDate(t.date_inscription) }}
                  </span>
                </td>
                <td>
                  <span class="badge bg-warning">En attente</span>
                </td>
                <td class="text-center">
                  <div class="d-flex justify-content-center gap-1">
                    <router-link :to="`/admin/transporteurs/${t.id}`" class="btn btn-sm btn-outline-primary py-0 px-1">
                      <span data-feather="eye" style="width:14px;height:14px;"></span>
                    </router-link>
                  </div>
                </td>
              </tr>

              <tr v-if="transporteurs.length === 0">
                <td colspan="7" class="text-center py-4 text-muted">
                  Aucun transporteur en attente trouvé ⏳
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

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import axios from 'axios'
import feather from 'feather-icons'

const transporteurs = ref([])
const pagination = ref({
  current_page: 1,
  per_page: 10,
  total: 0,
  last_page: 1,
})

function formatDate(dateString) {
  if (!dateString) return '—'
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

async function fetchTransporteurs(page = 1) {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(
      `http://127.0.0.1:8000/api/admin/transporteurs/attente?page=${page}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (Array.isArray(response.data)) {
      transporteurs.value = response.data
      pagination.value = {
        current_page: 1,
        per_page: response.data.length,
        total: response.data.length,
        last_page: 1,
      }
    } else {
      transporteurs.value = response.data.data ?? []
      pagination.value = {
        current_page: response.data.current_page,
        per_page: response.data.per_page,
        total: response.data.total,
        last_page: response.data.last_page,
      }
    }

    await nextTick()
    feather.replace()
  } catch (error) {
    console.error('Erreur chargement transporteurs en attente :', error)
  }
}

function changePage(page) {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchTransporteurs(page)
  }
}

onMounted(() => {
  fetchTransporteurs()
})
</script>
