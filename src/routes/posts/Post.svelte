<script lang="ts">
	import type { Post } from 'src/schema';
	export let post: Post;
</script>

<h1>{post.title}</h1>
<p>{post.body}</p>
