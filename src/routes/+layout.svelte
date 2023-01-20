<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let headline = setContext('headline', writable<string | undefined>(undefined));
</script>

<svelte:head>
  <title>{$headline ? `${$headline} - ` : ''}Course Store</title>
</svelte:head>

{#if $headline}
  <header>
    <h1>{$headline}</h1>
  </header>
{/if}

<main><slot /></main>
