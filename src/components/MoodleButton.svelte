<script lang="ts">
    import {_} from "svelte-i18n";

    function openInNewTab(url) {
        window.open(url, '_blank').focus();
    }

    export let id;
</script>

<button class="button primary" on:click={() => openInNewTab(`https://dl1.cuni.cz/course/view.php?id=${id}`)}>
    {$_('information_on')} Moodle.
</button>