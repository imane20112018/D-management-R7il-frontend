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
                    class="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7"
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
                            src="../../assets/DashboardC/assets/img/favicons/image.png"
                            alt="R7il.ma"
                            width="50"
                          />
                        </div>
                      </a>
                      <h3 class="text-body-highlight">Se connecter</h3>
                      <p class="text-body-tertiary">Accédez à votre compte</p>
                    </div>
                    <button class="btn btn-phoenix-secondary w-100 mb-3">
                      <span class="fab fa-google text-danger me-2 fs-9"></span> Se connecter avec
                      google</button
                    ><button class="btn btn-phoenix-secondary w-100">
                      <span class="fab fa-facebook text-primary me-2 fs-9"></span> Se connecter avec
                      Facebook
                    </button>
                    <div class="position-relative">
                      <hr class="bg-body-secondary mt-5 mb-4" />
                      <div class="divider-content-center bg-body-emphasis">
                        ou utiliser votre adresse e-mail
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label class="form-label" for="email">Adresse e-mail</label>
                      <div class="form-icon-container">
                        <input
                          class="form-control form-icon-input"
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                        /><span class="fas fa-user text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label class="form-label" for="password">Mot de passe</label>
                      <div class="form-icon-container" data-password="data-password">
                        <input
                          class="form-control form-icon-input pe-6"
                          id="password"
                          type="password"
                          placeholder="Password"
                          data-password-input="data-password-input"
                        /><span class="fas fa-key text-body fs-9 form-icon"></span
                        ><button
                          class="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                          data-password-toggle="data-password-toggle"
                        >
                          <span class="uil uil-eye show"></span
                          ><span class="uil uil-eye-slash hide"></span>
                        </button>
                      </div>
                    </div>
                    <div class="row flex-between-center mb-7">
                      <div class="col-auto">
                        <div class="form-check mb-0">
                          <input
                            class="form-check-input"
                            id="basic-checkbox"
                            type="checkbox"
                            checked="checked"
                          /><label class="form-check-label mb-0" for="basic-checkbox"
                            >Se souvenir de moi</label
                          >
                        </div>
                      </div>
                      <div class="col-auto">
                        <router-link class="fs-9 fw-semibold" to="/forgot_password"
                          >Mot de passe Oublié</router-link
                        >
                      </div>
                    </div>
                    <button class="btn btn-primary w-100 mb-3">Se connecter</button>
                    <div class="text-center">
                      <router-link class="fs-9 fw-bold" to="/register_client"
                        >Créer un compte</router-link
                      >
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
  name: 'LoginClient',
}
</script>
