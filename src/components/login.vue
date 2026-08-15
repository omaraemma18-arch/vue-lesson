

<script setup>
import { reactive } from 'vue';
import Sidebar from './sidebar.vue';


const form = reactive({
  email:"",
  password:""
})
const emit = defineEmits(['loginSuccess'])

function login(){
  console.log(form)

  if(form.email==="tech@gmail.com" && form.password==="123456"){
    alert('login successful')
    emit('loginSuccess',{isLoggedIn:"tech@gmail.com",status:true})
    //emit an event to the parent component to indicate successful login
    //go ahead to log them in
  }else{
    //show an error message 
    alert('wrong credations,please try again')
  }
}

</script>

<template>
  <header class="header" id="header">
  <Sidebar></Sidebar>
  </header>

  <main>
    <div class="auth-page">
      <div class="auth-card">
        <span class="section-tag">Welcome Back</span>
        <h1>Log In</h1>
        <p class="auth-sub">Technicians, admins, and customers all sign in here.</p>

        <div class="auth-error" id="loginError"></div>

        <form action="#" id="loginForm">
          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" id="loginEmail" required placeholder="you@email.com">
          </label>
          <label>
            <span>Password</span>
            <input v-model="form.password" type="password" id="loginPassword" required placeholder="••••••••">
          </label>
          <button @click="login" type="submit" class="btn btn-primary btn-full">Log In</button>
        </form>

        

        <p class="auth-switch">Don't have an account? <a href="/register">Sign up as a customer</a></p>
      </div>
    </div>
  </main>
  <!-- Removed commented-out <script> tags to prevent Vite compilation errors -->
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
  display: none;
}

.auth-error.visible {
  display: block;
}

.auth-demo-box {
  margin-top: 1.75rem;
  padding: 1rem 1.1rem;
  background: var(--color-surface);
  border-radius: 8px;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.auth-demo-box strong {
  color: var(--color-text);
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

/* Auth-aware nav slot */
.nav-user-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.nav-user-pill strong {
  color: var(--color-text);
}

.nav-logout-link {
  color: var(--color-text-muted) !important;
}

.nav-logout-link:hover {
  color: #f87171 !important;
}

</style>
