<script lang="ts">
  import LoginForm from './Components/LoginForm.svelte'
  import Pools from './Components/Pools.svelte'
  let authenticated = true
</script>

{#if authenticated}
  <Pools />
{:else}
  <LoginForm bind:authenticated />
{/if}

<style>
</style>
