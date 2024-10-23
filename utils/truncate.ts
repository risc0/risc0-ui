const MAX_LAST_CHUNK_LENGTH = 4;

export const truncate = (text: string, chars = 9): string => {
  if (chars >= text.length) {
    return text;
  }

  if (chars < MAX_LAST_CHUNK_LENGTH * 2) {
    const firstChunk = text.slice(0, Math.max(0, Math.round(chars / 2)));
    const lastChunk = text.slice(-Math.floor(chars / 2));

    return `${firstChunk}…${lastChunk}`;
  }

  const firstChunk = text.slice(0, Math.max(0, chars - MAX_LAST_CHUNK_LENGTH));
  const lastChunk = text.substr(text.length - MAX_LAST_CHUNK_LENGTH, chars);

  return `${firstChunk}…${lastChunk}`;
};
