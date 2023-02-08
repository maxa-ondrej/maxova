<script>
	import LectureCard from '../../components/LectureCard.svelte';
	import { _ } from 'svelte-i18n';
	import MoodleButton from '../../components/MoodleButton.svelte';
</script>

<div class="lectures">
	<LectureCard span={4} type="la2" id="NMAI058" day="monday" time="12:20" room="N7">
		<MoodleButton id="14561" slot="button" />
	</LectureCard>
	<LectureCard span={4} type="la2" id="NMAI058" day="monday" time="15:40" room="N7">
		<MoodleButton id="14561" slot="button" />
	</LectureCard>
	<LectureCard span={4} type="la2" id="NMAI058" day="wednesday" time="15:40" room="N6">
		<MoodleButton id="14561" slot="button" />
	</LectureCard>

	<LectureCard span={3} type="ma1" id="NMAI054" day="tuesday" time="12:20" room="N4">
		<MoodleButton id="14562" slot="button" />
	</LectureCard>
	<LectureCard span={3} type="ma1" id="NMAI054" day="tuesday" time="14:00" room="N5">
		<MoodleButton id="14562" slot="button" />
	</LectureCard>
	<LectureCard span={3} type="ma1" id="NMAI054" day="wednesday" time="12:20" room="N6">
		<MoodleButton id="14562" slot="button" />
	</LectureCard>
	<LectureCard span={3} type="ma1" id="NMAI054" day="wednesday" time="14:00" room="N6">
		<MoodleButton id="14562" slot="button" />
	</LectureCard>
</div>

<style lang="scss">
div.lectures {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
}
</style>