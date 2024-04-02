import "./Body.css";

const Body = ({ name, location, favorList }) => {
  return (
    <div>
      <h1>
        {name}은 {location}에 살고 있습니다.
        <br />
        {name}은 {favorList.length}개의 최애 메뉴가 있습니다.
        <br />
        {favorList[0]}, {favorList[1]}, {favorList[2]}를 매우 사랑합니다.
      </h1>
    </div>
  );
};

Body.defaultProps = {
  favorList: ["뭘까요?", "알아맞춰보세요!", "안알려줌!"],
};

export default Body;
