<script lang="ts">
  import { page } from '$app/stores';

  const headline = $page.data.headline;
</script>

<svelte:head>
  <title>{headline ? `${headline} - ` : ''}Course Store</title>
</svelte:head>

{#if headline}
  <header>
    <h1>{headline}</h1>
  </header>
{/if}

<main><slot /></main>
