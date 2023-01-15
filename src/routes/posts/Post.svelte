<script lang="ts">
	import type { Post } from 'src/schema';
	export let post: Post;
</script>

<div class="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p>{post.body}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Read more</button>
		</div>
	</div>
</div>
