<template>
  <div class="text-neutral-400">
    <span>Model: {{ model }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useModel } from './useModel';

const { model } = useModel();
</script>

