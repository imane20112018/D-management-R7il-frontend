<template>
  <section id="content">
    <div class="content-wrap pb-0">
      <div class="container">

        <!-- 🔹 Statut global -->
        <div v-if="abonnementActif || statutValidation" class="mb-4">
          <div class="card shadow-sm border-0 rounded-3 p-3 text-center">
            <h4>📌 Statut de votre abonnement</h4>
            <p v-if="statutDemande === 'en_attente'" class="text-warning fw-bold">
              ⏳ Votre demande d’abonnement est en attente de validation par l’administrateur.
            </p>
            <p v-else-if="abonnementActif === 'free_14_days'" class="text-primary fw-bold">
              🎁 Vous êtes actuellement en période d’essai gratuit (14 jours).
            </p>
            <p v-else-if="abonnementActif === 'pack_1_month'" class="text-success fw-bold">
              ✅ Abonnement mensuel actif.
            </p>
            <p v-else-if="abonnementActif === 'pack_6_months'" class="text-success fw-bold">
              ✅ Abonnement semestriel actif.
            </p>
            <p v-else-if="abonnementActif === 'pack_1_year'" class="text-success fw-bold">
              ✅ Abonnement annuel actif.
            </p>
            <p v-else class="text-muted">
              ℹ️ Aucun abonnement actif.
            </p>
          </div>
        </div>
        <!-- 🔹 Fin Statut -->

        <!-- Offres -->
        <div id="section-pricing" class="page-section p-0 m-0">
          <div class="row col-mb-30 mb-5">

           <!-- Essai Gratuit -->
<div class="col-lg-4 col-md-6">
  <div class="pricing-box text-center">
    <div class="pricing-title text-uppercase">
      <h3>Essai Gratuit</h3>
    </div>
    <div class="pricing-price">
      GRATUIT<span class="price-tenure">14 jours</span>
    </div>
    <div class="pricing-features border-0 bg-transparent">
      <ul>
        <li>Utiliser la plateforme sans limitation</li>
        <li>Accepter ou refuser les réservations</li>
        <li>Durée limitée à 14 jours</li>
        <li>Support 24/7</li>
      </ul>
    </div>
    <div class="pricing-action">
      <span
        class="button button-large button-rounded ls-0 disabled"
        style="border-radius: 23px; cursor: default;"
      >
        {{
          abonnementActif === 'free_14_days'
            ? 'Activé'
            : 'Indisponible'
        }}
      </span>
    </div>
  </div>
</div>

            <!-- Mensuel -->
            <div class="col-lg-4 col-md-6">
              <div class="pricing-box text-center">
                <div class="pricing-title text-uppercase">
                  <h3>Abonnement Mensuel</h3>
                </div>
                <div class="pricing-price">
                  <span class="price-unit">DH</span>199<span class="price-tenure">/mois</span>
                </div>
                <div class="pricing-features border-0 bg-transparent">
                  <ul>
                    <li>Continuer à utiliser la plateforme</li>
                    <li>Accepter ou refuser les réservations</li>
                    <li>Support 24/7</li>
                  </ul>
                </div>
                <div class="pricing-action">
                  <!-- Mensuel -->
                  <button class="button button-large button-rounded text-capitalize ls-0" :disabled="statutValidation !== 'valide' ||
                    abonnementActif === 'pack_1_month' ||
                    statutDemande === 'en_attente'
                    " @click="demanderAbonnement('mensuel')" style="border-radius: 23px;">
                    {{
                      statutValidation !== 'valide'
                        ? 'Compte non validé'
                        : abonnementActif === 'pack_1_month'
                          ? 'Déjà actif'
                          : statutDemande === 'en_attente' && typeDemande === 'pack_1_month'
                            ? 'Demande en attente...'
                            : statutDemande === 'en_attente'
                    ? 'Indisponible'
                    : 'Demander à l’admin'
                    }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Annuel -->
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="pricing-box text-center">
                <div class="pricing-title text-uppercase">
                  <h3>Abonnement Annuel</h3>
                </div>
                <div class="pricing-price">
                  <span class="price-unit">DH</span>1999<span class="price-tenure">/an</span>
                </div>
                <div class="pricing-features border-0 bg-transparent">
                  <ul>
                    <li>Accès complet toute l’année</li>
                    <li>Accepter ou refuser les réservations</li>
                    <li>Support 24/7</li>
                  </ul>
                </div>
                <div class="pricing-action">
                  <!-- Annuel -->
                  <button class="button button-large button-rounded text-capitalize ls-0" :disabled="statutValidation !== 'valide' ||
                    abonnementActif === 'pack_1_year' ||
                    statutDemande === 'en_attente'
                    " @click="demanderAbonnement('annuel')" style="border-radius: 23px;">
                    {{
                      statutValidation !== 'valide'
                        ? 'Compte non validé'
                        : abonnementActif === 'pack_1_year'
                          ? 'Déjà actif'
                          : statutDemande === 'en_attente' && typeDemande === 'pack_1_year'
                            ? 'Demande en attente...'
                            : statutDemande === 'en_attente'
                    ? 'Indisponible'
                    : 'Demander à l’admin'
                    }}
                  </button>



                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="clear"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ServicePage',
  data() {
    return {
      abonnementActif: null,
      statutValidation: null,
      typeDemande: null,
      statutDemande: null // 👈 obligatoire
    }
  },

  mounted() {
    this.fetchStatut();
  },
  methods: {
    async fetchStatut() {
      try {
       const res = await api.get("/abonnement-statut");
console.log("Réponse statut:", res.data);  }
        });
        this.abonnementActif = res.data.abonnement_actif;
        this.statutValidation = res.data.statut_validation;
        this.typeDemande = res.data.type_demande;
        this.statutDemande = res.data.statut_demande; // 👈 ajouté
      } catch (err) {
        console.error('Erreur récupération statut abonnement', err);
      }
    },

    // async demanderAbonnement(type) {
    //   const map = {
    //     'mensuel': 'pack_1_month',
    //     'annuel': 'pack_1_year',
    //     'semestre': 'pack_6_months'
    //   };
    //   const typeAPI = map[type] || type;

    //   if (!confirm(`Confirmer la demande d’abonnement ${type}?`)) return;

    //   try {
    //     await axios.post('http://127.0.0.1:8000/api/demande-abonnement',
    //       { type: typeAPI },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem('transporteur_token')}`,
    //           Accept: 'application/json'
    //         }
    //       }
    //     );
    //     alert('✅ Votre demande a été envoyée à l’administrateur.');
    //     this.fetchStatut(); // refresh
    //   } catch (err) {
    //     console.error(err);
    //     alert("❌ Une erreur s'est produite.");
    //   }
    // }
    async demanderAbonnement(type) {
      const map = {
        mensuel: 'pack_1_month',
        annuel: 'pack_1_year',
        semestre: 'pack_6_months'
      };
      const typeAPI = map[type] || type;

      if (!confirm(`Confirmer la demande d’abonnement ${type}?`)) return;

      try {
        const res = await axios.post('http://127.0.0.1:8000/api/demande-abonnement',
          { type: typeAPI },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('transporteur_token')}`,
              Accept: 'application/json'
            }
          }
        );

        alert(res.data.message);

        // 🔹 mettre à jour directement selon la réponse API
        this.statutDemande = res.data.abonnement.statut; // "en_attente"
        this.typeDemande = res.data.abonnement.type;       // "pack_1_month"
      } catch (err) {
        console.error(err);
        alert("❌ Une erreur s'est produite.");
      }
    }
  }
}
</script>