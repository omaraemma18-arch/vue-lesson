<script setup>
import { reactive, computed } from 'vue'

// Preset Service Prices (in UGX)
const availableServices = [
  { name: 'ENGINE OIL & FILTER', price: 50000 },
  { name: 'GEARBOX OIL & FILTER', price: 40000 },
  { name: 'BRAKE FLUID', price: 15000 },
  { name: 'BRAKE PADS', price: 30000 },
  { name: 'GREASING', price: 10000 },
  { name: 'WHEEL ALIGNMENT', price: 25000 },
  { name: 'WHEEL BALANCING', price: 20000 }
]

// Form State
const formData = reactive({
  plateNumber: '',
  vehicleClass: 'Small',
  ownerName: '',
  ownerContact: '',
  bay: 'Bay 1',
  services: [],
  labour: 20000
})

// Calculate sum of selected services
const servicesTotal = computed(() => {
  return formData.services.reduce((total, selectedName) => {
    const found = availableServices.find(s => s.name === selectedName)
    return total + (found ? found.price : 0)
  }, 0)
})

// Total = Services + Labour
const grandTotal = computed(() => {
  return servicesTotal.value + formData.labour
})

// Rule Validation Count (0 to 4)
const passingRules = computed(() => {
  let passed = 0
  if (formData.plateNumber.trim().length > 0) passed++
  if (formData.ownerName.trim().length > 0) passed++
  if (formData.ownerContact.trim().length === 10) passed++
  if (formData.services.length > 0) passed++
  return passed
})

// Helper Utility for Formatting Currency
const formatCurrency = (val) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    maximumFractionDigits: 0
  }).format(val)
}
</script>


<template>
  <div class="jobcard-container">
    <div class="card header-card">
      <h2>LIVE COMPONENT JOBCARD.VUE</h2>
    </div>

    <div class="jobcard-grid">
      <!-- FORM INPUT SECTION -->
      <div class="card form-section">
        <!-- Plate Number -->
        <div class="form-group">
          <label>PLATE NUMBER</label>
          <input
            v-model="formData.plateNumber"
            type="text"
            placeholder="e.g. UBK 123A"
          />
        </div>

        <!-- Owner Name -->
        <div class="form-group">
          <label>OWNER NAME</label>
          <input
            v-model="formData.ownerName"
            type="text"
            placeholder="e.g. Achen Grace"
          />
        </div>

        <!-- Vehicle Class -->
        <div class="form-group">
          <label>VEHICLE CLASS</label>
          <select v-model="formData.vehicleClass">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Heavy Duty">Heavy Duty</option>
          </select>
        </div>

        <!-- Contact -->
        <div class="form-group">
          <label>
            CONTACT 
            <span class="sub-label">
              ({{ formData.ownerContact.length }}/10 digits)
            </span>
          </label>
          <input
            v-model="formData.ownerContact"
            type="text"
            maxlength="10"
            placeholder="0772000000"
          />
        </div>

        <!-- Bay Selection -->
        <div class="form-group">
          <label>BAY</label>
          <select v-model="formData.bay">
            <option value="Bay 1">Bay 1</option>
            <option value="Bay 2">Bay 2</option>
            <option value="Bay 3">Bay 3</option>
            <option value="Bay 4">Bay 4</option>
          </select>
        </div>

        <!-- Services Checkboxes -->
        <div class="form-group">
          <label>SERVICES — ONE OR MORE</label>
          <div class="services-grid">
            <label
              v-for="service in availableServices"
              :key="service.name"
              class="checkbox-label"
              :class="{ active: formData.services.includes(service.name) }"
            >
              <input
                type="checkbox"
                :value="service.name"
                v-model="formData.services"
              />
              <span>{{ service.name }}</span>
            </label>
          </div>
        </div>

        <!-- Fixed Labour -->
        <div class="form-group">
          <label>LABOUR (FIXED, READ-ONLY)</label>
          <input
            type="text"
            :value="formatCurrency(formData.labour)"
            readonly
            class="readonly-input"
          />
        </div>
      </div>

      <!-- LIVE SUMMARY & JSON OUTPUT SECTION -->
      <div class="card summary-section">
        <!-- Validation Status -->
        <div class="status-banner" :class="{ pass: passingRules === 4 }">
          <h3>J O B C A R D · {{ passingRules }} / 4 R U L E S P A S S I N G</h3>
        </div>

        <!-- Dynamic Description Line -->
        <p class="summary-line">
          Plate ({{ formData.vehicleClass || 'None' }}) into {{ formData.bay || 'Unassigned' }} for {{ formData.services.length }} service(s).
        </p>

        <!-- Pricing Breakout -->
        <div class="pricing-breakdown">
          <div class="price-row">
            <span>Services</span>
            <span>{{ formatCurrency(servicesTotal) }}</span>
          </div>
          <div class="price-row">
            <span>Labour</span>
            <span>{{ formatCurrency(formData.labour) }}</span>
          </div>
          <hr />
          <div class="price-row total-row">
            <span>Total</span>
            <span>{{ formatCurrency(grandTotal) }}</span>
          </div>
        </div>

        <!-- Reactive JSON Output -->
        <div class="json-output">
          <h4>JSON Output</h4>
          <pre><code>{{ JSON.stringify(formData, null, 2) }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.jobcard-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

.header-card {
  text-align: center;
  background: #1e293b;
  color: #ffffff;
  padding: 12px 20px;
}

.header-card h2 {
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.jobcard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .jobcard-grid {
    grid-template-columns: 1fr;
  }
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: #475569;
}

.sub-label {
  font-weight: normal;
  color: #64748b;
  font-size: 0.75rem;
}

input[type="text"], select {
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus, select:focus {
  border-color: #2563eb;
}

.readonly-input {
  background-color: #f1f5f9;
  color: #64748b;
  cursor: not-allowed;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}

.checkbox-label.active {
  background-color: #eff6ff;
  border-color: #2563eb;
  color: #1d4ed8;
  font-weight: 600;
}

.status-banner {
  background-color: #fef2f2;
  border-left: 4px solid #ef4444;
  padding: 10px 14px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.status-banner.pass {
  background-color: #f0fdf4;
  border-left-color: #22c55e;
}

.status-banner h3 {
  margin: 0;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.summary-line {
  font-size: 0.95rem;
  color: #334155;
  margin-bottom: 20px;
}

.pricing-breakdown {
  background: #f8fafc;
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.total-row {
  font-weight: bold;
  font-size: 1.1rem;
  color: #0f172a;
  margin-top: 8px;
  margin-bottom: 0;
}

.json-output {
  background: #0f172a;
  color: #38bdf8;
  padding: 12px;
  border-radius: 6px;
}

.json-output h4 {
  margin: 0 0 8px 0;
  color: #94a3b8;
  font-size: 0.8rem;
  text-transform: uppercase;
}

pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  white-space: pre-wrap;
}
</style>