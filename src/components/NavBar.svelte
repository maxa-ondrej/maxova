<script>
  import { route } from '@lib/url';
  import NavBarLink from '@components/NavBarLink.svelte';
</script>

<nav class="fixed top-0 h-16 w-full bg-dominant font-bold text-accent no-underline">
  <ul class="flex h-full w-full list-none flex-row justify-center gap-4 text-lg">
    <NavBarLink href="/">Domů</NavBarLink>
    <NavBarLink href="/teaching">Výuka</NavBarLink>
  </ul>
</nav>

<div class="h-16"></div>
