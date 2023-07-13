import SetResutData from "./Tododisplaying";
const Todolist = ({ todoList }) => {
    return (
      <section>
        <div>
          {todoList.map((todoItem) => (
            <SetResutData todoItem={todoItem} key={todoItem.id} />
          ))}
        </div>
      </section>
    );
  }
export default Todolist;