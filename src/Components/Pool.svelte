<script lang="ts">
  import { Answer } from '../types'
  import { createEventDispatcher } from 'svelte'

  export let question: string, answer1: Answer, answer2: Answer
  const dispatch = createEventDispatcher()

  const handleVote = (answer: string, poolName: string): void => {
    dispatch('pool-vote', {
      poolName: poolName,
      answer: answer
    })
  }
  const handleDelete = (poolName: string): void => {
    dispatch('pool-delete', {
      poolName: poolName
    })
  }
  let allVotes: number
  $: allVotes = answer1.count + answer2.count
</script>

<section class="votes">
  <p>
    Question: {question} <button on:click={() => handleDelete(question)}>X</button>
  </p>
  <h3>Vote</h3>
  <button class="vote" on:click={() => handleVote('answer1', question)}
    >{answer1.value}
    <progress value={answer1.count / allVotes || 0}>.</progress>{Math.round(
      (answer1.count / allVotes) * 100 * 100
    ) / 100 || 0}</button
  >
  <button class="vote" on:click={() => handleVote('answer2', question)}
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
