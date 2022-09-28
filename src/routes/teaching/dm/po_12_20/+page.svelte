<script>
	import LectureDetails from '../../../../components/LectureDetails.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let type = data.type;
</script>

<LectureDetails {type} day="monday" time="12:20" room="N5"></LectureDetails>
