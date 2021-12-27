<script lang="ts">
  import LoginForm from './Components/LoginForm.svelte'
  import Pools from './Components/Pools.svelte'
  import { username } from './stores.js'
</script>

{#if $username}
  <Pools />
{:else}
  <LoginForm />
{/if}

<style>
</style>
