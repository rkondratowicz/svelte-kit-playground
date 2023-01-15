<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main class="max-w-screen-xl mx-auto px-5">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
