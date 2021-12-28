<script lang="ts">
  import { slide } from 'svelte/transition'
  import { allStorage, deletePool, updatePool } from '../storage'
  import Pool from './Pool.svelte'
  let pools = allStorage()

  const fetchPools = () => {
    pools = allStorage()
  }

  const poolVote = (e: CustomEvent<{ answer: string; poolName: string }>): void => {
    const { answer, poolName } = e.detail
    updatePool(answer, poolName)
    fetchPools()
  }

  const poolDelete = (e: CustomEvent<{ poolName: string }>): void => {
    const { poolName } = e.detail
    deletePool(poolName)
    fetchPools()
  }
</script>

<section transition:slide>
  <h2>List</h2>
  {#each Object.values(pools) as pool (pool.question)}
    <Pool
      on:pool-delete={poolDelete}
      on:pool-vote={poolVote}
      question={pool.question}
      answer1={pool.answer1}
      answer2={pool.answer2}
    />
  {:else}
    <p>You have no pools created.</p>
  {/each}
</section>
