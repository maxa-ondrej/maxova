<script>
    import LectureDetails from "../../../../components/LectureDetails.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    let name = data.name;
</script>

<LectureDetails {name} day="ve středu" time="15:40" room="N4"/>