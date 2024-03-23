// useModel.ts
export function useModel(): { model: string } {
  function isNotEmptyString(str: string): boolean {
    return str.trim().length > 0;
  }

  // Assuming process.env.OPENAI_API_MODEL is a string, we ensure the fallback to an empty string
  // for TypeScript to recognize the entire expression's result as a string.
  const modelEnvironmentVariable = process.env.OPENAI_API_MODEL || '';
  const model = isNotEmptyString(modelEnvironmentVariable) ? modelEnvironmentVariable : 'gpt-3.5-turbo';

  return { model };
}
