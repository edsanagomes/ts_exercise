/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold // Remove the numbers that are below the limit
(array: number[], threshold: number): number[] | [] {
  return array.filter((number) => number >= threshold);
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  return array.filter((word) =>
    word.length >= minLength && word.length <= maxLength
  );
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  return string.replace(/[^a-z]/g, "");
}
