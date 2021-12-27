<script lang="ts">
  import { slide } from 'svelte/transition'
  import { allStorage, deletePool, updatePool } from '../storage'
  import Pool from './Pool.svelte'
  let pools = allStorage()

  const fetchPools = () => {
    pools = allStorage()
  }

  const handlePoolVote = (answer: string, poolName: string): void => {
    updatePool(answer, poolName)
    fetchPools()
  }

  const handlePoolDelete = (poolName: string): void => {
    deletePool(poolName)
    fetchPools()
  }
</script>

<section transition:slide>
  <h2>List</h2>
  {#if pools}
    {#each Object.values(pools) as pool (pool.question)}
      <Pool
        {handlePoolDelete}
        {handlePoolVote}
        question={pool.question}
        answer1={pool.answer1}
        answer2={pool.answer2}
      />
    {/each}
  {/if}
</section>
