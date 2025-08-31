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
            <tr v-for="(a, i) in abonnements" :key="a.id">
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
</td>              <td>{{ new Date(a.created_at).toLocaleDateString('fr-FR') }}</td>
              <td class="text-center">
                <td class="text-center">
  <div class="d-flex justify-content-center gap-2">
    <button 
      class="btn btn-sm btn-outline-success py-0 px-2"
      @click="valider(a.id)"
      :disabled="a.statut !== 'en_attente'"
    >
      Valider
    </button>
    <button 
      class="btn btn-sm btn-outline-danger py-0 px-2"
      @click="refuser(a.id)"
      :disabled="a.statut !== 'en_attente'"
    >
      Refuser
    </button>
  </div>
</td>

              </td>
            </tr>
            <tr v-if="abonnements.length === 0">
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
          <li v-for="p in pagination.last_page" :key="p" class="page-item" :class="{ active: p === pagination.current_page }">
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

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const abonnements = ref([])
const pagination = ref({
  current_page: 1,
  per_page: 10,
  total: 0,
  last_page: 1,
})

function mapType(t) {
  return ({
    free_14_days: 'Essai 14 jours',
    pack_1_month: 'Pack 1 mois',
    pack_6_months: 'Pack 6 mois',
    pack_1_year: 'Pack 1 an',
  })[t] || t
}

async function fetchDemandes(page = 1) {
  try {
    const token = localStorage.getItem('token')
    const { data } = await axios.get(`/api/admin/abonnements/demandes?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    // console.log("API response:", data)

    abonnements.value = data.data || []
    pagination.value = {
      current_page: data.current_page,
      per_page: data.per_page,
      total: data.total,
      last_page: data.last_page,
    }
  } catch (e) {
    console.error(e)
  }
}

async function valider(id) {
  if (!confirm('Valider cette demande ?')) return
  try {
    const token = localStorage.getItem('token')
    await axios.post(`/api/admin/abonnements/${id}/valider`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
    alert('✅ Demande validée avec succès.')
    fetchDemandes(pagination.value.current_page)
  } catch (e) {
    alert('❌ Erreur lors de la validation.')
  }
}

async function refuser(id) {
  if (!confirm('Refuser cette demande ?')) return
  const token = localStorage.getItem('token')
  await axios.post(`/api/admin/abonnements/${id}/refuser`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  })
  fetchDemandes(pagination.value.current_page)
}

onMounted(() => fetchDemandes())
</script>
