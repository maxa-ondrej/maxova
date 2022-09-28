<script>
    import LectureDetails from '../../../../components/LectureDetails.svelte';

    /** @type {import('./$types').PageData} */
	export let data;
	let type = data.type;
</script>

<LectureDetails {type} day="thursday" time="12:20" room="N7" pdfs={[
    {id: 'c01', label: 'Cvičení 1'}
]}/>
