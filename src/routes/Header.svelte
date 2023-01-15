<script>
	import { page } from '$app/stores';

	let nav = [
		{ title: 'About', path: '/about' },
		{ title: 'Test', path: '/test' },
		{ title: 'Posts', path: '/post' }
	];
</script>

<header>
	<nav class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">App</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#each nav as n}
					<li>
						<a href={n.path} class:active={$page.url.pathname === n.path}>
							{n.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
