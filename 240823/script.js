const timeItems = document.querySelector('.timeItems');
const eventDay = new Date(2024, 7, 23, 23, 59, 59);

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor((time / 60) % 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : `${sec}`;
  min = min < 10 ? `0${min}분` : `${min}분`;
  hour = hour < 10 ? `0${hour}시간` : `${hour}시간`;

  return { hour, min, sec };
};

const createSpan = (content, className) => {
  const span = document.createElement('span');
  span.innerText = content;
  span.classList.add(className);
  return span;
};

const updateTime = () => {
  const today = new Date();
  const gapDate = Math.floor((eventDay - today) / 1000);
  const { hour, min, sec } = formatting(gapDate);

  updateUnit(timeItems, 'hour', hour); // 시간은 1시간마다 갱신
  updateUnit(timeItems, 'min', min); // 분은 1분마다 갱신
  updateUnit(timeItems, 'sec', sec); // 초는 1초마다 갱신
};

const updateUnit = (parent, unit, newValue) => {
  const unitElement = parent.querySelector(`.${unit}`);
  console.log(unitElement);

  if (unitElement) {
    const currentValue = unitElement.querySelector('.old')?.innerText;

    // 현재 값과 새로운 값이 다를 때만 애니메이션 작동
    if (currentValue !== newValue) {
      const oldSpan = unitElement.querySelector('.old');
      const newSpan = createSpan(newValue, 'new');
      unitElement.appendChild(newSpan);

      // 애니메이션 클래스 추가
      // Add animation class
      if (unit === 'sec') {
        unitElement.classList.add('updating');
      }

      // 애니메이션이 끝나면 old 요소를 제거하고 새 요소를 old로 전환
      setTimeout(() => {
        if (oldSpan) unitElement.removeChild(oldSpan);
        newSpan.classList.replace('new', 'old');
        unitElement.classList.remove('updating');
      }, 500); // 애니메이션 지속 시간과 일치해야 함
    }
  } else {
    const unitContainer = document.createElement('div');
    unitContainer.classList.add('timeItem', unit);
    unitContainer.appendChild(createSpan(newValue, 'old'));
    parent.appendChild(unitContainer);
  }
};

setInterval(updateTime, 1000); // 1초마다 updateTime 호출
