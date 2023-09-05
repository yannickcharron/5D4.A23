<template>
  <DefaultLayout>
    <div>
      <h1>Planètes</h1>
      <div class="loading" v-if="isLoading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s"
          width="128px"
          height="128px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <defs style="animation-play-state: running; animation-delay: 0s">
            <pattern id="ldio-gopm1bua007-pattern" patternUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" style="animation-play-state: running; animation-delay: 0s">
              <rect x="0" y="0" width="100" height="100" fill="#f1f5f9" style="animation-play-state: running; animation-delay: 0s" />
              <circle cx="83" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.1515151515151516s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="28" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 132;0 -32" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.6363636363636364s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="2" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.7575757575757576s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="18" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.378787878787879s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="69" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 138;0 -38" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.1818181818181819s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="43" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 131;0 -31" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.5606060606060606s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="8" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 144;0 -44" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.9848484848484849s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="38" cy="0" r="4" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.045454545454545456s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="61" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.045454545454545456s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="87" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 153;0 -53" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.803030303030303s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="90" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 142;0 -42" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.378787878787879s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="5" cy="0" r="4" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 149;0 -49" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.2272727272727273s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="97" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 152;0 -52" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.0909090909090908s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="12" cy="0" r="4" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.16666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="19" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.5151515151515151s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="62" cy="0" r="8" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.0303030303030303s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="9" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.2727272727272727s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="44" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.5606060606060606s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="41" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 114;0 -14" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.6212121212121212s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="25" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 149;0 -49" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.0454545454545454s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="85" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 113;0 -13" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.4090909090909092s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="56" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.0454545454545454s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="55" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.1818181818181819s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="35" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 147;0 -47" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.9242424242424242s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="40" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 133;0 -33" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.7727272727272727s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="4" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.1818181818181819s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="68" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.7727272727272727s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="88" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 113;0 -13" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.9242424242424242s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="45" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 130;0 -30" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.9393939393939394s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="18" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.7575757575757576s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="60" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 155;0 -55" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.21212121212121213s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="10" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.2121212121212122s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="16" cy="0" r="8" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.3939393939393939s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="53" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 107;0 -7" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.106060606060606s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="53" cy="0" r="4" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.3484848484848485s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="26" cy="0" r="4" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 146;0 -46" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.5s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="37" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 127;0 -27" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.15151515151515152s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="68" cy="0" r="8" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.6515151515151515s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="75" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 153;0 -53" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.8636363636363636s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="42" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 113;0 -13" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.393939393939394s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="60" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 138;0 -38" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.4848484848484849s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="61" cy="0" r="3" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 104;0 -4" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.4696969696969697s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="6" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 126;0 -26" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.2272727272727273s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="52" cy="0" r="10" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.8181818181818182s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="65" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.4393939393939394s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="63" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.5454545454545454s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="67" cy="0" r="6" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.21212121212121213s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="61" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.5303030303030303s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="49" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="1.5151515151515151s" begin="-1s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="32" cy="0" r="7" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 133;0 -33" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.6666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="36" cy="0" r="8" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 130;0 -30" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.30303030303030304s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="47" cy="0" r="5" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 106;0 -6" keyTimes="0;1" dur="1.5151515151515151s" begin="-0.9393939393939394s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
              <circle cx="42" cy="0" r="9" fill="#6ad8f8" style="animation-play-state: running; animation-delay: 0s">
                <animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="1.5151515151515151s" begin="-1.4696969696969697s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s" />
              </circle>
            </pattern>
          </defs>
          <circle fill="url(#ldio-gopm1bua007-pattern)" cx="50" cy="50" r="40" stroke="#e15b64" stroke-width="5" style="animation-play-state: running; animation-delay: 0s" />
          <!-- [ldio] generated by https://loading.io/ -->
        </svg>
      </div>
      <div class="col-12" v-else>
        <div class="row">
          <div class="col-4 my-2" v-for="(planet, index) of planets" :key="index">
            <div class="card">
              <div class="text-center">
                <h4>{{ planet.name }}</h4>
                <h7>{{ index }}</h7>
              </div>
              <div class="text-center card-body">
                <img :src="planet.icon" class="planet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';

import { onMounted, ref } from 'vue';
import { PlanetRepository } from '@/repositories/PlanetRepository';
import { Planet } from '@/models/Planet';

const planetRepository = new PlanetRepository();
const planets = ref<Planet[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  planets.value = await planetRepository.retrieveAll();
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});
</script>

<style scoped>
img.planet {
  width: 225px;
  height: auto;
  margin: auto;
}
</style>
