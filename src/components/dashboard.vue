<script setup>
import sidebar from './sidebar.vue'
</script>

<template>

  <header class="header" id="header">
   <sidebar></sidebar>

  </header>

  <main>
    <section class="dash-hero">
      <div class="container">
        <span class="section-tag">My Dashboard</span>
        <h1 id="dashGreeting">Welcome</h1>
        <p>Book a service or check the status of your bookings.</p>
      </div>
    </section>

    <section class="dash-main">
      <div class="container">

        <div class="dash-tabs">
          <button class="dash-tab active" data-tab="bookPanel">Book a Service</button>
          <button class="dash-tab" data-tab="myBookingsPanel">My Bookings</button>
        </div>

        <!-- BOOK A SERVICE PANEL -->
        <div class="dash-panel active" id="bookPanel">
          <div class="booking-form-card">
            <form id="bookingForm" novalidate>
              <label>
                <span>Vehicle (type, make &amp; model)</span>
                <input type="text" id="bkVehicle" required placeholder="e.g. Commercial truck / Toyota Hiace">
                <span class="field-error" id="bkVehicleError"></span>
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" id="bkPhone" required placeholder="07XX XXX XXX">
                <span class="field-error" id="bkPhoneError"></span>
              </label>
              <label>
                <span>Service Needed</span>
                <select id="bkService" required>
                  <option value="">Select a service</option>
                  <option value="Engine oil & filter change">Engine oil &amp; filter change</option>
                  <option value="Gearbox oil & filter change">Gearbox oil &amp; filter change</option>
                  <option value="Brake fluid replacement">Brake fluid replacement</option>
                  <option value="Brake pads change">Brake pads change</option>
                  <option value="Greasing / minor repairs">Greasing / minor repairs</option>
                  <option value="Wheel alignment">Wheel alignment</option>
                  <option value="Wheel balancing">Wheel balancing</option>
                  <option value="Other">Other</option>
                </select>
                <span class="field-error" id="bkServiceError"></span>
              </label>
              <label>
                <span>Notes</span>
                <textarea id="bkMessage" rows="4" placeholder="Describe the issue or preferred appointment time..."></textarea>
              </label>
              <button type="submit" class="btn btn-primary btn-full">Request Booking</button>
              <p class="dash-note" id="bookingNote" style="text-align:center; min-height:1.3em;"></p>
            </form>
          </div>

        </div>

        <!-- MY BOOKINGS PANEL -->
        <div class="dash-panel" id="myBookingsPanel">
          <div class="bookings-table-wrap">
            <table class="bookings-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Service</th>
                  <th>Notes</th>
                  <th>Requested</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="myBookingsBody"></tbody>
            </table>
          </div>
          <div class="dash-empty" id="myBookingsEmpty" style="display:none;">You haven't booked a service yet.</div>
        </div>

      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">
          <!-- <img src="/images/oyera-logo.jpg" alt="Oyera Auto Service Bay Ltd logo" class="logo-icon-img"> -->
          <span class="logo-text">Oyera <strong>Auto Service Bay</strong></span>
        </a>
        <p>Oyera Auto Service Bay Ltd (OAS Bay) — service and parts for heavy, small, and commercial vehicles.</p>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; 2026 Oyera Auto Service Bay Ltd (OAS Bay). All rights reserved.</p>
    </div>
  </footer>


</template>

<style scoped>
</style>