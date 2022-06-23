<template>
    <div>
        <b><i><h3>This is the gallery page.</h3></i></b>
        <hr> <!-- Not "hr hr" This is the horizontal line -->
        <div class="flex flex-wrap">
            <div v-show="true" v-for="(car, index) in carsDetails" :key="car.id" :data-index="index" >
            <VehicleCard :vehicleData="car" style="margin: 22px;"/>
            </div>
        </div>
    </div>
</template>

<script>
import VehicleCard from '../../components/VehicleCard.vue'; 
export default {
    created() {
        this.$store.dispatch("fetchCarDetails");
    },
    computed:{
        carsDetails(){
            return this.$store.state.allCars
        }
    },
    components: { VehicleCard }
}
</script>