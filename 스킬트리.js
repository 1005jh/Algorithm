// filter 사용

function solution(skill, skill_trees) {
  var answer = 0;
  for (let s of skill_trees) {
    let filtered = s
      .split("")
      .filter((v) => skill.includes(v))
      .join("");
    // console.log(filtered)
    if (skill.slice(0, filtered.length) === filtered) {
      answer++;
    }
  }
  return answer;
}

function solution(skill, skill_trees) {
  let answer = 0;

  for (let tree of skill_trees) {
    let idx = 0;

    for (let s of tree) {
      if (!skill.includes(s)) continue;
      if (s !== skill[idx]) break;
      idx++;
    }

    if (
      idx === skill.length ||
      skill.startsWith(tree.replace(new RegExp(`[^${skill}]`, "g"), ""))
    )
      answer++;
  }

  return answer;
}
