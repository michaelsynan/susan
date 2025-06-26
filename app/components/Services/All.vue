<script setup lang="ts"></script>

<template>
  <div class="py-16 px-6 bg-yellow-50 border-b-4 border-black">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black text-black mb-8 uppercase text-center">
        OFFERINGS
      </h1>

      <p class="text-xl md:text-2xl text-black !leading-loose mb-12 text-center">
        Suggested contribution $50-100/hour sliding scale. Scholarships available for folks with financial need, please
        email for more information.
      </p>

      <div class="space-y-8">
        <!-- IN-PERSON Box -->
        <div id="in-person"
          class="bg-emerald-400 border-4 border-black p-8 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] scroll-mt-24">
          <div class="text-center mb-6">
            <UIcon name="i-mdi-account-group" class="text-6xl text-black mb-4" />
            <h2 class="text-3xl md:text-4xl font-black text-black uppercase !leading-normal">
              IN-PERSON
            </h2>
          </div>
          <ul class="text-lg md:text-xl text-black !leading-loose list-disc-fix space-y-2">
            <li>In person sessions on the weekend (1 hour)</li>
            <li>Crisis support (possibly in person)</li>
            <li>Virtual/in person COVID-friendly workshop (when held in person)</li>
          </ul>
        </div>

        <!-- VIRTUAL Box -->
        <div id="virtual"
          class="bg-yellow-300 border-4 border-black p-8 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] scroll-mt-24">
          <div class="text-center mb-6">
            <UIcon name="i-mdi-laptop" class="text-6xl text-black mb-4" />
            <h2 class="text-3xl md:text-4xl font-black text-black uppercase !leading-normal">
              VIRTUAL
            </h2>
          </div>
          <ul class="text-lg md:text-xl text-black !leading-loose list-disc-fix space-y-2">
            <li>Initial needs assessment - a quick chat to figure out what you need and what you're looking for</li>
            <li>Crisis support (by text, email)</li>
            <li>Virtual sessions (tele-coaching, 1 hour)</li>
            <li>Virtual/in person COVID-friendly workshop (when held virtually)</li>
          </ul>
        </div>

        <!-- RESOURCE SOURCING Box -->
        <div id="resources"
          class="bg-white border-4 border-black p-8 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] scroll-mt-24">
          <div class="text-center mb-6">
            <UIcon name="i-mdi-heart-multiple" class="text-6xl text-black mb-4" />
            <h2 class="text-3xl md:text-4xl font-black text-black uppercase !leading-normal">
              RESOURCE SOURCING
            </h2>
          </div>
          <ul class="text-lg md:text-xl text-black !leading-loose list-disc-fix space-y-2">
            <li>Mutual aid pod / community needs mapping / exploring - explore what you need to have more mutual aid and
              community in your life</li>
            <li>Workshops on disability justice, sex positivity, polyamory, mutual aid</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
