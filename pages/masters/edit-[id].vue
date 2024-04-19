<script setup>
 const route = useRoute()
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
import axios from 'axios';
let bloodId = route.params.id;
const bloodGroupData = ref('');
onMounted(() => {
	  axios.get(`http://localhost:3001/blood-group/${bloodId}`).then(res => {
		   bloodGroupData.value = res.data;
	})
}) 
const getBloodGroupData = () => {
  return bloodGroupData.value;
};

var dataSend = ref(bloodGroupData);
const Update = () => {
  let data = dataSend.value;
  axios.patch(`http://localhost:3001/blood-group/${bloodId}`, data).then(function (response) {
       alert("Update Success!!")
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
</script>
<template>
<hr>

  <!--begin::Content-->
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Content container-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 mb-3">
              <label for="" class="form-label">Blood Group (Th)</label>
              <input type="text" name="bloodEn" id="bloodEn" v-model="dataSend.bloodTh" class="form-control" placeholder=""/>
              <small id="helpId" class="text-muted">Help text</small>
        </div>
         <div class="col-md-6 mb-3">
              <label for="" class="form-label">Blood Group (En)</label>
              <input type="text" name="bloodEn" id="bloodEn" v-model="dataSend.bloodEn" class="form-control" placeholder=""/>
              <small id="helpId" class="text-muted">Help text</small>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="dataSend.isActive" name="isActive[]" id="isActive" value="true"/>
            <label class="form-check-label" for="">True</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="dataSend.isActive" name="isActive[]" id="isActive" value="false"/>
            <label class="form-check-label" for="">False</label>
          </div>
              
        </div>
         <div class="col-md-6 mb-3">

        </div>
      </div>
      <div class="row">
        <button type="button" class="btn btn-primary" @click="Update">Update</button>
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