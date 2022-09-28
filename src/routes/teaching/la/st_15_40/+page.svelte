<script>
	import LectureDetails from '../../../../components/LectureDetails.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let type = data.type;
</script>

<LectureDetails {type} day="wednesday" time="15:40" room="N4"></LectureDetails>
