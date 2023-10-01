<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  export let data: CollectionEntry<'lecture'>['data'];

  const days = {
    mon: 'Pondělí',
    tue: 'Úterý',
    wed: 'středa',
    thu: 'Čtvrtek',
    fri: 'Pátek',
  } as const;

  $: width = (data.span[0] / data.span[1]) * 100;
</script>

<div style="--width: {width}%" class="p-4">
  <article class="p-6 text-center text-dominant shadow-lg">
    {#if data.heading}
      <h2 class="text-lg"><i>Cvičení</i></h2>
    {/if}
    <h1 class="text-2xl">{data.name}</h1>
    <p class="text-md"><i>{data.id}</i></p>
    <p class="text-md mb-4">{days[data.day]} {data.time} v {data.room}</p>
    <a
      class="rounded border-2 border-accent p-2 text-accent transition-colors hover:bg-accent hover:text-dominant"
      href={`https://dl1.cuni.cz/course/view.php?id=${data.moodle}`}
      target="_blank"
    >
      Informace na Moodle.
    </a>
  </article>
</div>

<style>
  div {
    width: 100%;
  }
  @media (min-width: 640px) {
    div {
      width: 50%;
    }
  }
  @media (min-width: 768px) {
    div {
      width: var(--width, 100%);
    }
  }
</style>
