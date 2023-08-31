<template>
    <DefaultLayout>
        <div>
            <h1>Planètes</h1>  
            <div class="col-12">
                <div class="row">
                    <div class="col-4 my-2" v-for="(planet, index) of planets" :key="index">
                        <div class="card">
                            <div class="text-center">
                                <h4>{{ planet.name }}</h4>
                                <h7>{{ index }}</h7>
                            </div>
                            <div class="text-center card-body">
                                <img :src="planet.icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>    
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'

import { onMounted, ref } from 'vue'
import { PlanetRepository } from '@/repositories/PlanetRepository'
import { Planet } from '@/models/Planet'

const planetRepository = new PlanetRepository()
const planets = ref<Planet[]>([])

onMounted(async() => {
    planets.value = await planetRepository.retrieveAll()
})

</script>

<style scoped>

</style>