<script>
    import LectureCard from "../../components/LectureCard.svelte";
    import {_} from "svelte-i18n";
    import MoodleButton from "../../components/MoodleButton.svelte";
</script>

<LectureCard type="discrete_mathematics" position='1' id="NDMI002" day={$_('days.monday')} time="12:20" room="N5"/>
<LectureCard type="discrete_mathematics" position='2' id="NDMI002" day={$_('days.monday')} time="15:40" room="N5">
    <MoodleButton id="14018" slot="button"/>
</LectureCard>
<LectureCard type="discrete_mathematics" position='3' id="NDMI002" day={$_('days.thursday')} time="14:00" room="N7">
    <MoodleButton id="14018" slot="button"/>
</LectureCard>

<LectureCard type="linear_algebra_1" position='1' id="NMAI057" day={$_('days.monday')} time="14:00" room="N7"/>
<LectureCard type="linear_algebra_1" position='2' id="NMAI057" day={$_('days.wednesday')} time="15:40" room="N4"/>
<LectureCard type="linear_algebra_1" position='3' id="NMAI057" day={$_('days.thursday')} time="12:20" room="N7"/>

<LectureCard type="discrete_mathematics" position='4' id="NMIN105" day={$_('days.wednesday')} time="14:00" room="N2">
    <MoodleButton id="13820" slot="button"/>
</LectureCard>