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
                    <h3 class="mb-3 text-body-emphasis fs-7">Authentification R7il.ma</h3>
                    <p class="text-body-tertiary">Facilitez vos trajets avec Nous</p>
                    <ul class="list-unstyled mb-0 w-max-content w-md-auto">
                      <li class="d-flex align-items-center">
                        <span class="uil uil-check-circle text-success me-2"></span
                        ><span class="text-body-tertiary fw-semibold">Rapide </span>
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
                      src="../../../assets/img/spot-illustrations/auth.png"
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
                    <div class="text-center mb-7">
                      <a class="d-flex flex-center text-decoration-none mb-4" href="/">
                        <div class="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <img
                            src="../../assets/DashboardC/assets/img/favicons/image.png"
                            alt="R7il.ma"
                            width="50"
                          />
                        </div>
                      </a>
                      <h4 class="text-body-highlight">Réinitialiser le nouveau mot de passe</h4>
                      <p class="text-body-tertiary">Tapez votre nouveau mot de passe</p>
                    </div>
                    <form class="mt-5">
                      <div class="position-relative mb-2" data-password="data-password">
                        <input
                          class="form-control form-icon-input pe-6"
                          id="password"
                          type="password"
                          placeholder="Tapez un nouveau mot de passe"
                          data-password-input="data-password-input"
                        /><button
                          class="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                          data-password-toggle="data-password-toggle"
                        >
                          <span class="uil uil-eye show"></span
                          ><span class="uil uil-eye-slash hide"></span>
                        </button>
                      </div>
                      <div class="position-relative mb-4" data-password="data-password">
                        <input
                          class="form-control form-icon-input pe-6"
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirmer le nouveau mot de passe"
                          data-password-input="data-password-input"
                        /><button
                          class="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                          data-password-toggle="data-password-toggle"
                        >
                          <span class="uil uil-eye show"></span
                          ><span class="uil uil-eye-slash hide"></span>
                        </button>
                      </div>
                      <button class="btn btn-primary w-100" type="submit">
                        Définir le mot de passe
                      </button>
                    </form>
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
  name: 'ResetPassword',
}
</script>
