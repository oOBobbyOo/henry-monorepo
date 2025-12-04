<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div flex="~ col gap3" size-full items-center justify-center>
    <h1>{{ error.statusCode }}</h1>

    <NuxtLink to="/" class="text-sm btn">
      Go back
    </NuxtLink>
  </div>
</template>
