const emails = [
  "d@co@m.com",
  "a@abc.com",
  "b@def.com",
  "c@ghl.net",
  ".a.@a.com",
];

function solution(emails) {
  var answer = 0;

  const regExp = /^([.]?[a-z][.]?)*@([.]?[a-z][.]?)*.(com|net|org)$/i;

  for (let i = 0; i < emails.length; i++) {
    regExp.test(emails[i]) ? answer++ : answer;
  }
  return answer;
}
console.log(solution(emails));
const newEmails = emails.map((a) => a.split("@"));
const valiEmails = newEmails.map((a) => a.filter((b) => b.length < 3));
// console.log(newEmails, valiEmails);
