
<script setup lang="ts">

const links: Link[] = [ 
    {
        name: 'Github',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Vue'
    },
    {
        name: 'Api',
        url: 'https://api-vue.vercel.app/'
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