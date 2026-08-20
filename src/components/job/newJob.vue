<script setup>
import { ref, reactive, watch } from 'vue'

const job = reactive({
  plateNumber: '',
  car: '',
  registration: '',
  labourCost: '',
  service: [],
  time: new Date(),
  technician: ''
})

const error = ref({
    valid: false,
  plateNumber: '',
  car: '',
  registration: '',
  labourCost: '',
  service: '',
  time: '',
  technician: ''
})

watch(
  job,
  (newData) => {
    // Validate Plate Number
    if(/^[A-Z]{3}\s\d{3}[A-Z]$/.test(job.plateNumber)===false){
      error.value.plateNumber = 'The plate has to be in the formate UBB 123A'
    } else {
      error.value.plateNumber = ''
    }


    // Validate Labour Cost (Handling input strings converted to numbers)
    const costNum = Number(newData.labourCost)
    if (newData.labourCost === '' || isNaN(costNum) || costNum <= 0) {
      error.value.labourCost = 'Labour cost must be a valid positive number'
    }else if(newData.labourCost < 20000){
      error.value.labourCost = 'Labour cost must be at least UGX 20,000'
    }
    else {
      error.value.labourCost = ''
      error.value.valid = true
    }
  },
  { deep: true }
)
</script>

<template>
  <h1>New Job</h1>
  <div class="dash-panel active" id="bookPanel">
    <div class="booking-form-card">
      <form id="bookingForm" @submit.prevent novalidate>
        
        <!-- Plate Number -->
        <label>
          <span>Plate Number</span>
          <input v-model="job.plateNumber" type="text" id="bkPlateNumber" placeholder="e.g. UBK 123A">
          <span class="text-danger">{{ error.plateNumber }}</span>
        </label>

        <!-- Vehicle Class -->
        <label>
          <span>Vehicle class</span>
          <select v-model="job.car" id="bkVehicleClass">
            <option value="">Select a vehicle class</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Heavy Duty">Heavy Duty</option>
          </select>
        </label>

        <!-- Registration -->
        <label>
          <span>Registration</span>
          <input v-model="job.registration" type="text" id="bkRegistration" placeholder="e.g. UAA 123A">
        </label>

        <!-- Labour Cost -->
        <label>
          <span>Labour Cost</span>
          <input v-model="job.labourCost" type="number" id="bkLabourCost" placeholder="e.g. 20000">
          <span class="text-danger">{{ error.labourCost }}</span>
        </label>

        <!-- Service Needed -->
        <label>
          <span>Service Needed</span>
          <select v-model="job.service" id="bkService">
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
        </label>

        <button :disabled="!error.valid" type="submit" class="btn btn-primary btn-full">Request Booking</button>
      </form>
    </div>
  </div>

  <pre>{{ job }}</pre>
</template>

<style scoped>
.text-danger {
  color: #dc3545;
  font-size: 0.875rem;
  display: block;
  margin-top: 0.25rem;
}
</style>