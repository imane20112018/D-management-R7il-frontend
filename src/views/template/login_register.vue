<template>
  <div class="auth-background">
    <div class="auth-container">
      <a href="/" class="btn-back-top">← Retour au site</a>
      <div class="auth-card">
        <div class="switcher">
          <button :class="{ active: isLogin }" @click="switchMode('login')">Se connecter</button>
          <button :class="{ active: !isLogin }" @click="switchMode('register')">S'inscrire</button>
        </div>

        <div class="role-switch">
          <label>
            <input type="radio" value="client" v-model="role" /> Client
          </label>
          <label>
            <input type="radio" value="transporteur" v-model="role" /> Transporteur
          </label>
        </div>

        <div v-if="isLogin">
          <h2>Connexion {{ role === 'client' ? 'Client' : 'Transporteur' }}</h2>
          <form @submit.prevent="login">
            <input type="email" v-model="loginForm.email" placeholder="Adresse e-mail" required />
            <input type="password" v-model="loginForm.password" placeholder="Mot de passe" required />
            <button type="submit">Connexion</button>
          </form>
          <p class="forgot-password"><a href="#" @click.prevent="recoverPassword">Mot de passe oublié ?</a></p>
          <p class="switch-text">Pas encore de compte ? <a href="#" @click.prevent="switchMode('register')">Créer un compte</a></p>
          <div class=""><span>ou</span></div><br>
          <div class="google-wrapper">
            <button class="google-button" @click="loginWithGoogle">
              <img src="/template/google-logo.png" alt="Google" /> Se connecter avec Google
            </button>
          </div>
        </div>

        <div v-else>
          <h2>Inscription {{ role === 'client' ? 'Client' : 'Transporteur' }}</h2>
          <form @submit.prevent="register">
            <input type="text" v-model="registerForm.name" placeholder="Nom complet" required />
            <input type="email" v-model="registerForm.email" placeholder="Adresse e-mail" required />
            <input type="password" v-model="registerForm.password" placeholder="Mot de passe" required />
            <button type="submit">Créer un compte</button>
          </form>
          <p class="switch-text">Déjà un compte ? <a href="#" @click.prevent="switchMode('login')">Se connecter</a></p>
          <div class=""><span>ou</span></div><br>
          <div class="google-wrapper">
            <button class="google-button" @click="loginWithGoogle">
              <img src="/template/google-logo.png" alt="Google" /> Se connecter avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
  data() {
    return {
      isLogin: true,
      role: 'client',
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    switchMode(mode) {
      this.isLogin = mode === 'login'
    },
    login() {
      console.log('Connexion [' + this.role + '] avec :', this.loginForm)
    },
    register() {
      console.log('Inscription [' + this.role + '] avec :', this.registerForm)
    },
    loginWithGoogle() {
      console.log('Connexion via Google pour ' + this.role)
    },
    recoverPassword() {
      alert("Lien de réinitialisation du mot de passe envoyé à : " + this.loginForm.email);
    }
  }
}
</script>

<style scoped>
.auth-background {
  background: url('/template/background.png') center center / cover no-repeat;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 2;
}

.btn-back-top {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #1a3c66;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: background 0.3s;
  z-index: 1000;
  font-size: 0.9rem;
}
.btn-back-top:hover {
  background: #f0f0f0;
}

.auth-card {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .auth-card {
    padding: 1.25rem;
    border-radius: 0.75rem;
  }
  .btn-back-top {
    font-size: 0.85rem;
    padding: 0.4rem 0.75rem;
  }
}

.switcher {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.switcher button {
  flex: 1;
  padding: 0.75rem;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: 0.3s;
}
.switcher button.active {
  border-color: #1a3c66;
  color: #1a3c66;
}

.role-switch {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
button[type="submit"] {
  background-color: #1a3c66;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.forgot-password {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}
.forgot-password a {
  color: #1a3c66;
  text-decoration: underline;
  cursor: pointer;
}

.switch-text {
  margin-top: 1rem;
  font-size: 0.9rem;
}
.switch-text a {
  color: #1a3c66;
  text-decoration: underline;
  cursor: pointer;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  position: relative;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #ddd;
}
.divider span {
  position: relative;
  z-index: 1;
  padding: 0 10px;
  background: #fff;
}

.google-wrapper {
  display: flex;
  justify-content: center;
}

.google-button {
  background: white;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  width: 100%;
  max-width: 320px;
}
.google-button img {
  height: 20px;
  width: 20px;
}
</style>
