<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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

// Check for sent query parameter on mount
onMounted(() => {
  const route = useRoute()
  if (route.query.sent === 'true') {
    isSubmitted.value = true
  }
  document.addEventListener('click', handleClickOutside)
})

const serviceOptions = [
  { value: '', label: 'SELECT A SERVICE' },
  { value: 'single-sessions', label: 'SINGLE SESSIONS' },
  { value: 'group-chats', label: 'GROUP CHATS' },
  { value: 'peer-coaching', label: 'PEER COACHING' },
  { value: 'general', label: 'GENERAL QUESTIONS' }
]

const isDropdownOpen = ref(false)
const selectedServiceLabel = ref('SELECT A SERVICE')
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectService = (option: any) => {
  form.value.service = option.value
  selectedServiceLabel.value = option.label
  isDropdownOpen.value = false
  // Clear error when service is selected
  if (option.value) {
    errors.value.service = ''
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

// Add event listener when component mounts
// (Already handled in the isSubmitted check above)

// Remove event listener when component unmounts
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

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
    // Send form data to the API with explicit error handling
    const response = await $fetch('/api/resend', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        service: form.value.service,
        message: form.value.message
      },
      // Prevent automatic error handling
      ignoreResponseError: true
    })

    console.log('Form submitted successfully:', response)
    isSubmitted.value = true

    // Add query parameter to URL without refreshing
    const router = useRouter()
    await router.replace({ query: { sent: 'true' } })
  } catch (error) {
    console.error('Submission error:', error)
    // Use custom error display instead of popup
    errors.value.message = 'THERE WAS AN ERROR SENDING YOUR MESSAGE. PLEASE TRY AGAIN.'
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
            <div class="relative" ref="dropdownRef">
              <button type="button" @click="toggleDropdown"
                class="w-full px-6 py-4 text-lg font-bold text-black bg-white border-4 border-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-3px] focus:translate-y-[3px] transition-all duration-150 outline-none uppercase flex justify-between items-center"
                :class="{ '!border-red-500': errors.service, 'shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-3px] translate-y-[3px]': isDropdownOpen }">
                <span :class="{ 'text-gray-500': selectedServiceLabel === 'SELECT A SERVICE' }">{{ selectedServiceLabel
                  }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-150"
                  :class="{ 'rotate-180': isDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div v-if="isDropdownOpen"
                class="absolute z-20 w-full bg-white border-4 border-black mt-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                style="margin-left: -5px;">
                <div v-for="(option, index) in serviceOptions" :key="option.value" @click="selectService(option)"
                  class="cursor-pointer px-6 py-4 text-lg font-bold text-black hover:bg-yellow-300 transition-all duration-150 border-b-2 border-black last:border-b-0"
                  :class="{
                    'bg-yellow-200': form.service === option.value,
                    'text-gray-500': option.value === '',
                    'hover:bg-yellow-400': option.value !== ''
                  }">
                  {{ option.label }}
                </div>
              </div>
            </div>
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
        <p class="text-lg font-bold text-black mb-8">
          THANKS FOR REACHING OUT! I'LL GET BACK TO YOU SOON.
        </p>

        <NuxtLink to="/" class="text-black font-bold text-lg hover:underline uppercase">
          ← BACK TO HOME
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Prevent autofill styling from overriding custom design */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
textarea:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  -webkit-text-fill-color: black !important;
  background-color: white !important;
  background-image: none !important;
  border: 4px solid black !important;
}

/* For Firefox */
input:-moz-autofill,
textarea:-moz-autofill {
  background-color: white !important;
  color: black !important;
}
</style>
