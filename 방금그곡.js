// 1분당 음 하나

function solution(m, musicinfos) {
  var answer = "(none)";
  for (let info of musicinfos) {
    let [start, end, title, melody] = info.split(",");
    // console.log(start, end, title, melody)
    let [sh, sm] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);
    let playing = eh * 60 + em - (sh * 60 + sm);
    // console.log(playing)
    let playingMelody = "";
    for (let i = 0; i < playing; i++) {
      playingMelody += melody[i % melody.length];
    }
    // console.log(playingMelody)
    if (playingMelody.includes(m)) {
      if (m.length < playing) answer = title;
    }
  }
  return answer;
}
// 틀린경우가 있음
// ABC 일 경우 ABC#은 오답인데 답이 되어버림
// 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 조건 적용해야함
// 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다

// 1분당 음 하나

function solution(m, musicinfos) {
  var answer = "(None)";
  const replace = (v) => {
    return v
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");
  };
  m = replace(m);
  let maxt = 0;
  for (let info of musicinfos) {
    let [start, end, title, melody] = info.split(",");
    // console.log(start, end, title, melody)
    melody = replace(melody);
    let [sh, sm] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);
    let playing = eh * 60 + em - (sh * 60 + sm);
    // console.log(playing)
    let playingMelody = "";
    for (let i = 0; i < playing; i++) {
      playingMelody += melody[i % melody.length];
    }
    // console.log(playingMelody)
    if (playingMelody.includes(m)) {
      if (maxt < playing) {
        maxt = playing;
        answer = title;
      }
    }
  }
  return answer;
}
// 테스트 34번 실패
// 질문하기를 보니 테스트 케이스 34번은 #B와 #E에 대한 처리가 있어야합니다. [코드없음] ..........
function solution(m, musicinfos) {
  var answer = "(None)";
  const replace = (v) => {
    return v
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/B#/g, "b")
      .replace(/E#/g, "e")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");
  };
  m = replace(m);
  let maxt = 0;
  for (let info of musicinfos) {
    let [start, end, title, melody] = info.split(",");
    // console.log(start, end, title, melody)
    melody = replace(melody);
    let [sh, sm] = start.split(":").map(Number);
    let [eh, em] = end.split(":").map(Number);
    let playing = eh * 60 + em - (sh * 60 + sm);
    // console.log(playing)
    let playingMelody = "";
    for (let i = 0; i < playing; i++) {
      playingMelody += melody[i % melody.length];
    }
    // console.log(playingMelody)
    if (playingMelody.includes(m)) {
      if (maxt < playing) {
        maxt = playing;
        answer = title;
      }
    }
  }
  return answer;
}
// b,e를 넣으니 진짜 해결됨 세상에나

//todo 배열로 풀었을 시 테스트케이스 실패 없이 가능하다함 해보기
