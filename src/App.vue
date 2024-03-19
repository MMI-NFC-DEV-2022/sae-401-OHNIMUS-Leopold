<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
// import { supabase } from './supabase';
// console.log(supabase);
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>