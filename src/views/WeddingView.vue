<script setup lang="ts">
import Announcement from '@/components/WeddingAnnouncement.vue'
import Greetings from '@/components/WeddingGreetings.vue';
import Invitation from '@/components/WeddingInvitation.vue';
import Gallery from '@/components/WeddingGallery.vue';
import ForYourHeart from '@/components/WeddingForYourHeart.vue';
import RSVP from '@/components/RSVP.vue';
import Card from '@/components/Card.vue';
</script>

<template>
  <main>
    <Card :wide="true">
      <Announcement/>
    </Card>
    <Card :filled="true">
      <Greetings/>
    </Card>
    <Card :filled="true" :divider="true">
      <Invitation/>
    </Card>
    <Card :filled="true" :divider="true">
      <Gallery/>
    </Card>
    <Card :filled="true" :divider="true">
      <ForYourHeart/>
    </Card>
    <Card :filled="true" :divider="true">
      <RSVP/>
    </Card>
  </main>
</template>
