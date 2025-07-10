<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isValidEmail = ref(true)
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  isValidEmail.value = validateEmail(email.value)
  submitError.value = ''

  if (isValidEmail.value) {
    isSubmitting.value = true

    try {
      const response = await $fetch('/api/mailing-list', {
        method: 'POST',
        body: { email: email.value }
      })

      if (response.success) {
        isSubmitted.value = true
      }
    } catch (error) {
      console.error('Failed to submit email:', error)
      submitError.value = 'Failed to subscribe. Please try again.'
    } finally {
      isSubmitting.value = false
    }
  }
}
</script>

<template>
  <div class="py-42 border-t-4 px-6 bg-yellow-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-4xl md:text-6xl font-black text-black mb-6 uppercase !leading-normal font-['Tilt_Neon'] tracking-widest ">
        Join My Mailing List
      </h2>
      <p class="text-lg md:text-xl text-neutral-800 font-['IBM_Plex_Sans'] pb-12">
        I write about peer coaching, creative projects I'm working on, and other fun stuff.
      </p>


      <div v-if="!isSubmitted" class="max-w-2xl mx-auto">
        <div class="flex flex-col md:flex-row gap-4">
          <input v-model="email" type="email" placeholder="YOUR EMAIL ADDRESS"
            class="flex-1 px-6 py-4 text-xl font-bold text-black bg-white border-4 border-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-4px] focus:translate-y-[4px] transition-all duration-150 outline-none uppercase"
            :class="{ 'border-red-500': !isValidEmail }" />

          <button @click="handleSubmit" :disabled="isSubmitting"
            class="bg-emerald-400 border-4 border-black px-8 py-4 text-xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 uppercase whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE!' }}
          </button>
        </div>

        <p v-if="!isValidEmail" class="!text-red-500 font-bold text-sm uppercase mt-4">
          [ PLEASE ENTER A VALID EMAIL ]
        </p>

        <p v-if="submitError" class="!text-red-500 font-bold text-sm uppercase mt-4">
          [ {{ submitError }} ]
        </p>
      </div>

      <div v-else
        class="bg-yellow-300 border-4 border-black p-8 shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
        <h3 class="text-2xl font-black text-black mb-4 uppercase">
          THANKS FOR SUBSCRIBING!
        </h3>
        <p class="text-lg font-bold text-black">
          CHECK YOUR EMAIL FOR CONFIRMATION
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
