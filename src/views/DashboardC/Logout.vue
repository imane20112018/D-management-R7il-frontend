<template>
  <main class="main" id="top">
    <div class="container-fluid bg-body-tertiary dark__bg-gray-1200">
      <div
        class="bg-holder bg-auth-card-overlay"
        style="background-image: url(../../../assets/img/bg/37.png)"
      ></div>
      <!--/.bg-holder-->
      <div class="row flex-center position-relative min-vh-100 g-0 py-5">
        <div class="col-11 col-sm-10 col-xl-8">
          <div class="card border border-translucent auth-card">
            <div class="card-body pe-md-0">
              <div class="row align-items-center gx-0 gy-7">
                <div
                  class="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box"
                >
                  <div
                    class="bg-holder"
                    style="background-image: url(../../../assets/img/bg/38.png)"
                  ></div>
                  <!--/.bg-holder-->
                  <div
                    class="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7"
                  >
                    <h3 class="mb-3 text-body-emphasis fs-7">R7il.ma</h3>
                    <p class="text-body-tertiary">Facilitez vos trajets avec R7il.ma !</p>
                    <ul class="list-unstyled mb-0 w-max-content w-md-auto">
                      <li class="d-flex align-items-center">
                        <span class="uil uil-check-circle text-success me-2"></span
                        ><span class="text-body-tertiary fw-semibold">Rapide</span>
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="uil uil-check-circle text-success me-2"></span
                        ><span class="text-body-tertiary fw-semibold">Accessible</span>
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="uil uil-check-circle text-success me-2"></span
                        ><span class="text-body-tertiary fw-semibold">Fiable </span>
                      </li>
                    </ul>
                  </div>
                  <div class="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                     <img
                      class="auth-title-box-img d-dark-none"
                      src="../../assets/DashboardC/assets/img/spot-illustrations/voiture2.png"
                      alt=""
                    /><img
                      class="auth-title-box-img d-light-none"
                      src="../../../assets/img/spot-illustrations/auth-dark.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col mx-auto">
                  <div class="auth-form-box">
                    <div class="text-center mb-6 mx-auto">
                     <img
                            src="../../assets/DashboardC/assets/img/favicons/image.png"
                            alt="R7il.ma"
                            width="50"
                          />

                      <img
                        class="mb-7 d-light-none"
                        src="../../../assets/img/spot-illustrations/dark_1.png"
                        alt="phoenix"
                      />
                      <div class="mb-6">
                        <h4 class="text-body-highlight">Revenez bientôt!</h4>
                        <p class="text-body-tertiary">
                          Merci d'avoir utilisé R7il.ma.<br class="d-lg-none" />Vous êtes maintenant
                          <br class="d-sm-none" />déconnecté.
                        </p>
                      </div>
                      <div class="d-grid">
                        <router-link class="btn btn-primary" to="/login_client">
                          <span class="fas fa-angle-left me-2"></span>
                          Revenir a la page de connexion
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'LogoutPage',
}
</script>
