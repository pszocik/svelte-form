<script lang="ts">
  import { username } from '../store'
  import Select from './Select.svelte'
  import {
    backendFrameworks,
    frontFrameworks,
    frontOrBackSelect
  } from '../questionnaire_data'
  import type { Answer } from '../types/question'
  import { QuestionWithAnswer } from '../types/question'
  let username_value: string
  username.subscribe(value => {
    username_value = value
  })

  let firstSelectValue: Answer
  let secondSelectFrontendValue: Answer
  let secondSelectBackendValue: Answer
  // $: secondSelectValue =
  //   firstSelectValue.text === 'Frontend'
  //     ? frontFrameworks.answers[0]
  //     : backendFrameworks.answers[0]

  const handleForm = (): void => {
    const firstAnswer: QuestionWithAnswer = {
      question: frontOrBackSelect.text,
      answer: firstSelectValue.text
    }
    const secondAnswer =
      firstAnswer.answer === 'Frontend'
        ? { question: frontFrameworks.text, answer: secondSelectFrontendValue.text }
        : { question: backendFrameworks.text, answer: secondSelectBackendValue.text }
    console.log(firstAnswer)
    console.log(secondAnswer)
  }
</script>

<h3>Hello {username_value}</h3>

<form on:submit|preventDefault={handleForm}>
  <Select question={frontOrBackSelect} bind:selected={firstSelectValue} />
  {#if firstSelectValue}
    {#if firstSelectValue.text === 'Frontend'}
      <Select question={frontFrameworks} bind:selected={secondSelectFrontendValue} />
    {:else}
      <Select question={backendFrameworks} bind:selected={secondSelectBackendValue} />
    {/if}
  {/if}
  <p><button type="submit">Submit</button></p>
</form>
