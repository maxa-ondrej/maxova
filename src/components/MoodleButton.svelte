<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let id;
</script>

<a class="button secondary" href="https://dl1.cuni.cz/course/view.php?id={id}" target="_blank">
	{$_('information.on')} Moodle.
</a>
