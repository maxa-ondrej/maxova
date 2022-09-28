<script>
	import LectureDetails from '../../../../components/LectureDetails.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let name = data.name;
</script>

<LectureDetails {name} day="v pondělí" time="14:00" room="N7"></LectureDetails>
