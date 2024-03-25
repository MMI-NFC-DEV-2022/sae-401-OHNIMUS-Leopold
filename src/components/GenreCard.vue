<script setup lang="ts">
import type { Database } from '@/supabase-types';
import { defineProps } from 'vue';
const props = defineProps<Database['public']['Tables']['Genre']['Row']>();
</script>

<template>
  <div>
    <p>{{ nom }}</p>
  </div>
</template>
