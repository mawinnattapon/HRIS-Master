<script setup>
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
import axios from 'axios';
var dataS = ref('');
onMounted(() => {
	axios.get(`http://localhost:3001/blood-group`).then(res => {
    dataS.value = res.data
	})
  console.log("######################")
  console.log(dataS)
  console.log("######################")
})

const Del = (bloodId) => {
  	axios.delete(`http://localhost:3001/blood-group/${bloodId}`).then(res => {
      axios.get(`http://localhost:3001/blood-group`).then(res => {
        dataS.value = res.data
	    })
    alert("Delete Success")
    
	})
  
}
         
</script>
<template>
  <!--begin::Content-->
  {{data}}
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Content container-->
      <div class="container-fluid">
      <div class="mb-3">
        <a class="btn btn-primary" href="#" role="button" ><nuxt-link to="/masters/add">Add+</nuxt-link></a> 
      </div>
      <h1>Blood Group Setting</h1>
      <div class="table-responsive" >
        <table
          class="table table-primary">
          <thead>
            <tr>
              <th scope="col">Blood Group (Th)</th>
              <th scope="col">Blood Group (En)</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(item, index) in dataS" :key="index">
              <td scope="row">{{item.bloodTh}}</td>
              <td>{{item.bloodEn}}</td>
              <td>
                <span v-if="item.isActive === true">ใช้งาน</span>
                <span v-else>ไม่ใช้งาน</span>
              </td>
              <td>
                <a class="btn btn-warning" role="button"><NuxtLink :to="`/masters/edit-${item.bloodId}`">edit</NuxtLink></a>       
                <button type="button" class="btn btn-danger" @click="Del(item.bloodId)"> Del</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      </div>
    <!--end::Content container-->
  </div>
  <!--end::Content-->
</template>

<script setup>
</script>

<style>
</style>