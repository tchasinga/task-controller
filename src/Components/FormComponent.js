
const FormStystem = ({todo,setTodo,todoList, setTodoList}) => {
    const handleChange = (event) => {
        setTodo(event.target.value); 
    }
    // function to handle form submission and add new todo item in the list array
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todo]);
        console.log(todoList);
    }

    return (
       <section className="SectionDataSet">
         <div className="ChangingColor">
             <form action="" onSubmit={handleFormSubmit}>
                <input value={todo} type="text" onChange={handleChange} className="GetTexting" placeholder="Set your days tas here" required maxLength={500}/>
                <button type="submit" className="GetButton">Submit</button>
             </form>
        </div>
       </section>
    );
}
 
export default FormStystem;