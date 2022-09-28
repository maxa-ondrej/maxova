<svelte:head>
    <title>{$_('profile.name')}</title>
</svelte:head>

<script lang="ts">
    import NavBar from "../components/NavBar.svelte";
    import {_, addMessages, getLocaleFromNavigator, init} from "svelte-i18n";
    import en from '../langs/en.json';
    import cs from '../langs/cs.json';

    addMessages('en', en);
    addMessages('cs', cs);

    init({
        fallbackLocale: 'cs',
        // initialLocale: getLocaleFromNavigator(),
    });
</script>

<NavBar/>
<div class="container">
    <slot/>
</div>


<style lang="scss" global>
  @import "../styles/main";

  div.container {
    margin-top: 30px;
  }
</style>