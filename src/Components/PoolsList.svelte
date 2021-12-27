<script lang="ts">
  import { slide } from 'svelte/transition'
  import { allStorage, updatePool } from '../storage'
  let pools = allStorage()

  const handlePoolVote = (answer: string, poolName: string): void => {
    updatePool(answer, poolName)
    pools = allStorage()
  }
</script>

<section transition:slide>
  <h2>List</h2>
  {#if pools}
    {#each Object.values(pools) as { question, answer1, answer2 }}
      <p>{question}</p>
      <button on:click={() => handlePoolVote('answer1', question)}
        >{answer1.value} ({answer1.count})</button
      >
      <button on:click={() => handlePoolVote('answer2', question)}
        >{answer2.value} ({answer2.count})</button
      >
    {/each}
  {/if}
</section>
