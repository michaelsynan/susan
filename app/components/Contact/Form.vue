<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const serviceOptions = [
  { value: '', label: 'SELECT A SERVICE' },
  { value: 'single-sessions', label: 'SINGLE SESSIONS' },
  { value: 'group-chats', label: 'GROUP CHATS' },
  { value: 'peer-coaching', label: 'PEER COACHING' },
  { value: 'general', label: 'GENERAL QUESTIONS' }
]

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = () => {
  errors.value = {
    name: '',
    email: '',
    service: '',
    message: ''
  }

  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'NAME IS REQUIRED'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'EMAIL IS REQUIRED'
    isValid = false
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = 'PLEASE ENTER A VALID EMAIL'
    isValid = false
  }

  if (!form.value.service) {
    errors.value.service = 'PLEASE SELECT A SERVICE'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'MESSAGE IS REQUIRED'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Handle form submission here
    console.log('Form submitted:', form.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    isSubmitted.value = true
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="pt-16 px-6 bg-yellow-50 pb-32">
    <div class="max-w-2xl mx-auto">

      <div v-if="!isSubmitted">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-lg font-bold text-black mb-2 uppercase">
              NAME *
            </label>
            <input v-model="form.name" type="text"
              class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none"
              :class="{ '!border-red-500': errors.name }" placeholder="YOUR NAME" />
            <div class="h-6 mt-2">
              <p v-if="errors.name" class="!text-red-500 font-bold text-sm">
                {{ errors.name }}
              </p>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-lg font-bold text-black mb-2 uppercase">
              EMAIL *
            </label>
            <input v-model="form.email" type="email"
              class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none"
              :class="{ '!border-red-500': errors.email }" placeholder="YOUR@EMAIL.COM" />
            <div class="h-6 mt-2">
              <p v-if="errors.email" class="!text-red-500 font-bold text-sm">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-lg font-bold text-black mb-2 uppercase">
              PHONE NUMBER
            </label>
            <input v-model="form.phone" type="tel"
              class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none"
              placeholder="(555) 123-4567" />
            <div class="h-6 mt-2"></div>
          </div>

          <!-- Service Selection -->
          <div>
            <label class="block text-lg font-bold text-black mb-2 uppercase">
              SERVICE *
            </label>
            <select v-model="form.service"
              class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none uppercase"
              :class="{ '!border-red-500': errors.service }">
              <option v-for="option in serviceOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            <div class="h-6 mt-2">
              <p v-if="errors.service" class="!text-red-500 font-bold text-sm">
                {{ errors.service }}
              </p>
            </div>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-lg font-bold text-black mb-2 uppercase">
              MESSAGE *
            </label>
            <textarea v-model="form.message" rows="6"
              class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none resize-none"
              :class="{ '!border-red-500': errors.message }"
              placeholder="TELL ME ABOUT YOURSELF AND WHAT YOU'RE LOOKING FOR..."></textarea>
            <div class="h-6 mt-2">
              <p v-if="errors.message" class="!text-red-500 font-bold text-sm">
                {{ errors.message }}
              </p>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button type="submit" :disabled="isSubmitting"
              class="w-full bg-emerald-400 border-4 border-black px-8 py-4 text-2xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 uppercase disabled:opacity-50 disabled:cursor-not-allowed">
              {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Success Message -->
      <div v-else class="bg-yellow-300 border-4 border-black p-8 shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
        <h3 class="text-3xl font-black text-black mb-4 uppercase">
          MESSAGE SENT!
        </h3>
        <p class="text-lg font-bold text-black">
          THANKS FOR REACHING OUT! I'LL GET BACK TO YOU SOON.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
