<script setup lang="ts">
 
import FilmCard from '@/components/FilmCard.vue';
import { supabase } from '@/supabase';

const { data: Films, error } = await supabase
  .from('Film')
  .select('*');

</script>



<template>
    <div class="flex">
        <RouterLink v-for="Film in Films" :to="{name: '/films/edit/[titre]', params: {titre:Film.titre}}">
            <FilmCard
            v-bind="Film"
            :key="Film.id"
            :annee="Film.annee"
            :titre="Film.titre"
            :image="Film.image"
            :bande="Film.bande"
            :synopsis="Film.synopsis"
            :note="Film.note"
            :duree_min="Film.duree_min"
            :realisateur="Film.realisateur"
            :site="Film.site"
            />
        </RouterLink>   
    </div>
</template>