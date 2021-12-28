<script lang="ts">
  import { fly } from 'svelte/transition'
  import { Answer } from '../types'
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'

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
  $: answer1Votes = answer1.count / allVotes || 0
  $: answer2Votes = answer2.count / allVotes || 0
</script>

<section class="votes" out:fly>
  <p>
    Question: {question} <button on:click={() => handleDelete(question)}>X</button>
  </p>
  <h3>Vote</h3>
  <Button on:click={() => handleVote('answer1', question)}
    >{answer1.value}
    <progress value={answer1Votes} />
    {Math.round(answer1Votes * 100 * 100) / 100}</Button
  >
  <Button on:click={() => handleVote('answer2', question)}>
    {answer2.value}
    <progress value={answer2Votes} />
    {Math.round(answer2Votes * 100 * 100) / 100}
  </Button>
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
</style>
