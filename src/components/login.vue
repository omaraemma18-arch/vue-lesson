<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import userStore from '@/stores/user' // Fixed import

const router = useRouter()
const store = userStore()

const form = reactive({
  userrole: 'technician',
  email: '',
  password: ''
})

const error = ref('')
const isLoading = ref(false)

function login() {
  error.value = ''
  isLoading.value = true
  try {
    if (form.email === 'tech@gmail.com' && form.password === '123456') {
      store.setUser({
        email: form.email,
        role: form.userrole
      })
      alert('Login successful')
      router.push('/')
    } else {
      error.value = 'Wrong credentials, please try again.'
    }
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <header class="header" id="header"></header>

  <main>
    <div class="auth-page">
      <div class="auth-card">
        <span class="section-tag">Welcome Back</span>
        <h1>Log In</h1>
        <p class="auth-sub">Technicians, admins, and customers all sign in here.</p>

        <!-- Reactive Error Display -->
        <div v-if="error" class="auth-error visible">
          {{ error }}
        </div>

        <!-- Prevent form reload; submit handles triggering login() -->
        <form @submit.prevent="login" id="loginForm">
          <label>
            <span>Role</span>
            <select v-model="form.userrole" required>
              <option value="technician">Technician</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" id="loginEmail" required placeholder="you@email.com">
          </label>
          <label>
            <span>Password</span>
            <input v-model="form.password" type="password" id="loginPassword" required placeholder="••••••••">
          </label>
          <!-- Removed extra @click binding -->
          <button :disabled="isLoading" type="submit" class="btn btn-primary btn-full">
            {{ isLoading ? 'Logging in...' : 'Log In' }}
          </button>
        </form>

        <p class="auth-switch">Don't have an account? <router-link to="/register">Sign up as a customer</router-link></p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem 4rem;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}

.auth-card .section-tag {
  display: block;
  margin-bottom: 0.5rem;
}

.auth-card h1 {
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
}

.auth-card > p.auth-sub {
  color: var(--color-text-muted);
  font-size: 0.92rem;
  margin-bottom: 1.75rem;
}

.auth-card label {
  display: block;
  margin-bottom: 1.1rem;
}

.auth-card label span {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: 0.4rem;
}

.auth-card input,
.auth-card select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text);
}

.auth-card input:focus,
.auth-card select:focus {
  outline: none;
  border-color: var(--color-accent);
}

.auth-error {
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: #f87171;
  font-size: 0.88rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
}

.auth-switch {
  text-align: center;
  margin-top: 1.75rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.auth-switch a {
  color: var(--color-accent);
  font-weight: 600;
}

.auth-switch a:hover {
  color: var(--color-accent-hover);
}
</style>