<script setup lang="ts">
const services = ref([
  {
    title: "IN-PERSON",
    items: [
      "In person sessions on the weekend (1 hour)",
      "Crisis support (possibly in person)",
      "Virtual/in person COVID-friendly workshop (when held in person)"
    ],
    bgColor: "bg-emerald-400",
    textColor: "text-emerald-400",
    anchor: "in-person"
  },
  {
    title: "VIRTUAL",
    items: [
      "Initial needs assessment",
      "Crisis support (by text, email)",
      "Virtual sessions (tele-coaching, 1 hour)",
      "Virtual/in person COVID-friendly workshop (when held virtually)"
    ],
    bgColor: "bg-yellow-300",
    textColor: "text-yellow-300",
    anchor: "virtual"
  },
  {
    title: "RESOURCE SOURCING",
    items: [
      "Mutual aid pod / community needs mapping / exploring",
      "Workshops on disability justice, sex positivity, polyamory, mutual aid"
    ],
    bgColor: "bg-white",
    textColor: "text-white",
    anchor: "resources"
  }
])

const navigateToService = (anchor: string) => {
  navigateTo(`/services#${anchor}`)
}
</script>

<template>
  <div class="py-32 px-6">
    <h2 class="tracking-widest text-4xl md:text-6xl font-black text-black mb-16 text-center uppercase">
      SERVICES
    </h2>

    <div class="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
      <div v-for="service in services" :key="service.title"
        class="flex-1 border-4 border-black p-8 shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col"
        :class="service.bgColor">
        <h3 class="text-2xl md:text-3xl font-black text-black mb-4 uppercase">
          {{ service.title }}
        </h3>
        <p class="text-lg text-black mb-6 leading-relaxed flex-grow">
          <span v-for="(item, index) in service.items" :key="item">
            {{ item }}<span v-if="index < service.items.length - 1">. </span><span v-else>.</span>
          </span>
        </p>
        <div class="text-center">
          <button @click="navigateToService(service.anchor)"
            class="bg-black border-4 border-black px-6 py-3 font-bold text-lg shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-150 mt-auto w-full text-center block"
            :class="service.textColor">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
