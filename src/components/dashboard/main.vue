<script setup>
import { ref, onMounted } from 'vue'
import bayRowdata from './bayRowdata.vue'
import { RouterLink, RouterView } from 'vue-router'
import userStore from '@/stores/user.js'


const store =userStore()


// const props = defineProps({
//   user: {
//     type: Object,
//     required: true,
//   },
// })
const jobs = ref([])
const isLoading = ref(true)

onMounted(()=>{
    const backendData=[
         {
    id: 44,
    vehicleRegistrations: "UAA 123A",
    vehicleSize: "Small",
    serviceType: "Engine oil & filter change",
    technicianName: "Emma Osen",
    parts: {
      "Engine oil": "UGX 120000",
      "Filter": "UGX 30000"
    },
    labour: "UGX 150000",
    status: "Completed"
  },
  {
    id: 646,
    vehicleRegistrations: "UAA 123A",
    vehicleSize: "Small",
    serviceType: "Engine oil & filter change",
    technicianName: "Emma Osen",
    parts: {
      "Engine oil": "UGX 120000",
      "Filter": "UGX 30000"
    },
    labour: "UGX 150000",
    status: "In Progress"
  },
  {
    id: 1,
    vehicleRegistrations: "UAA 123A",
    vehicleSize: "Small",
    serviceType: "Engine oil & filter change",
    technicianName: "Emma Osen",
    parts: {
      "Engine oil": "UGX 120000",
      "Filter": "UGX 30000"
    },
    labour: "UGX 150000",
    status: "Completed"
  },
  {
    id: 45, // Fixed duplicate ID 44
    vehicleRegistrations: "KAA 123A",
    vehicleSize: "Small",
    serviceType: "filter change",
    technicianName: "Emma Osen",
    parts: {
      "Engine oil": "UGX 120000",
      "Filter": "UGX 30000"
    },
    labour: "UGX 150000",
    status: "pending"
  }
    ]
setTimeout(() => {
    jobs.value=backendData
    isLoading.value=false
},3000);
})

</script>
<template>
 <main>
    <section class="dash-hero">
         <div class="dash-tabs">
          <RouterLink to="/new-job" class="dash-tab active">New Job</RouterLink>
          <button class="dash-tab" data-tab="myBookingsPanel">My Bookings</button>
        </div>
      <div class="container">
        <span class="section-tag">My Dashboard</span>
        <div class="d-flex me-2">
          <h1 id="dashGreeting">Welcome, {{ store.user?.email }}</h1>
        </div>
        <p>Book a service or check the status of your bookings.</p>
      </div>

      <table class="table table-striped" border="1" style="width:100%; margin-top: 2rem;">
        <thead class="table-dark">
          <tr>
            <th>Vehicle</th>
            <th>Size</th>
            <th>Service</th>
            <th>Technician</th>
            <th>Parts</th>
            <th>Labour</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
           <!-- Replace line 105 in main.vue with this: -->
<tr v-if="!jobs?.length">
    <td colspan="7" class="text-center">
        No jobs found.
    </td>
</tr>
          <bay-rowdata 
            v-for="job in jobs" 
            :key="job.id" 
            :job="job"
          />
        </tbody>
      </table>  
    </section>

    <section class="dash-main">
      <div class="container">
       

  
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
          <span class="logo-text">Oyera <strong>Auto Service Bay</strong></span>
        </a>
        <p>Oyera Auto Service Bay Ltd (OAS Bay) — service and parts for heavy, small, and commercial vehicles.</p>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; 2026 Oyera Auto Service Bay Ltd (OAS Bay). All rights reserved.</p>
    </div>
  </footer>

  
<div v-if="isLoading" class="loader" >
currently loading data from the backend, please wait...
</div>


</template>
<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-weight: bold;
}
</style>