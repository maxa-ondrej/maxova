<script lang="ts">
    import Moon from 'svelte-icons/md/MdBrightness2.svelte';
    import Sun from 'svelte-icons/md/MdBrightnessLow.svelte';
    import {darkMode} from '../lib/stores';
    import {onMount} from "svelte";

    function toggle() {
        darkMode.update(value => !value);
        setMode($darkMode);
    }

    function setMode(dark: boolean) {
        localStorage.setItem('dark-mode', dark ? '1' : '0');
        if (dark) {
            window.document.body.classList.add('dark-mode');
        } else {
            window.document.body.classList.remove('dark-mode');
        }
    }

    function initialFetch() {
        let dark: string | null = localStorage.getItem('dark-mode');
        if (dark === null) {
            darkMode.set(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
            localStorage.setItem('dark-mode', dark ? '1' : '0');
        } else {
            darkMode.set(dark === '1');
        }
        setMode($darkMode);
    }

    onMount(initialFetch);
</script>

<a on:click={toggle}>
    <div class="icon">
        {#if $darkMode}
            <Moon/>
        {:else}
            <Sun/>
        {/if}
    </div>
</a>

<style lang="scss">
  @import "../styles/colors";

  a {
    display: inline-block;
    padding: 14px;

    div.icon {
      width: 32px;
      height: 32px;
    }
  }
</style>