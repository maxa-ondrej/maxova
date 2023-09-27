<script lang="ts">
  export let name: string;
  export let id: string;
  export let moodle: number;
  export let day: keyof typeof days;
  export let time: string;
  export let room: string;
  export let span: [number, number];

  const days = {
    mon: 'Pondělí',
    tue: 'Úterý',
    wed: 'středa',
    thu: 'Čtvrtek',
    fri: 'Pátek',
  } as const;

  $: width = (span[0] / span[1]) * 100;
</script>

<div style="--width: {width}%" class="p-4">
  <article class="p-6 text-center text-dominant shadow-lg">
    <h2 class="text-lg"><i>Cvičení</i></h2>
    <h1 class="text-2xl">{name}</h1>
    <p class="text-md"><i>{id}</i></p>
    <p class="text-md mb-4">{days[day]} {time} v {room}</p>
    <a
      class="rounded border-2 border-accent p-2 text-accent transition-colors hover:bg-accent hover:text-dominant"
      href={`https://dl1.cuni.cz/course/view.php?id=${moodle}`}
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
