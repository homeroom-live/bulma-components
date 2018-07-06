export default function interleave<T, U>(base: T[], elements: U[]): (T | U)[] {
  return elements.reduce(
    (array, element, index) => {
      return [...array, element, base[index + 1]]
    },
    [base[0]],
  )
}
