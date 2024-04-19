<script setup>
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
import axios from 'axios';
var dataSend = ref({'bloodTh':'','bloodEn': '','isActive':''});
onMounted(() => {
	//   axios.get(`http://localhost:3001/blood-group`).then(res => {
	// 	console.log(JSON.stringify(res));
	// })
})
         
const Created = () => {
  let data = dataSend.value;
  axios.post('http://localhost:3001/blood-group', data).then(function (response) {
       alert("Create Success!!")
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
</script>
<template>
  <!--begin::Content-->
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Content container-->
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
        <button type="button" class="btn btn-primary" @click="Created">Save</button>
      </div>
    <!--end::Content container-->
  </div>
  <!--end::Content-->
</template>

<script setup>
</script>

<style>
</style>