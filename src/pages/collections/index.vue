<script setup lang="ts">
 
import CollecCard from '@/components/CollecCard.vue';
import { supabase } from '@/supabase';

const { data: Collections, error } = await supabase
  .from('Collection')
  .select('*');

</script>



<template>
    <div class="flex">
        <RouterLink v-for="Collection in Collections" :to="{name: '/collections/edit/[nom]', params: {nom:Collection.nom}}">
            <CollecCard
            v-bind="Collection"
            :key="Collection.id"
            :annee="Collection.nombreFilms"
            :titre="Collection.synopsis"
            :image="Collection.image"
            :bande="Collection.duree"
            :synopsis="Collection.synopsis"
            :note="Collection.note"
            />
        </RouterLink>   
    </div>
</template>