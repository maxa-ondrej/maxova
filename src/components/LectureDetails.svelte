<script lang="ts">
    import {route} from "$lib/url";
    import {_} from "svelte-i18n";

    export let type;
    export let day;
    export let time;
    export let room;
    export let pdfs = [];
    let uuid = $_(`days.short.${day}`) + '_' + time.replace(':', '_');
</script>

<h2>Vítejte na stránce cvičení k {$_(`lectures.for.${type}`)} {$_(`days.in.${day}`)} ve {time} v {room}</h2>
<div class="contact">
    <p>Pokud máte jakýkoli problém, například</p>
    <ul>
        <li>něčemu nerozumíte</li>
        <li>jste dlouhodobě nemocni</li>
        <li>nemůžete se zúčastnit testu</li>
    </ul>
    <p>
        napište mi na <a class="a primary" href="mailto:maxova@kam.mff.cuni.cz"
    >maxova@kam.mff.cuni.cz</a
    >
    </p>
    <p>Váš problém půjde určitě nějak vyřešit.</p>
</div>

<div>
    <p class="info">
        Zde se budou v průběhu semestru objevovat veškeré informace a materiály k tomuto cvičení.
    </p>
</div>

<ul class="files">
    <li><a class="a primary" href={route(`/${type}/Podminky_${type.toUpperCase()}.pdf`)} target="_blank">Podmínky pro udělení zápočtu</a>
    </li>
    {#each pdfs as {id, label}}
        <li><a class="a primary" href={route(`/${type}/${uuid}/${id}.pdf`)} target="_blank">{label}</a></li>
    {/each}
</ul>
<slot/>

<style lang="scss">
  ul {
    margin-left: 30px;

    &.files > li {
      margin-top: 10px;
    }
  }

  div {
    margin-top: 15px;
  }

  p.info {
    display: inline-block;
    background-color: var(--secondary);
    padding: 10px 10px;
    font-weight: bold;
  }
</style>
