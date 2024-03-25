<script setup lang="ts">
 
import GenreCard from '@/components/GenreCard.vue';
import { supabase } from '@/supabase';

const { data: Genres, error } = await supabase
  .from('Genre')
  .select('*');

</script>



<template>
    <div class="flex">
        <ul class="ml-5 list-disc">
            <li v-for="Genre in Genres">
                <RouterLink :to="{name: '/genres/edit/[nom]', params: {nom:Genre.nom}}">
                    <GenreCard
                    v-bind="Genre"
                    :key="Genre.id"
                    :nom="Genre.nom"
                    />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>