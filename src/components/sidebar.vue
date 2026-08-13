<script setup>

</script>

<template>
 <div class="text-primary">
  sidebar
 </div>
 <nav class="nav container">
      <a href="/" class="logo">
        <!-- <img src="/images/oyera-logo.jpg" alt="Oyera Auto Service Bay Ltd logo" class="logo-icon-img"> -->
        <span class="logo-text">Oyera <strong>Auto Service Bay</strong></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li id="authNavSlot"></li>
      </ul>
    </nav>
</template>

<style scoped>


.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.25rem;
  letter-spacing: 0.02em;
}

.logo-icon-img {
  width: 2.75rem;
  height: 2.75rem;
  object-fit: contain;
  background: #fff;
  border-radius: 10px;
  padding: 3px;
  flex-shrink: 0;
}

.logo-text strong {
  color: var(--color-accent);
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--color-text);
}

.nav-cta {
  background: var(--color-accent) !important;
  color: var(--color-bg) !important;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600 !important;
}

.nav-cta:hover {
  background: var(--color-accent-hover) !important;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: var(--transition);
}

</style>
