<script lang="ts">
    import photo from '../images/photo.jpg';
    import {_} from "svelte-i18n";
</script>

<div class="card">
    <img src={photo} alt="" style="width:100%" />
    <h1>{$_('profile.name')}</h1>
    <p class="title">{$_('profile.position')}</p>
    <p>{$_('profile.school')}</p>
    <hr class="solid" />
    <p>
        KAM MFF UK, {$_('room.name')} {$_('room.number')}. 325<br>
        Malostranské nám. 25<br>
        Praha 1, 118 00
    </p>
    <hr class="solid" />
    <p><a class="primary" href="mailto://maxova@kam.mff.cuni.cz">maxova@kam.mff.cuni.cz</a></p>
</div>

<style lang="scss">
  hr.solid {
    border: none;
    border-top: 3px solid var(--surface-text);
  }

  .card {
    background-color: var(--surface);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    > * {
      padding: 5px;
    }

    p {
      padding-bottom: 10px;
    }
  }

  .title {
    color: grey;
    font-size: 18px;
  }

  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  button:hover, a:hover {
    opacity: 0.7;
  }
</style>