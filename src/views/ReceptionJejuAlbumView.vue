<script setup lang="ts">
import Album from '@/components/Album.vue';
import Card from '@/components/Card.vue';

import j_1 from '@/assets/images/j/j_1.jpg';
import j_2 from '@/assets/images/j/j_2.jpg';
import j_3 from '@/assets/images/j/j_3.jpg';
import j_4 from '@/assets/images/j/j_4.jpg';
import j_5 from '@/assets/images/j/j_5.jpg';
import j_6 from '@/assets/images/j/j_6.jpg';
import j_7 from '@/assets/images/j/j_7.jpg';
import j_8 from '@/assets/images/j/j_8.jpg';
import j_9 from '@/assets/images/j/j_9.jpg';
import j_10 from '@/assets/images/j/j_10.jpg';
import j_11 from '@/assets/images/j/j_11.jpg';
import j_12 from '@/assets/images/j/j_12.jpg';
import j_13 from '@/assets/images/j/j_13.jpg';
import j_14 from '@/assets/images/j/j_14.jpg';
import j_15 from '@/assets/images/j/j_15.jpg';
import j_17 from '@/assets/images/j/j_17.jpg';
import j_18 from '@/assets/images/j/j_18.jpg';
import j_19 from '@/assets/images/j/j_19.jpg';
import j_21 from '@/assets/images/j/j_21.jpg';
import j_22 from '@/assets/images/j/j_22.jpg';
import j_25 from '@/assets/images/j/j_25.jpg';
import j_26 from '@/assets/images/j/j_26.jpg';
import j_27 from '@/assets/images/j/j_27.jpg';
import j_29 from '@/assets/images/j/j_29.jpg';
import j_30 from '@/assets/images/j/j_30.jpg';
import j_31 from '@/assets/images/j/j_31.jpg';
import j_32 from '@/assets/images/j/j_32.jpg';
import j_33 from '@/assets/images/j/j_33.jpg';
import j_34 from '@/assets/images/j/j_34.jpg';
import j_35 from '@/assets/images/j/j_35.jpg';
import j_36 from '@/assets/images/j/j_36.jpg';
import j_37 from '@/assets/images/j/j_37.jpg';
</script>

<template>
  <main>
    <Card :wide="true" :filled="true">
      <Album>
        <img :src="j_30" fetchpriority="high"/>
        <masonry-wall :items="[j_35, j_37, j_33, j_34]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_9" loading="lazy"/>
        <masonry-wall :items="[j_2, j_3, j_4, j_5]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_7" loading="lazy"/>
        <masonry-wall :items="[j_8, j_1, j_6, j_10]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_17" loading="lazy"/>
        <masonry-wall :items="[j_14, j_15]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_21" loading="lazy"/>
        <img :src="j_22" loading="lazy"/>
        <img :src="j_18" loading="lazy"/>
        <masonry-wall :items="[j_19, j_13]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_11" loading="lazy"/>
        <img :src="j_12" loading="lazy"/>
        <img :src="j_36" loading="lazy"/>
        <masonry-wall :items="[j_26, j_25]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_27" loading="lazy"/>
        <masonry-wall :items="[j_31, j_32]" :min-columns="2" :max-columns="4" :gap="8">
          <template #default="{ item }">
            <img :src="item" loading="lazy"/>
          </template>
        </masonry-wall>
        <img :src="j_29" loading="lazy"/>
      </Album>
    </Card>
  </main>
</template>
