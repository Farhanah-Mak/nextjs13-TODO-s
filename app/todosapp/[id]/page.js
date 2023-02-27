import styles from './ToDoPage.module.css'


const fetchToDo = async(id) =>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return res.json()
}

async function ToDoPage({params}) {
    const id= params.id
   // console.log(id)
   const todo= await fetchToDo(id)
  return (
    <>
    
    <div className={styles.container}>
         <h3 className={styles.todotitle}>#{todo.id} : {todo.title}</h3>
        <p className={styles.iscompleted}>Completed: {todo.completed ? 'yes' : 'no'}</p>
    </div>
    </>
  )
}

export default ToDoPage