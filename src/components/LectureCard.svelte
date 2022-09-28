<script lang="ts">
    import {_} from "svelte-i18n";

    export let name;
    export let color;
    export let id;
    export let day;
    export let time;
    export let room;
</script>

<div class="card" style="--color: {color}">
    <h4><i>{$_('lectures.practice')}</i></h4>
    <h2>{name}</h2>
    <h4><i>{id}</i></h4>
    <p>{day} {time} {$_('room.in')} {room}</p>
    <slot name="button">

    </slot>
</div>

<style lang="scss">
  .card {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background-color: var(--surface);
    margin: 20px;
    padding: 20px;
    text-align: center;
    float: left;

    .title {
      font-size: 25px;
    }

    button {
      margin-top: 15px;
    }
  }
</style>