// Removes specified number of lines from the beginning and/or end of the given code.
export function removeLines({
  code,
  linesMatching = [],
  linesToRemoveFromStart = 0,
  linesToRemoveFromEnd = 0,
}) {
  const lines = code.split("\n");
  if (linesMatching.length > 0) {
    linesMatching.forEach((line) => {
      let index = lines.indexOf(line);
      while (index > -1) {
        lines.splice(index, 1);
        index = lines.indexOf(line);
      }
    });
  }
  lines.splice(0, linesToRemoveFromStart);
  lines.splice(lines.length - linesToRemoveFromEnd, linesToRemoveFromEnd);
  return lines.join("\n");
}
