import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
