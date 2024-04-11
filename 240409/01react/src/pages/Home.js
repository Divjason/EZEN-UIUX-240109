import Editor from "../component/Editor";

const Home = () => {
  return (
    <div>
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성한 일기",
        }}
        onSubmit={() => {
          alert("작성 완료 버튼을 클릭했음");
        }}
      />
    </div>
  );
};

export default Home;
