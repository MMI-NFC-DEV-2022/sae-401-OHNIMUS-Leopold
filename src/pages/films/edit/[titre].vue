<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase';
import type { Database } from '@/supabase-types';
// @ts-ignore
import { useRoute } from 'vue-router/auto';
const route = useRoute("/films/edit/[titre]");


const film = ref<Database['public']['Tables']['Film']['Row'] & { Collection?: Database['public']['Tables']['Collection']['Row'] }>();

if (route.params.titre) {
    let { data, error } = await supabase
    .from("Film")
    .select("*, Collection (*)") 
    .eq("titre", route.params.titre);
    if (error) console.log("n'a pas pu charger le table Film :", error);
    else film.value = (data as any[])[0];
}

</script>


<template>
    <div>
        <img :src=film?.image :alt=film?.titre>
        <p>Titre : {{ film?.titre }}</p>
        <p>Année de sortie : {{ film?.annee }}</p>
        <p>Durée : {{ film?.duree_min }}min</p>
        <p>Réalisateur : {{ film?.realisateur }}</p>
        <p>Note des spectateurs : {{ film?.note }}</p>
        <!-- <p>{{ film?.site }}</p> -->
        <p>Synopsis du film : {{ film?.synopsis }}</p>
        <iframe width="560" height="315" :src="film?.bande" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Afficher la collection : {{ film?.Collection?.nom }}</p>
        <RouterLink :to="{name: '/collections/edit/[nom]', params: {nom:film?.Collection?.nom}}">
            <img :src=film?.Collection?.image alt="">
        </RouterLink>
    </div>
</template>