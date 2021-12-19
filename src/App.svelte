<script lang="ts">
  import LoginForm from './Components/LoginForm.svelte'
  import Questionnaire from './Components/Questionnaire.svelte'
  let authenticated = true
</script>

<h1>Questionnaire</h1>
{#if authenticated}
  <Questionnaire />
{:else}
  <LoginForm bind:authenticated />
{/if}

<style>
</style>
