<script lang="ts">
	import { dataset_dev } from 'svelte/internal';
	import type { PageData } from './$types';
	import Post from './Post.svelte';

	export let data: PageData;
</script>

<h1>Posts</h1>

<ul>
{#each data.posts as p}
	<Post post={p} />
{/each}
</ul>