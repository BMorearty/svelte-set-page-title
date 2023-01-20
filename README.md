# svelte-set-page-title

Demonstrates how a page can pass data like a page title back up to the layout.

- `main` branch: the correct solution, which returns a title from the page's `load` function (which
  is called before any rendering happens, including layout rendering).

- `flash` branch: an incorrect solution that uses a writable store to let the page set the title and
  have the layout get it. This solution renders the correct result in the end, but results in a
  client-side flash because the ssr page does not have a title but the csr page inserts one.
