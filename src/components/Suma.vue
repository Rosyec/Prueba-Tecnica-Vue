<script setup lang="ts">
import { getResult } from '../Services/suma.service'
import { ref } from 'vue'

let num1: number = 0;
let num2: number = 0;
let result = ref(0);
let isLoading = ref(false);

const Suma = async () => {
    if ( num1 <= 0 && num2 <= 0 ) return;
    isLoading.value = true;
    const { response } = await getResult( num1, num2 );
    result.value = response
    isLoading.value = false;
}
</script>

<template>
    <div class="container">
        <hr>
        <div class="row">
            <div class="col-5">
                <input v-model="num1" class="form-control" type="number" placeholder="num 1" id="num1" min="0">
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <span> + </span>
            </div>
            <div class="col-5">
                <input v-model="num2" class="form-control" type="number" placeholder="num 2" id="num2" min="0">
            </div>
        </div>
        <div class="row mt-2">
            <button class="btn btn-success" v-on:click="Suma()" >Enviar</button>
        </div>
        <hr>
        <div class="row">
            <h6 class="display-6 text-center" v-if="result">El resultado es</h6>
            <pre class="text-center" v-if="result"> {{ result }} </pre>
            <div class="row d-flex justify-content-center">
                <span class="loader" v-if="isLoading"></span>
            </div>
        </div>
    </div>
</template>

<style>

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite
  }
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid rgb(65, 116, 68);
    animation: prixClipFix 2s linear infinite ;
  }

  @keyframes rotate {
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
  }

</style>