const text = "aaabcaaabcd"
const pattern = "abc"

const match = (text: string, pattern: string) => {
  const result = []

  for (let index = 0; index < text.length - pattern.length; index++) {
    const slice = text.slice(index, index + pattern.length)

    if (slice !== pattern) continue

    result.push([index, pattern])
  }

  return result
}

const result = match(text, pattern)

console.log(result)
