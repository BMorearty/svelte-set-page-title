<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let title = setContext('title', writable<string | undefined>(undefined));
</script>

<svelte:head>
  <title>{$title ? `${$title} - ` : ''}Course Store</title>
</svelte:head>

{#if $title}
  <header>
    <h1>{$title}</h1>
  </header>
{/if}

<main><slot /></main>
