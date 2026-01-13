//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (sequence) => {
  const m = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  }
  let ans = ""
  for (const char of sequence) {
    ans += m[char]
  }
  return ans
};
