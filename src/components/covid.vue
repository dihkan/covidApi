<template>
  <div>
    <h1>Covid Listeleri</h1>
    <hr />
    <input
      type="text"
      class="form-control"
      v-model="state.country"
      @keydown.enter="search"
    />
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="(list, i) in state.liste[0]"
        :key="i"
      >
        <div style="width:35%">{{ list.country }}</div>
        <div>Death Count : {{ list.deaths }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const state = reactive({
  liste: [],
  country: ""
});

onMounted(() => {
  getCovidList();
});
const getCovidList = async () => {
  const options = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
    headers: {
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      "X-RapidAPI-Key": "3997446caamshe09775e4f31257fp178fc0jsn504bfe0341b2"
    }
  };
  await axios
    .request(options)
    .then(response => {
      state.liste.push(response.data.data.covid19Stats);
      console.log(state.liste);

      // console.log(response.data.data.covid19Stats);
    })
    .catch(error => {
      console.error(error);
    });
};
const search = async e => {};
</script>
