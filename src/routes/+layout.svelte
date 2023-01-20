<script lang="ts">
  import { page } from '$app/stores';

  const title = $page.data.title;
</script>

<svelte:head>
  <title>{title ? `${title} - ` : ''}Course Store</title>
</svelte:head>

{#if title}
  <header>
    <h1>{title}</h1>
  </header>
{/if}

<main><slot /></main>
