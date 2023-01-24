
<script setup lang="ts">

const links: Link[] = [ 
    {
        name: 'Github',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Vue'
    },
    {
        name: 'Deploy',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Vue'
    },
    {
        name: 'Api',
        url: 'https://github.com/Rosyec/Prueba-Tecnica-Vue'
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
            <a v-for="link of links"  v-bind:href="link.url"> {{ link.name }} </a>
        </div>
    </div>
</template>