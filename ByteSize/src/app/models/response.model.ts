export interface Response {
  response_code: number,
  results: {
    category: string,
    type: string,
    difficulty: string,
    questions: string,
    correct_answer: string,
    // incorrect_answers: {

    // }
  }
}
