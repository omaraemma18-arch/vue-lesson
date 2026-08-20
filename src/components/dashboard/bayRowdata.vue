<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  job: {
    type: Object,
    required: false,
    default: () => ({}),
  },
})
</script>

<template>
  <tr>
    <td class="fw-bold">{{ job?.vehicleRegistrations }}</td>
    <td>
      <span class="badge bg-outline-dark border text-dark badge-vehicle">
        {{ job?.vehicleSize }}
      </span>
    </td>
    <td>{{ job?.serviceType }}</td> 
    <td>{{ job?.technicianName }}</td>
    <td>
      <small v-for="(part, key) in job?.parts" :key="key" class="d-block">
        {{ key }}: {{ part }}
      </small>
    </td>
    <td>{{ job?.labour }}</td>
    <td><span v-bind:class="{'bg-warning': job?.status === 'In Progress', 'bg-success':job?.status === 'Completed'}" class="badge text-dark">{{ job?.status }}</span>
       <RouterLink class="btn btn-sm btn-success mx-2" :to="`/job/${job?.id}`">see more</RouterLink>
    </td>
  </tr>

</template>

<style scoped> 
</style>