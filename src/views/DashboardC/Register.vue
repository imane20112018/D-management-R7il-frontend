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
                    class="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up"
                  >
                    <h3 class="mb-3 text-body-emphasis fs-7">Authentification R7il.ma</h3>
                    <p class="text-body-tertiary">Facilitez vos trajets avec Nous !</p>
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
                        ><span class="text-body-tertiary fw-semibold">Fiable</span>
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
                    <div class="text-center mb-7">
                      <a class="d-flex flex-center text-decoration-none mb-4" href="/">
                        <div class="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <img
                            src="../../assets/DashboardC/assets/img//favicons/image.png"
                            alt="phoenix"
                            width="50"
                          />
                        </div>
                      </a>
                      <h3 class="text-body-highlight">S'inscrire</h3>
                      <p class="text-body-tertiary">Créez votre compte aujourd'hui</p>
                    </div>
                    <button class="btn btn-phoenix-secondary w-100 mb-3">
                      <span class="fab fa-google text-danger me-2 fs-9"></span>Inscrivez-vous avec
                      google</button
                    ><button class="btn btn-phoenix-secondary w-100">
                      <span class="fab fa-facebook text-primary me-2 fs-9"></span>Inscrivez-vous
                      avec facebook
                    </button>
                    <div class="position-relative mt-4">
                      <hr class="bg-body-secondary" />
                      <div class="divider-content-center bg-body-emphasis">ou utilisez email</div>
                    </div>
                    <form>
                      <div class="mb-3 text-start">
                        <label class="form-label" for="name">Nom Complet</label
                        ><input class="form-control" id="name" type="text" placeholder="Name" />
                      </div>
                      <div class="mb-3 text-start">
                        <label class="form-label" for="email">Adresse e-mail</label
                        ><input
                          class="form-control"
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div class="row g-3 mb-3">
                        <div class="col-sm-6">
                          <label class="form-label" for="password">Mot de passe</label>
                          <div class="position-relative" data-password="data-password">
                            <input
                              class="form-control form-icon-input pe-6"
                              id="password"
                              type="password"
                              placeholder="Password"
                              data-password-input="data-password-input"
                            /><button
                              class="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                              data-password-toggle="data-password-toggle"
                            >
                              <span class="uil uil-eye show"></span
                              ><span class="uil uil-eye-slash hide"></span>
                            </button>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <label class="form-label" for="confirmPassword"
                            >Confirmez le mot de passe</label
                          >
                          <div class="position-relative" data-password="data-password">
                            <input
                              class="form-control form-icon-input pe-6"
                              id="confirmPassword"
                              type="password"
                              placeholder="Confirm Password"
                              data-password-input="data-password-input"
                            /><button
                              class="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                              data-password-toggle="data-password-toggle"
                            >
                              <span class="uil uil-eye show"></span
                              ><span class="uil uil-eye-slash hide"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" id="termsService" type="checkbox" /><label
                          class="form-label fs-9 text-transform-none"
                          for="termsService"
                          >J'accepte les<a href="#!">conditions générales </a>et
                          <a href="#!">la politique de confidentialité</a></label
                        >
                      </div>
                      <button class="btn btn-primary w-100 mb-3">S'inscrire</button>
                      <div class="text-center">
                        <router-link class="fs-9 fw-bold" to="/login_client"
                          >Connectez-vous à un compte existant
                        </router-link>
                      </div>
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
  name: 'RegisterClient',
}
</script>
