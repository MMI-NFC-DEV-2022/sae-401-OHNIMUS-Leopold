<script setup lang="ts">
import type { Database } from '@/supabase-types';
import { defineProps } from 'vue';
const props = defineProps<Database['public']['Tables']['Collection']['Row']>();
</script>

<template>
  <div class="">
    <img class="object-cover h-[200px] rounded-lg" :src="image" alt="" />
    <h1 class="text-lg text-center">{{ nom }}</h1>
  </div>
</template>

