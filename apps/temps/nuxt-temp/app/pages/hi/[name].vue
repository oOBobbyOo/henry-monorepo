<script setup lang='ts'>
definePageMeta({
  layout: 'home',
})

const route = useRoute<'hi-name'>()
const name = route.params.name
const user = useUserStore()

watchEffect(() => {
  user.setNewName(route.params.name as string)
})
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

    <template v-if="user.otherNames.length">
      <div text-sm my-4>
        <span op-50>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

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
