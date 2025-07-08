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
                    <span class="nav-link-icon"
                      ><span data-feather="pie-chart"></span
                    ></span>

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
                      <span
                        class="fas fa-caret-right dropdown-indicator-icon"
                      ></span>
                    </div>
                    <span class="nav-link-icon"
                      ><span data-feather="lock"></span
                    ></span>
                    <span class="nav-link-text">Authentication</span>
                  </div>
                </a>
                <div class="parent-wrapper label-1">
                  <ul
                    class="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="nv-authentication"
                  >
                    <li class="collapsed-nav-item-title d-none">
                      Authentication
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/sign-in.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Sign in</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/sign-up.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Sign up</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/sign-out.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Sign out</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/forgot-password.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Forgot password</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/reset-password.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Reset password</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/lock-screen.html"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">Lock screen</span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="pages/authentication/simple/2FA.html"
                      >
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
    <nav
      class="navbar navbar-top fixed-top navbar-expand"
      id="navbarDefault"
      style="display: none"
    >
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
            <span class="navbar-toggle-icon"
              ><span class="toggle-line"></span
            ></span>
          </button>
          <a class="navbar-brand me-1 me-sm-3" href="index-1.html">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/img/icons/logo.png"
                  alt="phoenix"
                  width="27"
                />
                <h5 class="logo-text ms-2 d-none d-sm-block">phoenix</h5>
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
                ><span
                  data-feather="bell"
                  style="height: 20px; width: 20px"
                ></span
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
                    <button
                      class="btn btn-link p-0 fs-9 fw-normal"
                      type="button"
                    >
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
                            <h4 class="fs-9 text-body-emphasis">
                              Jessie Samson
                            </h4>
                            <p
                              class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"
                            >
                              <span class="me-1 fs-10">💬</span>
                              Mentioned you in a comment.
                              <span
                                class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"
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
                            <span
                              class="fas fa-ellipsis-h fs-10 text-body"
                            ></span>
                          </button>
                          <div class="dropdown-menu py-2">
                            <a class="dropdown-item" href="#!"
                              >Mark as unread</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card-footer p-0 border-top border-translucent border-0"
                >
                  <div
                    class="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"
                  >
                    <a class="fw-bolder" href="pages/notifications.html"
                      >Notification history</a
                    >
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
                <img
                  class="rounded-circle"
                  src="/assets/img/team/40x40/57.webp"
                  alt=""
                />
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
                      <img
                        class="rounded-circle"
                        src="/assets/img/team/72x72/57.webp"
                        alt=""
                      />
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
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="user"
                        ></span>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="pie-chart"
                        ></span>
                        Dashboard
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="lock"
                        ></span>
                        Posts &amp; Activity
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="settings"
                        ></span>
                        Settings &amp; Privacy
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="help-circle"
                        ></span>
                        Help Center
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="globe"
                        ></span>
                        Language
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer p-0 border-top border-translucent">
                  <ul class="nav d-flex flex-column my-3">
                    <li class="nav-item">
                      <a class="nav-link px-3 d-block" href="#!">
                        <span
                          class="me-2 text-body align-bottom"
                          data-feather="user-plus"
                        ></span>
                        Add another account
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div class="px-3">
                    <a
                      class="btn btn-phoenix-secondary d-flex flex-center w-100"
                      href="#!"
                    >
                      <span class="me-2" data-feather="log-out"></span>
                      Sign out
                    </a>
                  </div>
                  <div
                    class="my-2 text-center fw-bold fs-10 text-body-quaternary"
                  >
                    <a class="text-body-quaternary me-1" href="#!"
                      >Privacy policy</a
                    >
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
      <router-view />

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

    <div class="support-chat-container">
      <div class="container-fluid support-chat">
        <div class="card bg-body-emphasis">
          <div
            class="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent"
          >
            <h5 class="mb-0 d-flex align-items-center gap-2">
              Demo widget
              <span class="fa-solid fa-circle text-success fs-11"></span>
            </h5>
            <div class="btn-reveal-trigger">
              <button
                class="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                type="button"
                id="support-chat-dropdown"
                data-bs-toggle="dropdown"
                data-boundary="window"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-reference="parent"
              >
                <span class="fas fa-ellipsis-h text-body"></span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-end py-2"
                aria-labelledby="support-chat-dropdown"
              >
                <a class="dropdown-item" href="#!">Request a callback</a>
                <a class="dropdown-item" href="#!">Search in chat</a>
                <a class="dropdown-item" href="#!">Show history</a>
                <a class="dropdown-item" href="#!">Report to Admin</a>
                <a class="dropdown-item btn-support-chat" href="#!"
                  >Close Support</a
                >
              </div>
            </div>
          </div>
          <div class="card-body chat p-0">
            <div class="d-flex flex-column-reverse scrollbar h-100 p-3">
              <div class="text-end mt-6">
                <a
                  class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p class="mb-0 fw-semibold fs-9">
                    I need help with something
                  </p>
                  <span
                    class="fa-solid fa-paper-plane text-primary fs-9 ms-3"
                  ></span>
                </a>
                <a
                  class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p class="mb-0 fw-semibold fs-9">
                    I can’t reorder a product I previously ordered
                  </p>
                  <span
                    class="fa-solid fa-paper-plane text-primary fs-9 ms-3"
                  ></span>
                </a>
                <a
                  class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p class="mb-0 fw-semibold fs-9">How do I place an order?</p>
                  <span
                    class="fa-solid fa-paper-plane text-primary fs-9 ms-3"
                  ></span>
                </a>
                <a
                  class="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p class="mb-0 fw-semibold fs-9">
                    My payment method not working
                  </p>
                  <span
                    class="fa-solid fa-paper-plane text-primary fs-9 ms-3"
                  ></span>
                </a>
              </div>
              <div class="text-center mt-auto">
                <div class="avatar avatar-3xl status-online">
                  <img
                    class="rounded-circle border border-3 border-light-subtle"
                    src="/assets/img/team/30.webp"
                    alt=""
                  />
                </div>
                <h5 class="mt-2 mb-3">Eric</h5>
                <p class="text-center text-body-emphasis mb-0">
                  Ask us anything – we’ll get back to you here or by email
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div
            class="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3"
          >
            <div
              class="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4"
            >
              <input
                class="form-control outline-none border-0 flex-1 fs-9 px-0"
                type="text"
                placeholder="Write message"
              />
              <label
                class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                for="supportChatPhotos"
                ><span class="fa-solid fa-image"></span
              ></label>
              <input
                class="d-none"
                type="file"
                accept="image/*"
                id="supportChatPhotos"
              />
              <label
                class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                for="supportChatAttachment"
                ><span class="fa-solid fa-paperclip"></span
              ></label>
              <input class="d-none" type="file" id="supportChatAttachment" />
            </div>
            <button class="btn p-0 border-0 send-btn">
              <span class="fa-solid fa-paper-plane fs-9"></span>
            </button>
          </div>
        </div>
      </div>
      <button class="btn btn-support-chat p-0 border border-translucent">
        <span class="fs-8 btn-text text-primary text-nowrap">Chat demo</span>
        <span
          class="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative"
        >
          <span class="ping-icon-bg"></span>
          <span class="fa-solid fa-circle ping-icon"></span>
        </span>
        <span class="fa-solid fa-headset text-primary fs-8 d-sm-none"></span>
        <span class="fa-solid fa-chevron-down text-primary fs-7"></span>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'DashboardClient',
}
</script>

