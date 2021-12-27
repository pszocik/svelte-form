interface Answer {
  value: File | string
  count: number
}

export interface poolFormData {
  question: File | string
  answer1: Answer
  answer2: Answer
}
