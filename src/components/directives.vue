<script setup>

import {ref,reactive} from 'vue'
import ReactiveComponet from './reactive.vue/index.js'

const userRole = ref('admin')
const titleId = ref("1f23")
const products = reactive([
    {id:"sgsd",productName:"brake fluid",price:8000,quatity:10},
    {id:"nsd23",productName:"brake pads",price:30000,quatity:11},
    {id:"dsfgs",productName:"engine oil",price:50000,quatity:12},
    {id:"dsfgs",productName:"gearbox oil",price:40000,quatity:13},
    {id:"kdfwee",productName:"greasing",price:10000,quatity:14},
])
function addItem(){
    const id = new Date().toDateString()
    products.push({id:"dsfgs",productName:"wheel alignment",price:25000,quatity:15})
}

setTimeout(()=>{
    titleId.value = 'gfsd23'
},5000)

function toast(){
alert('toasted')
}
</script>

<template>
<div class="m-4">
    <h1 v-bind:id="titleId">
        list of available products in the shop
    </h1>
    <table v-if="userRole=='admin'" border="1" class="table table-striped">
        <tr>
            <th>
                #
            </th>
            <th>
                product names
            </th>
            <th>
                product price
            </th>
            <th>
                product quatity
            </th>
        </tr>
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }}</td>
            <td v-if="product.quatity<11" class="text-danger">{{ product.quatity }}</td>
            <td v-else-if="product.quatity>=11 && product.quatity<=12" class="text-warning">{{ product.quatity }}</td>
            <td v-else class="text-success">{{ product.quatity }}</td>
        </tr>
    </table>

    <!-- <reactive-componet v-for="(card,index) in 5" :key="index" ></reactive-componet> -->
<!-- 
    <div v-for="(value,key,index) in products[0]" :key="index">
        <p>{{ key }} : {{ value }}</p> -->

    <!-- </div> -->
    <button v-on:click="toast" class="btn btn-primary">reset</button>
    <button v-on:click="addItem" class="btn btn-primary">add item</button>
</div>

</template>

<style scoped>
table{
    width: 100%;
    border-collapse: collapse;
}
th,td{
    padding: 1rem;
    text-align: left;
}
</style> 
    
