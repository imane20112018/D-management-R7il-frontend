<template>
        <div style="pointer-events: none;">
            <iframe src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%"
                height="400" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>

        <section id="content">

            <div class="content-wrap pb-0">

                <div class="container mb-5">
                    <div class="row justify-content-between">

                        <!-- FORMULAIRE -->
                        <div class="col-lg-8 mb-5 mb-lg-0">
                            <h3 class="mb-4">Envoyez-nous un message</h3>

                            <form id="contact-form" action="#" method="post" class="needs-validation" novalidate>
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">Nom <span
                                                class="text-danger">*</span></label>
                                        <input type="text" id="name" name="name" class="form-control" required>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="email" class="form-label">Email <span
                                                class="text-danger">*</span></label>
                                        <input type="email" id="email" name="email" class="form-control" required>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="phone" class="form-label">Téléphone</label>
                                        <input type="text" id="phone" name="phone" class="form-control">
                                    </div>

                                    <div class="col-md-6">
                                        <label for="service" class="form-label">Service souhaité</label>
                                        <select id="service" name="service" class="form-select">
                                            <option value="">-- Choisissez un service --</option>
                                            <option value="demenagement-bureau">Déménagement de bureau</option>
                                            <option value="demenagement-domicile">Déménagement de domicile</option>
                                            <option value="demenagement-international">Déménagement international
                                            </option>
                                            <option value="transport-animaux">Transport d’animaux</option>
                                        </select>
                                    </div>

                                    <div class="col-12">
                                        <label for="message" class="form-label">Message <span
                                                class="text-danger">*</span></label>
                                        <textarea id="message" name="message" rows="5" class="form-control"
                                            required></textarea>
                                    </div>

                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary w-100 py-2">Envoyer le
                                            message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- COORDONNÉES -->
                        <div class="col-lg-4">
                            <h3 class="mb-4">Coordonnées</h3>
                            <div class="bg-light p-4 rounded shadow-sm">
                                <h5 class="fw-semibold mb-2">Siège social :</h5>
                                <address class="mb-3">
                                    Rue Ibnou Sina, Quartier Palmier<br>
                                    20250 Casablanca, Maroc<br>
                                </address>
                                <p class="mb-1"><strong>Téléphone :</strong> <a href="tel:+212 619 222 222"
                                        class="text-dark">+212 619 222 222</a></p>
                                <p class="mb-1"><strong>Fax :</strong> <a href="tel:+212 619 222 222"
                                        class="text-dark">+212 619 222 222</a></p>
                                <p class="mb-0"><strong>Email :</strong> <a href="mailto:R7il@R7il.ma"
                                        class="text-dark">R7il@R7il.ma</a></p>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="clear"></div>


                <div class="section dark pt-0 mb-0 bg-color"
                    style="background: url('demos/movers/images/bg-2.png') no-repeat center bottom / 100%; overflow: visible">
                    <svg viewBox="0 0 1960 206.8" class="bg-white">
                        <path class="svg-themecolor" style="opacity:0.2;"
                            d="M0,142.8A2337.49,2337.49,0,0,1,297.5,56.3C569.33-3.53,783.89.22,849.5,2.3c215.78,6.86,382.12,45.39,503.25,73.45,158.87,36.8,283.09,79.13,458.75,54.55A816.49,816.49,0,0,0,1983,86.8v110H0Z">
                        </path>
                        <path class="svg-themecolor" d="M.5,152.8s498-177,849-150,1031,238,1134,94v110H.5Z"></path>
                    </svg>

                    <div class="container">
                        <div class="row align-items-center justify-content-center text-center my-4">

                            <div class="col-sm-8">
                                <div class="heading-block border-bottom-0 mb-4">
                                    <h2 class="fw-semibold ls-0 text-transform-none mb-3"
                                        style="font-size: 44px; line-height: 1.3">
                                        Contactez nos spécialistes du déménagement
                                    </h2>
                                    <p>Notre équipe est à votre écoute pour vous accompagner à chaque étape de votre
                                        déménagement, en toute sérénité.</p>
                                </div>
                                <a href="/contact"
                                    class="button button-white button-light button-rounded fw-medium m-0">Nous
                                    contacter</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>

<script>

export default {
    name: 'ContactPage',

}
</script>

<style scoped>
.bg-color {
    background-color: rgb(178 59 59) !important;
}

#slider .nav-link:hover:not(.active) {
    border-color: rgba(255, 255, 255, .25);
    background-color: rgba(165, 42, 42, 0.7);
}

form label {
    font-weight: 600;
}

input,
select,
textarea {
    border-radius: 0.5rem;
    border: 1px solid #ccc;
}

textarea {
    resize: vertical;
}

.btn-primary {
    background-color: #A52A2A;
    border-color: #A52A2A;
}

.btn-primary:hover {
    background-color: black;
    background-color: black;
    color: white;
}
</style>
