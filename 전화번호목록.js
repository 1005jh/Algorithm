function solution(phone_book) {
  const set = new Set(phone_book);
  for (let number of phone_book) {
    let prefix = "";
    for (let i = 0; i < number.length - 1; i++) {
      prefix += number[i];
      if (set.has(prefix)) {
        // console.log(prefix)
        return false;
      }
    }
  }

  return true;
}

// Trie 문제라 함
function solution(phone_book) {
  const trie = {};

  for (let phone of phone_book) {
    let node = trie;

    for (let i = 0; i < phone.length; i++) {
      const char = phone[i];

      if (!node[char]) {
        node[char] = {};
      }

      node = node[char];

      if (node.isEnd) {
        return false;
      }
    }

    if (Object.keys(node).length > 0) {
      return false;
    }

    node.isEnd = true;
  }

  return true;
}

// 정렬하면 빨리 풀 순 있음
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
