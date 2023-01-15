<script lang="ts">
	import type { PageData } from './$types';
	import Post from './Post.svelte';

	export let data: PageData;
</script>

<h1>Posts</h1>

{#each data.posts as p}
	<Post post={p} />
{/each}