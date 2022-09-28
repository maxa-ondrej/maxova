<script>
    import LectureCard from "../../components/LectureCard.svelte";
    import {_} from "svelte-i18n";
</script>

<LectureCard name={$_('lectures.discrete_mathematics')} id="NDMI002" day={$_('days.monday')} time="12:20" room="N5" link="12509" />
<LectureCard name={$_('lectures.discrete_mathematics')} id="NDMI002" day={$_('days.monday')} time="15:40" room="N5" link="12509" />
<LectureCard name={$_('lectures.discrete_mathematics')} id="NDMI002" day={$_('days.thursday')} time="14:00" room="N7" link="12509" />
<LectureCard name={$_('lectures.discrete_mathematics')} id="NMIN105" day={$_('days.wednesday')} time="14:00" room="N2" link="12509" />
<LectureCard name={$_('lectures.linear_algebra_1')} id="NMAI057" day={$_('days.monday')} time="14:00" room="N7" link="12509" />
<LectureCard name={$_('lectures.linear_algebra_1')} id="NMAI057" day={$_('days.wednesday')} time="15:40" room="N4" link="12509" />
<LectureCard name={$_('lectures.linear_algebra_1')} id="NMAI057" day={$_('days.thursday')} time="12:20" room="N7" link="12509" />