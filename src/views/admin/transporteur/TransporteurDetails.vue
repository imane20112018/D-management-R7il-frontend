<template>
  <main class="main" id="top">
    <section class="pt-5 pb-9">
      <div class="container-small">
        <div class="row align-items-center justify-content-between g-3 mb-4">
          <div class="col-auto">
            <h2 class="mb-0">Détails Transporteur</h2>
          </div>
        </div>

        <div class="row g-3 mb-6">
          <!-- Profil -->
          <div class="col-12 col-lg-8">
            <div class="card h-100">
              <div class="card-body">
                <div class="border-bottom border-dashed pb-4">
                  <div class="row align-items-center g-3 text-center text-sm-start">
                    <div class="col-12 col-sm-auto">
                      <img v-if="form.photo_profil" class="rounded-circle avatar avatar-5xl"
                        :src="fullURL(form.photo_profil)" alt="photo profil" />
                      <div v-else
                        class="rounded-circle bg-light avatar avatar-5xl d-flex align-items-center justify-content-center">
                        <i class="fas fa-user fa-2x text-secondary"></i>
                      </div>
                    </div>
                    <div class="col-12 col-sm-auto flex-1">
                      <h3>{{ form.nom }}</h3>
                      <p class="text-body-secondary">
                        Inscrit le {{ formattedDateInscription }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-between-center pt-4">
                  <div>
                    <h6 class="mb-2 text-body-secondary">Type</h6>
                    <h4 class="fs-7 text-body-highlight mb-0">
                      {{ form.type || '—' }}
                    </h4>
                  </div>
                  <div class="text-end">
                    <h6 class="mb-2 text-body-secondary">Statut validation</h6>
                    <h4 class="fs-7 text-body-highlight mb-0">
                      <span class="badge" :class="{
                        'bg-warning': form.statut_validation === 'en_attente',
                        'bg-success': form.statut_validation === 'valide',
                        'bg-danger': form.statut_validation === 'refuse'
                      }">
                        {{ libelleStatut }}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="col-12 col-lg-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-auto">
                    <h5>Adresse</h5>
                  </div>
                  <div class="col-auto">
                    <p>{{ form.adresse || '—' }}</p>
                  </div>
                </div>
                <div class="border-top border-dashed pt-3 mt-3">
                  <div class="row flex-between-center mb-2">
                    <div class="col-auto">
                      <h5>Email</h5>
                    </div>
                    <div class="col-auto">
                      <a :href="'mailto:' + form.email">{{ form.email || '—' }}</a>
                    </div>
                  </div>
                  <div class="row flex-between-center">
                    <div class="col-auto">
                      <h5>Téléphone</h5>
                    </div>
                    <div class="col-auto">
                      <a :href="'tel:' + form.telephone">
                        {{ form.telephone || 'Non renseigné' }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 🚗 Documents -->
        <div class="row g-3 mb-6">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Documents Transporteur</h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <!-- Véhicule -->
                  <div class="col-md-4">
                    <h6>Véhicule</h6>
                    <p>{{ form.vehicule || 'Non renseigné' }}</p>
                    <div v-if="form.photo_vehicule">
                      <a :href="fullURL(form.photo_vehicule)" target="_blank" class="btn btn-sm btn-outline-primary">
                        Voir photo véhicule
                      </a>
                    </div>
                    <div v-else class="text-body-secondary">—</div>
                  </div>

                  <!-- Permis -->
                  <div class="col-md-4">
                    <h6>Permis</h6>
                    <div v-if="form.permis">
                      <a :href="fullURL(form.permis)" target="_blank" class="btn btn-sm btn-outline-primary">
                        Voir permis
                      </a>
                    </div>
                    <div v-else class="text-body-secondary">Non fourni</div>
                  </div>

                  <!-- Carte Grise -->
                  <div class="col-md-4">
                    <h6>Carte Grise</h6>
                    <div v-if="form.carte_grise">
                      <a :href="fullURL(form.carte_grise)" target="_blank" class="btn btn-sm btn-outline-primary">
                        Voir carte grise
                      </a>
                    </div>
                    <div v-else class="text-body-secondary">Non fournie</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ✅ Boutons d'action -->
        <div class="text-end mt-4">
          <!-- <button class="btn btn-success me-2" @click="validerTransporteur">✅ Valider</button>
            <button class="btn btn-danger" @click="refuserTransporteur">❌ Refuser</button>-->
          <!-- ✅ Boutons d'action dynamiques -->
          <div class="text-end mt-4">
            <!-- Si statut = en attente -->
            <template v-if="form.statut_validation === 'en_attente'">
              <button class="btn btn-success me-2" @click="validerTransporteur">✅ Valider</button>
              <button class="btn btn-danger" @click="refuserTransporteur">❌ Refuser</button>
            </template>

            <!-- Si statut = valide -->
            <template v-else-if="form.statut_validation === 'valide'">
              <router-link to="/admin/transporteurs-valides" class="btn btn-secondary">
                🔙 Retour à la liste
              </router-link>
            </template>

            <!-- Si statut = refusé -->
            <template v-else-if="form.statut_validation === 'refuse'">
              <button class="btn btn-danger me-2" @click="supprimerTransporteur">🗑️ Supprimer</button>
              <button class="btn btn-warning" @click="remettreEnAttente">⏳ Remettre en attente</button>
            </template>
          </div>

        </div>
      </div>
    </section>
  </main>

</template>

<script>
import axios from "axios";
import AppHeader from "@/components/admin/AppHeader.vue";

export default {
  name: "TransporteurDetails",
  components: { AppHeader },
  data() {
    return {
      baseURL: "http://127.0.0.1:8000",
      form: {
        id: null,
        nom: "",
        email: "",
        telephone: "",
        adresse: "",
        photo_profil: "",
        vehicule: "",
        permis: "",
        carte_grise: "",
        photo_vehicule: "",
        type: "",
        statut_validation: "",
        date_inscription: "",
      },
    };
  },
  computed: {
    formattedDateInscription() {
      if (!this.form.date_inscription) return "N/A";
      return new Date(this.form.date_inscription).toLocaleDateString("fr-FR");
    },
    libelleStatut() {
      if (!this.form.statut_validation) return '—'
      return this.form.statut_validation === 'en_attente'
        ? 'En attente'
        : this.form.statut_validation === 'valide'
          ? 'Validé'
          : this.form.statut_validation === 'refuse'
            ? 'Refusé'
            : this.form.statut_validation
    }
  },
  async mounted() {
    await this.loadTransporteur();
  },
  methods: {
    fullURL(path) {
      if (!path) return "#";
      // supporte déjà /transporteurs_images/...
      return `${this.baseURL}/${path}`;
    },
    async loadTransporteur() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `http://127.0.0.1:8000/api/admin/transporteurs/${this.$route.params.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.form = response.data;
      } catch (error) {
        console.error("Erreur chargement transporteur :", error);
      }
    },
    async validerTransporteur() {
      try {
        const token = localStorage.getItem('token');
        await axios.post(
          `http://127.0.0.1:8000/api/admin/transporteurs/${this.form.id}/valider`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.form.statut_validation = "valide"; // ✅ mise à jour locale
        alert("Transporteur validé ✅");
      } catch (error) {
        console.error("Erreur validation :", error);
        alert("Erreur lors de la validation.");
      }
    },

    async refuserTransporteur() {
      try {
        const token = localStorage.getItem('token');
        await axios.post(
          `http://127.0.0.1:8000/api/admin/transporteurs/${this.form.id}/refuser`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.form.statut_validation = "refuse"; // ✅ mise à jour locale
        alert("Transporteur refusé ❌");
      } catch (error) {
        console.error("Erreur refus :", error);
        alert("Erreur lors du refus.");
      }
    },
    async supprimerTransporteur() {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(
          `http://127.0.0.1:8000/api/admin/transporteurs/${this.form.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Transporteur supprimé 🗑️");
        this.$router.push('/admin/transporteurs-refuses'); // rediriger vers la liste
      } catch (error) {
        console.error("Erreur suppression :", error);
        alert("Erreur lors de la suppression.");
      }
    },
    async remettreEnAttente() {
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      `http://127.0.0.1:8000/api/admin/transporteurs/${this.form.id}/en-attente`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    this.form.statut_validation = "en_attente";
    alert("Transporteur remis en attente ⏳");
  } catch (error) {
    console.error("Erreur mise en attente :", error);
    alert("Erreur lors du changement de statut.");
  }
}
  },
};
</script>