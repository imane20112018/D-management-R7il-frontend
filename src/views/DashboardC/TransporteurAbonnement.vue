<template>
  <div>
    <button @click="lancerPaiement('free_14_days')">Essai gratuit 14 jours</button>
    <button @click="lancerPaiement('pack_1_month')">Pack 1 mois</button>
    <button @click="lancerPaiement('pack_6_months')">Pack 6 mois</button>
    <button @click="lancerPaiement('pack_1_year')">Pack 1 an</button>
  </div>
</template>
<script>
import api from "@/axios";

export default {
  name: "TransporteurAbonnement",
  methods: {
    async lancerPaiement(type) {
      try {
        const { data } = await api.post("/transporteur/abonnements/checkout", { type });
        if (data.url) {
          window.location.href = data.url; // redirection vers Stripe Checkout
        } else {
          alert(data.message); // si essai gratuit
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    },
  },
};
</script>
