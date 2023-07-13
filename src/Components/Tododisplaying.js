const SetResutData = ({ todoItem }) => {
    return (
         <section className="SetResutData SectionDataSet">
             <h3 className="TodoName">{todoItem}</h3>
             <button className="deleteBtn">Done</button>
         </section>
    );
}
 
export default SetResutData;