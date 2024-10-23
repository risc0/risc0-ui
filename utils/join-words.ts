const DONT_FORMAT_THESE_WORDS = [
  "INSN",
  "OS",
  "CUDA",
  "ID",
  "RISC",
  "RTX",
  "NVIDIA",
  "CPU",
  "URL",
  "ETH",
  "BTC",
  "AVAX",
];
const DONT_FORMAT_THESE_WORDS_LOWERCASE = DONT_FORMAT_THESE_WORDS.map((word) => word.toLowerCase());

export function joinWords(str: string): string {
  if (!str) {
    return "";
  }

  // Insert a space before each uppercase letter that is not at the start of the string or after another uppercase letter
  const formattedString = str.replace(/(?<=[a-z])(?=[A-Z])/g, " ");
  const wordsList = formattedString.split(/[\s-_\/\\.,]/); // Remove spaces, hyphens, underscores, slashes, backslashes, dots, and commas

  const formattedWords = wordsList.map((word) => {
    const lowerCaseWord = word.toLowerCase();
    const index = DONT_FORMAT_THESE_WORDS_LOWERCASE.indexOf(lowerCaseWord);

    if (index !== -1) {
      return DONT_FORMAT_THESE_WORDS[index] ?? "";
    }

    return word;
  });

  return formattedWords.join(" ");
}
