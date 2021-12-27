<script lang="ts">
  import { slide } from 'svelte/transition'
  import { addPool } from '../storage.js'
  import type { poolFormData } from '../types'

  export let showList
  const handleSubmit = ({ target }: Event): void => {
    const data: FormData = new FormData(<HTMLFormElement>target)
    const question = data.get('question')
    const answer1 = data.get('answer1')
    const answer2 = data.get('answer2')

    const pool: poolFormData = {
      question: <string>question,
      answer1: { value: <string>answer1, count: 0 },
      answer2: { value: <string>answer2, count: 0 }
    }
    addPool(pool)
    showList = true
  }
</script>

<section transition:slide>
  <h2>Create</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="question">Question</label>
    <input id="question" name="question" required />
    <label for="answer1">Answer1</label>
    <input id="answer1" name="answer1" required />
    <label for="answer2">Answer2</label>
    <input id="answer2" name="answer2" required />
    <button type="submit">Add pool</button>
  </form>
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
</style>
