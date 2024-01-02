<script setup lang="ts">
import Album from '@/components/Album.vue';
import Card from '@/components/Card.vue';

import p_1 from '@/assets/images/p/p_1.jpg';
import p_2 from '@/assets/images/p/p_2.jpg';
import p_3 from '@/assets/images/p/p_3.jpg';
import p_4 from '@/assets/images/p/p_4.jpg';
import p_5 from '@/assets/images/p/p_5.jpg';
import p_6 from '@/assets/images/p/p_6.jpg';
import p_7 from '@/assets/images/p/p_7.jpg';
import p_8 from '@/assets/images/p/p_8.jpg';
import p_9 from '@/assets/images/p/p_9.jpg';
import p_11 from '@/assets/images/p/p_11.jpg';
import p_12 from '@/assets/images/p/p_12.jpg';
import p_13 from '@/assets/images/p/p_13.jpg';
import p_14 from '@/assets/images/p/p_14.jpg';
import p_16 from '@/assets/images/p/p_16.jpg';
import p_17 from '@/assets/images/p/p_17.jpg';
import p_18 from '@/assets/images/p/p_18.jpg';
import p_19 from '@/assets/images/p/p_19.jpg';
import p_20 from '@/assets/images/p/p_20.jpg';
</script>

<template>
  <main>
    <Card :wide="true" :filled="true">
      <Album>
        <img :src="p_1" fetchpriority="high"/>
        <masonry-wall :items="[p_2, p_19, 
                p_5, p_6]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="p_12" loading="lazy"/>
        <masonry-wall :items="[p_8, p_9,  
                p_11, p_3]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="p_16" loading="lazy"/>
        <img :src="p_13" loading="lazy"/>
        <img :src="p_14" loading="lazy"/>
        <img :src="p_20" loading="lazy"/>
        <img :src="p_18" loading="lazy"/>
      </Album>
    </Card>
  </main>
</template>
