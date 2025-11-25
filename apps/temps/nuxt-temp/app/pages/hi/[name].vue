<script setup lang='ts'>
definePageMeta({
  layout: 'home',
})

const route = useRoute<'hi-name'>()

const name = route.params.name
</script>

<template>
  <div>
    <div i-twemoji:waving-hand text-4xl inline-block animate-shake-x animate-duration-5000 />
    <h3 text-2xl font-500>
      Hi,
    </h3>
    <div text-xl>
      {{ name }}!
    </div>

    <div>
      <NuxtLink
        class="text-sm btn m-3"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
