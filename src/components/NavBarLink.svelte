<script lang="ts">
  import { route } from '@lib/url';

  export let href: string;
</script>

<li class="flex h-full w-fit items-center transition-colors hover:bg-accent hover:text-dominant">
  <a class="inline-block p-4" href={route(href)}><slot /></a>
</li>
