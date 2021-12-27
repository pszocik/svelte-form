<script lang="ts">
  import { Answer } from '../types'
  export let handlePoolDelete: (poolName: string) => void
  export let handlePoolVote: (answer: string, poolName: string) => void
  export let question: string, answer1: Answer, answer2: Answer
</script>

<p>
  {question} <button on:click={() => handlePoolDelete(question)}>X</button>
</p>
<button on:click={() => handlePoolVote('answer1', question)}
  >{answer1.value} ({answer1.count})</button
>
<button on:click={() => handlePoolVote('answer2', question)}
  >{answer2.value} ({answer2.count})</button
>
