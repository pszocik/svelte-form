import type { Question } from './types/question'

export const frontOrBackSelect: Question = {
  text: 'Are you a Frontend or a Backend developer?',
  answers: [
    { id: 1, text: 'Frontend' },
    { id: 2, text: 'Backend' }
  ]
}

export const frontFrameworks: Question = {
  text: 'Which framework do you use in your day to day job as a frontend developer?',
  answers: [
    { id: 1, text: 'Svelte' },
    { id: 2, text: 'React' },
    { id: 3, text: 'Vue' },
    { id: 4, text: 'Angular' },
    { id: 5, text: 'Other' }
  ]
}

export const backendLanguage: Question = {
  text: 'Which language do you use in your day to day job as a backend developer?',
  answers: [
    { id: 1, text: 'JavaScript' },
    { id: 2, text: 'Python' },
    { id: 3, text: 'Go' },
    { id: 4, text: 'C#' },
    { id: 5, text: 'Java' }
  ]
}
