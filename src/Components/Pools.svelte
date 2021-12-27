<script>
  import { username } from '../stores'
  import PoolsCreate from './PoolsCreate.svelte'
  import PoolsList from './PoolsList.svelte'

  let showList = true
</script>

<h1>Hello {$username}</h1>
<button on:click={() => (showList = true)}>Your pools</button>
<button on:click={() => (showList = false)}>Create pool</button>
{#if showList}
  <PoolsList />
{:else}
  <PoolsCreate />
{/if}
