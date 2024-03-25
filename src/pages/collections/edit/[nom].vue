<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase';
import type { Database } from '@/supabase-types';
// @ts-ignore
import { useRoute } from 'vue-router/auto';
const route = useRoute("/collections/edit/[nom]");

const collection = ref<Database['public']['Tables']['Collection']['Row']>();
const films = ref<Database['public']['Tables']['Film']['Row'][]>([]); 

if (route.params.nom) {
    let { data, error } = await supabase
    .from("Collection")
    .select("*")
    .eq("nom", route.params.nom);
    if (error) console.log("n'a pas pu charger le table Collection :", error);
    else collection.value = (data as any[])[0];

    if (collection.value) {
        let { data: filmsData, error: filmsError } = await supabase
        .from("Film")
        .select("*")
        .eq("idCollection", collection.value.id);
        if (filmsError) console.log("n'a pas pu charger les films :", filmsError);
        else films.value = filmsData as Database['public']['Tables']['Film']['Row'][];
    }
}
</script>


<template>
    <div>
        <img :src="collection?.image" :alt="collection?.nom">
        <p>Nom : {{ collection?.nom }}</p>
        <p>Nombre de Films : {{ collection?.nombreFilms }}</p>
        <p>Durée : {{ collection?.duree }}min</p>
        <p>Note des spectateurs : {{ collection?.note }}</p>
        <p>Synopsis de la collection : {{ collection?.synopsis }}</p>
        <p>Les films de la collection :</p>
        <div v-for="film in films" :key="film.id">
            <p>{{ film.titre }}</p>
            <RouterLink :to="{name: '/films/edit/[titre]', params: {titre:film?.titre}}">
                <img :src="film.image" alt="">
            </RouterLink>
        </div>
    </div>
</template>