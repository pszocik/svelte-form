<script lang="ts">
  import { Question } from '../types/question'
  export let question: Question
  export let selected = undefined
</script>

<label for="question1">{question.text}</label>
<select id="question1" bind:value={selected}>
  {#each question.answers as choice, id}
    <option value={choice}>
      {choice.text}
    </option>
  {/each}
</select>
