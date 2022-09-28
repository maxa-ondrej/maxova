<script>
    import DarkModeToggle from "./DarkModeToggle.svelte";
    import {_} from "svelte-i18n";
    import LanguageToggle from "./LanguageToggle.svelte";
    import {route} from "$lib/url";
</script>

<nav class="navbar">
    <div class="container">
        <!-- NAVIGATION MENU -->
        <ul class="nav-links">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle"/>
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <!-- NAVIGATION MENUS -->
            <div class="menu">
                <li><a href={route()}>{$_('nav.home')}</a></li>
                <li><a href={route('/teaching')}>{$_('nav.teaching')}</a></li>
                <li class="end"><DarkModeToggle/></li>
                <li><LanguageToggle /></li>
            </div>
        </ul>
    </div>
</nav>

<style lang="scss">
  li {
    list-style: none;
  }

  /* NAVBAR STYLING STARTS */
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    color: var(--primary-text);
  }

  .nav-links a {
    color: var(--primary-text);
    text-decoration: none;
  }

  /* NAVBAR MENU */
  .menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
  }

  .menu li:hover {
    background-color: var(--primary-variant);
    transition: 0.3s ease;
  }

  .menu li {
    a {
      display: inline-block;
      padding: 14px;
    }

    &.end {
      margin-left: auto;
    }
  }

  /*RESPONSIVE NAVBAR MENU STARTS*/
  /* CHECKBOX HACK */
  input[type=checkbox] {
    display: none;
  }

  /*HAMBURGER MENU*/
  .hamburger {
    padding: 14px;
    display: none;
    font-size: 24px;
    user-select: none;
    cursor: pointer;
  }

  /* APPLYING MEDIA QUERIES */
  @media (max-width: 768px) {
    .menu {
      display: none;
      position: absolute;
      background-color: var(--primary);
      right: 0;
      left: 0;
      text-align: center;
      padding: 16px 0;
    }
    .menu li:hover {
      display: inline-block;
      background-color: var(--primary-variant);
      transition: 0.3s ease;
    }
    .menu li + li {
      margin-top: 12px;
    }
    input[type=checkbox]:checked ~ .menu {
      display: block;
    }
    .hamburger {
      display: block;
    }
    .dropdown {
      left: 50%;
      top: 30px;
      transform: translateX(35%);
    }
    .dropdown li:hover {
      background-color: #4c9e9e;
    }
  }
</style>