<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div size-full flex="~ col gap3" justify-center items-center>
    <h1>{{ error.statusCode }}</h1>

    <NuxtLink to="/" class="btn text-sm">
      Go back
    </NuxtLink>
  </div>
</template>
