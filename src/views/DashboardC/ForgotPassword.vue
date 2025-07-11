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
                  <div class="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-5">
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
                    <div class="text-center">
                      <a class="d-flex flex-center text-decoration-none mb-4" href="/">
                        <div class="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <img
                            src="../../assets/DashboardC/assets/img/favicons/image.png"
                            alt="R7il.ma"
                            width="50"
                          />
                        </div>
                      </a>
                      <h4 class="text-body-highlight">Mot de passe oublié?</h4>
                      <p class="text-body-tertiary mb-5">
                        Saisissez votre adresse e-mail ci-dessous et <br class="d-md-none" />nous
                        vous enverrons <br class="d-none d-xxl-block" />un lien de réinitialisation
                      </p>
                      <form class="d-flex align-items-center mb-5">
                        <input
                          class="form-control flex-1"
                          id="email"
                          type="email"
                          placeholder="Email"
                        /><button class="btn btn-primary ms-2">
                          Envoyer<span class="fas fa-chevron-right ms-2"></span>
                        </button>
                      </form>
                      <a class="fs-9 fw-bold" href="#!">Vous avez toujours des problèmes ?</a>
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
  name: 'RForgotPassword',
}
</script>
