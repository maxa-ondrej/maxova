<script lang="ts">
	export let name;
	export let day;
	export let time;
	export let room;
</script>

<h2>Vítejte na stránce cvičení k {name} {day} ve {time} v {room}</h2>
<div class="contact">
	<p>Pokud máte jakýkoli problém, například</p>
	<ul>
		<li>něčemu nerozumíte</li>
		<li>jste dlouhodobě nemocni</li>
		<li>nemůžete se zúčastnit testu</li>
	</ul>
	<p>
		napište mi na <a class="a primary" href="mailto:maxova@kam.mff.cuni.cz"
			>maxova@kam.mff.cuni.cz</a
		>
	</p>
	<p>Váš problém půjde určitě nějak vyřešit.</p>
</div>

<div>
	<p class="info">
		Zde se budou v průběhu semestru objevovat veškeré informace a materiály k tomuto cvičení.
	</p>
</div>

<slot />

<style lang="scss">
	ul {
		margin-left: 30px;
	}
	div {
		margin-top: 15px;
	}

	p.info {
		display: inline-block;
		background-color: var(--secondary);
		padding: 10px 10px;
		font-weight: bold;
	}
</style>
