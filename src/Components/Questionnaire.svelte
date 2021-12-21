<script lang="ts">
  import { username } from '../store'
  import Select from './Inputs/Select.svelte'
  import {
    backendLanguage,
    frontFrameworks,
    frontOrBackSelect
  } from '../questionnaire_data'
  import type { Answer } from '../types/question'
  import { QuestionWithAnswer } from '../types/question'
  import RangeInput from './Inputs/RangeInput.svelte'

  let firstSelectValue: Answer
  let secondSelectFrontendValue: Answer
  let secondSelectBackendValue: Answer
  let firstRangeInput = 0

  const handleForm = (): void => {
    const firstAnswer: QuestionWithAnswer = {
      question: frontOrBackSelect.text,
      answer: firstSelectValue.text
    }
    const secondAnswer: QuestionWithAnswer =
      firstAnswer.answer === 'Frontend'
        ? { question: frontFrameworks.text, answer: secondSelectFrontendValue.text }
        : { question: backendLanguage.text, answer: secondSelectBackendValue.text }
    const thirdAnswer: QuestionWithAnswer = {
      question: 'Years of experience: ',
      answer: firstRangeInput
    }
    console.log(firstAnswer)
    console.log(secondAnswer)
    console.log(thirdAnswer)
  }
</script>

<h3>Hello {$username}</h3>

<form on:submit|preventDefault={handleForm}>
  <Select question={frontOrBackSelect} bind:selected={firstSelectValue} />

  {#if firstSelectValue && firstSelectValue.text === 'Frontend'}
    <Select question={frontFrameworks} bind:selected={secondSelectFrontendValue} />
  {:else if firstSelectValue && firstSelectValue.text === 'Backend'}
    <Select question={backendLanguage} bind:selected={secondSelectBackendValue} />
  {/if}
  <RangeInput question={'Years of experience'} bind:inputValue={firstRangeInput} />
  <p><button type="submit">Submit</button></p>
</form>
