// Removes specified number of lines from the beginning and/or end of the given code.
export function removeLines({ code, linesToRemoveFromStart = 0, linesToRemoveFromEnd = 0 }) {
  const lines = code.split("\n");
  lines.splice(0, linesToRemoveFromStart);
  lines.splice(lines.length - linesToRemoveFromEnd, linesToRemoveFromEnd);
  return lines.join("\n");
}
