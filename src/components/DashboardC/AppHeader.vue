<template>
  <main class="main" id="top">
    <nav class="navbar navbar-vertical navbar-expand-lg" style="display: none">
      <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
        <!-- scrollbar removed-->
        <div class="navbar-vertical-content">
          <ul class="navbar-nav flex-column" id="navbarVerticalNav">
            <li class="nav-item">
              <!-- parent pages-->
              <div class="nav-item-wrapper">
                <a
                  class="nav-link label-1"
                  href="pages/starter.html"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div class="d-flex align-items-center">
                    <span class="nav-link-icon"><span data-feather="pie-chart"></span></span>

                    <span class="nav-link-text-wrapper"
                      ><span class="nav-link-text">Dashboard</span></span
                    >
                  </div>
                </a>
              </div>
            </li>

            <li class="nav-item">
              <!-- label-->
              <p class="navbar-vertical-label">Pages</p>
              <hr class="navbar-vertical-line" />
              <!-- parent pages-->

              <!-- parent pages-->
              <div class="nav-item-wrapper">
                <a
                  class="nav-link dropdown-indicator label-1"
                  href="#nv-authentication"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="nv-authentication"
                >
                  <div class="d-flex align-items-center">
                    <div class="dropdown-indicator-icon-wrapper">
                      <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                    </div>
                    <span class="nav-link-icon"><span data-feather="lock"></span></span>
                    <span class="nav-link-text">Authentication</span>
                  </div>
                </a>
                <div class="parent-wrapper label-1">
                  <ul
                    class="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="nv-authentication"
                  >
                    <li class="collapsed-nav-item-title d-none">Authentication</li>

                    <li class="nav-item">
                      <router-link class="nav-link" to="/login_client">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Se connecter</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/register_client">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">S'inscrire</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/logout">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Se deconnecter</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">mot de passe oublié</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/reset_password">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Réinitialiser le mot de passe</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/authentication/simple/lock-screen.html">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Lock screen</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/authentication/simple/2FA.html">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">2FA</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- parent pages-->
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-vertical-footer">
        <button
          class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"
        >
          <span class="uil uil-left-arrow-to-left fs-8"></span>
          <span class="uil uil-arrow-from-right fs-8"></span>
          <span class="navbar-vertical-footer-text ms-2">Collapsed View</span>
        </button>
      </div>
    </nav>
    <nav class="navbar navbar-top fixed-top navbar-expand" id="navbarDefault" style="display: none">
      <div class="collapse navbar-collapse justify-content-between">
        <div class="navbar-logo">
          <button
            class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
          </button>
          <a class="navbar-brand me-1 me-sm-3" href="index-1.html">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <img src="/src/assets/DashboardC/assets/img/LOGO.jpg" alt="phoenix" width="100" />
                <h5 class="logo-text ms-2 d-none d-sm-block"></h5>
              </div>
            </div>
          </a>
        </div>

        <ul class="navbar-nav navbar-nav-icons flex-row">
          <li class="nav-item">
            <div class="theme-control-toggle fa-icon-wait px-2">
              <input
                class="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox"
                data-theme-control="phoenixTheme"
                value="dark"
                id="themeControlToggle"
              />
              <label
                class="mb-0 theme-control-toggle-label theme-control-toggle-light"
                for="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Switch theme"
                style="height: 32px; width: 32px"
              >
                <span class="icon" data-feather="moon"></span>
              </label>
              <label
                class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                for="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Switch theme"
                style="height: 32px; width: 32px"
              >
                <span class="icon" data-feather="sun"></span>
              </label>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              style="min-width: 2.25rem"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span class="d-block" style="height: 20px; width: 20px"
                ><span data-feather="bell" style="height: 20px; width: 20px"></span
              ></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
              id="navbarDropdownNotfication"
              aria-labelledby="navbarDropdownNotfication"
            >
              <div class="card position-relative border-0">
                <div class="card-header p-2">
                  <div class="d-flex justify-content-between">
                    <h5 class="text-body-emphasis mb-0">Notifications</h5>
                    <button class="btn btn-link p-0 fs-9 fw-normal" type="button">
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="scrollbar-overlay" style="height: 27rem">
                    <div
                      class="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom"
                    >
                      <div
                        class="d-flex align-items-center justify-content-between position-relative"
                      >
                        <div class="d-flex">
                          <div class="avatar avatar-m status-online me-3">
                            <img
                              class="rounded-circle"
                              src="/assets/img/team/40x40/30.webp"
                              alt=""
                            />
                          </div>
                          <div class="flex-1 me-sm-3">
                            <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                            <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                              <span class="me-1 fs-10">💬</span>
                              Mentioned you in a comment.
                              <span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"
                                >10m</span
                              >
                            </p>
                            <p class="text-body-secondary fs-9 mb-0">
                              <span class="me-1 fas fa-clock"></span>
                              <span class="fw-bold">10:41 AM</span>
                              August 7,2021
                            </p>
                          </div>
                        </div>
                        <div class="dropdown notification-dropdown">
                          <button
                            class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span class="fas fa-ellipsis-h fs-10 text-body"></span>
                          </button>
                          <div class="dropdown-menu py-2">
                            <a class="dropdown-item" href="#!">Mark as unread</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer p-0 border-top border-translucent border-0">
                  <div class="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                    <a class="fw-bolder" href="pages/notifications.html">Notification history</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link lh-1 pe-0"
              id="navbarDropdownUser"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="avatar avatar-l">
                <img class="rounded-circle" src="/assets/img/team/40x40/57.webp" alt="" />
              </div>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
              aria-labelledby="navbarDropdownUser"
            >
              <div class="card position-relative border-0">
                <div class="card-body p-0">
                  <div class="text-center pt-4 pb-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="/assets/img/team/72x72/57.webp" alt="" />
                    </div>
                    <h6 class="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                  </div>
                  <div class="mb-3 mx-3">
                    <input
                      class="form-control form-control-sm"
                      id="statusUpdateInput"
                      type="text"
                      placeholder="Update your status"
                    />
                  </div>
                </div>
                <div class="overflow-auto scrollbar" style="height: 10rem">
                  <ul class="nav d-flex flex-column mb-2 pb-1">
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="user"></span>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="pie-chart"></span>
                        Dashboard
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="lock"></span>
                        Posts &amp; Activity
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="settings"></span>
                        Settings &amp; Privacy
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="help-circle"></span>
                        Help Center
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="globe"></span>
                        Language
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer p-0 border-top border-translucent">
                  <ul class="nav d-flex flex-column my-3">
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span class="me-2 text-body align-bottom" data-feather="user-plus"></span>
                        Add another account
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div class="px-3">
                    <a class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!">
                      <span class="me-2" data-feather="log-out"></span>
                      Sign out
                    </a>
                  </div>
                  <div class="my-2 text-center fw-bold fs-10 text-body-quaternary">
                    <a class="text-body-quaternary me-1" href="#!">Privacy policy</a>
                    &bull;
                    <a class="text-body-quaternary mx-1" href="#!">Terms</a>
                    &bull;
                    <a class="text-body-quaternary ms-1" href="#!">Cookies</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="content">
      <slot />

      <footer class="footer position-absolute">
        <div class="row g-0 justify-content-between align-items-center h-100">
          <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span class="d-none d-sm-inline-block"></span>
              <span class="d-none d-sm-inline-block mx-1">|</span>
              <br class="d-sm-none" />
              2025 &copy;
              <a class="mx-1" href="https://themewagon.com">Themewagon</a>
            </p>
          </div>
          <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 text-body-tertiary text-opacity-85">v1.23.0</p>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'DashboardClient',
}
</script>
