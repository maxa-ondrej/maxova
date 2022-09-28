<script lang="ts">
	import cs from '../images/cz.png';
	import en from '../images/en.png';
	import { getLocaleFromNavigator, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	function toggle() {
		locale.update((value) => (value === 'en' ? 'cs' : 'en'));
		localStorage.setItem('locale', $locale);
	}

	function initialFetch() {
		let myLocale: string | null = localStorage.getItem('locale');
		if (myLocale === null) {
			locale.set('cs');
			localStorage.setItem('locale', myLocale ? '1' : '0');
		} else {
			locale.set(myLocale);
		}
	}

	onMount(initialFetch);
</script>

<a>
	<div class="icon">
		<img src={$locale === 'en' ? en : cs} alt={$locale} width="32" height="" />
	</div>
</a>

<style lang="scss">
	@import '../styles/colors';

	a {
		cursor: not-allowed;
		display: inline-block;
		padding: 20px 14px 0 14px;
	}
</style>
