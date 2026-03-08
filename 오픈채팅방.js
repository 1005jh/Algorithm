// Enter, Leave, Change
// 공백으로 분리 행위,유저아이디,닉네임
// 닉이 변경되면 과거 메시지 닉네임도 변경
// 유저 아이디로 저장

function solution(record) {
  var answer = [];
  let nicknames = new Map();
  let actions = [];
  for (let i of record) {
    const [action, userid, nickname] = i.split(" ");
    if (action === "Enter" || action === "Change")
      nicknames.set(userid, nickname);
    if (action === "Leave" || action === "Enter")
      actions.push([action, userid]);
  }
  // console.log(actions,nicknames)
  for (let [action, userid] of actions) {
    const nick = nicknames.get(userid);
    if (action === "Enter") answer.push(`${nick}님이 들어왔습니다.`);
    else answer.push(`${nick}님이 나갔습니다.`);
  }
  return answer;
}
