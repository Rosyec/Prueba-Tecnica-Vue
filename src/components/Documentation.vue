
<script setup lang="ts">

const links: Link[] = [ 
    {
        name: 'Github - Vue',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Vue'
    },
    {
        name: 'Github - Api',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Api'
    },
    {
        name: 'Api',
        url: 'https://prueba-tecnica-api.vercel.app/'
    }
 ];

interface Link {
    name: string,
    url: string
}

</script>

<template>
    <div class="container">
        <div class="row">
            <a v-for="link of links" target="_blank"  v-bind:href="link.url"> {{ link.name }} </a>
        </div>
    </div>
</template>