<script>
  export let min = 0
  export let max = 20
  export let question = undefined
  export let inputValue = undefined
</script>

<label for="experience">{question} {inputValue}</label>
<input id="experience" type="range" bind:value={inputValue} {min} {max} />
