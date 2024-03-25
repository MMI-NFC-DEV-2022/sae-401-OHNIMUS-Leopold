<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase';
import type { Database } from '@/supabase-types';
// @ts-ignore
import { useRoute } from 'vue-router/auto';
const route = useRoute("/genres/edit/[nom]");

const genre = ref<Database['public']['Tables']['Genre']['Row']>();

if (route.params.nom) {
    let { data, error } = await supabase
    .from("Genre")
    .select("*")
    .eq("nom", route.params.nom);
    if (error) console.log("n'a pas pu charger le table Genre :", error);
    else genre.value = (data as any[])[0];
}

</script>


<template>
    <div>
        <p>Nom : {{ genre?.nom }}</p>
    </div>
</template>