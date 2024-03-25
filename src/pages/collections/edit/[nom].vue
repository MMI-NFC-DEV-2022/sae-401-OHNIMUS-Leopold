<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase';
import type { Database } from '@/supabase-types';
// @ts-ignore
import { useRoute } from 'vue-router/auto';
const route = useRoute("/collections/edit/[nom]");


const collection = ref<Database['public']['Tables']['Collection']['Row']>();

if (route.params.nom) {
    let { data, error } = await supabase
    .from("Collection")
    .select("*")
    .eq("nom", route.params.nom);
    if (error) console.log("n'a pas pu charger le table Collection :", error);
    else collection.value = (data as any[])[0];
}


</script>


<template>
    <div>
        <img :src=collection?.image :alt=collection?.nom>
        <p>Nom : {{ collection?.nom }}</p>
        <p>Nombre de Films : {{ collection?.nombreFilms }}</p>
        <p>Durée : {{ collection?.duree }}min</p>
        <p>Note des spectateurs : {{ collection?.note }}</p>
        <p>Synopsis de la collection : {{ collection?.synopsis }}</p>
    </div>
</template>