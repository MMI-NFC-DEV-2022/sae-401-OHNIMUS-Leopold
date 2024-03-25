<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase';
import type { Database } from '@/supabase-types';
// @ts-ignore
import { useRoute } from 'vue-router/auto';
const route = useRoute("/genres/edit/[nom]");

const genre = ref<Database['public']['Tables']['Genre']['Row']>();
const films = ref<Database['public']['Tables']['Film']['Row'][]>([]); 

if (route.params.nom) {
    let { data, error } = await supabase
    .from("Genre")
    .select("*")
    .eq("nom", route.params.nom);
    if (error) console.log("n'a pas pu charger le table Genre :", error);
    else genre.value = (data as any[])[0];

    if (genre.value) {
        let { data: filmsData, error: filmsError } = await supabase
        .from("Film")
        .select("*")
        .eq("idGenre", genre.value.id);
        if (filmsError) console.log("n'a pas pu charger les films :", filmsError);
        else films.value = filmsData as Database['public']['Tables']['Film']['Row'][];
    }
}
</script>


<template>
    <div>
        <p>Les films du genre : {{ genre?.nom }}</p>
        <ul v-for="film in films" :key="film.id" class="list-disc ml-5">
            <RouterLink :to="{name: '/films/edit/[titre]', params: {titre:film.titre}}">
                <li>{{ film.titre }}</li>
            </RouterLink>
        </ul>
    </div>
</template>