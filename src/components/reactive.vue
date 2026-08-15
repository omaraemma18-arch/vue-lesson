<script setup>


import { ref,reactive } from 'vue';

const job = reactive({
    plateNumber:'',
    car: '',
    registration:'',
    labourCost:0,
    service:[],
    time: new Date(),
    technician:""
});
job.car=""
function reset(){
    job.plateNumber=""
    job.car=""
    job.registration=""
    job.labourCost=0
    job.service=[]
    job.time=new Date()
    job.technician=""
}


const darkMode = ref(false)

function toggleDark(){
    darkMode.value = !darkMode.value
}

const count = ref(0)
function increment(){
    count.value = count.value +1
}
</script>

<template>
<button @click="increment" class="m-4 p-4 btn btn-primary">
    you have clicked this {{ count }} number of times
</button>

<button @click="toggleDark" class="m-4 p-4 btn btn-sm btn-secondary">
     Toggle to {{ darkMode ? 'light mode' :'dark mode' }}
</button>

<form class="m-4 bg-primary p-2">
<div>
  <label>plateNumber:</label>
  <input v-model="job.plateNumber"  type="text" placeholder="UBY 474A">
</div>
<div>
  <label>Car:</label>
  <input v-model="job.car" type="text" placeholder="toyota">
</div>
<div>
  <label>labourCost:</label>
  <input v-model="job.labourCost" type="number" placeholder="20000">
</div>
<div>
  <label>service:</label>
  <input v-model="job.service" type="text" placeholder="wheel allignment">
</div>
      <div>
  <label>technician:</label>
  <input v-model="job.technician" type="text" placeholder="omara emma">
</div>  

<button class="btn btn-sm btn-primary" type="submit">submit</button>
<button @click="reset" class="btn btn-sm btn-primary" type="reset">reset</button>
  {{ job }}
</form>
</template>

<style scoped>
/* form */
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
/* form end */

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