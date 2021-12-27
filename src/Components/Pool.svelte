<script lang="ts">
  import { Answer } from '../types'
  export let handlePoolDelete: (poolName: string) => void
  export let handlePoolVote: (answer: string, poolName: string) => void
  export let question: string, answer1: Answer, answer2: Answer

  let allVotes: number
  $: allVotes = answer1.count + answer2.count
</script>

<section class="votes">
  <p>
    Question: {question} <button on:click={() => handlePoolDelete(question)}>X</button>
  </p>
  <h3>Vote</h3>
  <button class="vote" on:click={() => handlePoolVote('answer1', question)}
    >{answer1.value}
    <progress value={answer1.count / allVotes || 0}>.</progress>{Math.round(
      (answer1.count / allVotes) * 100 * 100
    ) / 100 || 0}</button
  >
  <button class="vote" on:click={() => handlePoolVote('answer2', question)}
    >{answer2.value}
    <progress value={answer2.count / allVotes || 0}>.</progress>{Math.round(
      (answer2.count / allVotes) * 100 * 100
    ) / 100 || 0}</button
  >
</section>

<style>
  section {
    border: 1px solid black;
    margin-bottom: 10px;
  }
  .votes {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 5px;
  }
  .vote {
    border: none;
    cursor: pointer;
  }
</style>
