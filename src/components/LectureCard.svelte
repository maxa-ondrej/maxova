<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { route } from '$lib/url';

	export let type: string;
	export let color: string | undefined = undefined;
	export let id: string;
	export let day: string;
	export let time: string;
	export let room: string;
	export let span: number;
	let uuid = $_(`days.short.${day}`) + '_' + time.replace(':', '_');
</script>

<div class="card" style="--color: {color}; --span: {span}">
	<h4><i>{$_('lectures.practice')}</i></h4>
	<h2>{$_(`lectures.${type}`)}</h2>
	<h4><i>{id}</i></h4>
	<p>{$_(`days.${day}`)} {time} {$_('room.in')} {room}</p>
	<slot name="button">
		<a class="button secondary" href={route(`/teaching/${type}/${uuid}`)}>
			{$_('information.here')}
		</a>
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
	grid-column: span var(--span);

	.title {
		font-size: 25px;
	}

	p {
		margin-bottom: 15px;
	}
}

@media only screen and (max-width: 1200px) {
	.card {
		grid-column: span 4;
	}
}

@media only screen and (max-width: 768px) {
	.card {
		grid-column: span 6;
	}
}

@media only screen and (max-width: 480px) {
	.card {
		grid-column: span 12;
	}
}
</style>
