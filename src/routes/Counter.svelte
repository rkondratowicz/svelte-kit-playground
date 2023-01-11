<script lang="ts">
	let count = 0;
</script>

<div>
	<button on:click={() => (count -= 1)}> - </button>

	<div>
		<strong>{count}</strong>
	</div>

	<button on:click={() => (count += 1)}> + </button>
</div>
