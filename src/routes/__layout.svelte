<div id="app">
	<header class="header">
		<h1 class="header__logo">
			<span>paste</span><span class="subheading">.io</span>
		</h1>
	</header>
	<main class="main">
		<slot />
	</main>
	<footer class="footer">
		<div class="footer__author">
			<a class="button" href="https://danielvondra.tk">&copy; crasty</a>
		</div>
	</footer>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<style lang="scss" global>
	@use 'src/lib/scss';

	.header {
		&__logo {
			// font-size: 2rem;
			text-transform: uppercase;
		}
	}
</style>