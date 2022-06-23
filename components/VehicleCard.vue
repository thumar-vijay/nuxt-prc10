<template>
  <!-- <div class="List_home">

    <div class="card main_container" style="width: 22rem; min-height: 450px; max-height: 450px;">

      <router-link :to="{ name: 'gallery', params: { id: vehicleData.id } }">
        <img class="card-img-top" :src="vehicleData.image" alt="Car image">
      </router-link>

      <div class="card-body h-20">
        <h5 class="card-title">
          <b><i>{{ vehicleData.name }}</i></b>
        </h5><br>
        <p class="card-text"> {{ vehicleData.details }} </p>
      </div>

      <div class="card-footer text-muted">
        <button v-if="vehicleData && vehicleData.price" class="btn btn-secondary mx-2 w-25">
          <i class="fa-solid fa-circle-info"></i>
        </button>

        <button v-else disabled class="disable_button">Available soon!</button>

        <button type="button" class="btn bg-green-300 hover:bg-green-400 text-gray-green font-bold  px-4 rounded">
          edit
          <i class="fa-solid blue fa-pen-clip"></i>
        </button>

        <button class="btn btn-danger mx-2 w-25">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

    </div>

  </div> -->

  <div class="List_home flex">
    <div class="max-w-sm rounded overflow-hidden shadow-lg main_container">
      <img class="w-full" :src="vehicleData.image" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ vehicleData.name }}</div>
        <p class="text-gray-700 text-base">
          {{ vehicleData.details }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button type="button" class="btn bg-green-300 hover:bg-green-400 text-gray-green font-bold mx-4 px-6 rounded">
          <i class="fa-solid blue fa-pen-clip"></i>
        </button>
        <button type="button" class="btn bg-red-300 hover:bg-red-400 text-gray-red font-bold mx-4 px-6 rounded">
          <i class="fa-solid fa-trash-can"></i>

        </button>
        <button type="button"
          class="btn bg-yellow-300 hover:bg-yellow-400 text-gray-yellow font-bold mx-4 px-6 rounded">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vehicleData: Object,
  },
};
</script>

<style scoped>
.List_home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
}

.List_home:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
}

.main_container {
  width: 22rem;
  min-height: 450px;
  max-height: 450px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

img {
  max-width: 360px;
  max-height: 240px;
}
</style>
