import Link from "next/link"

const fetchToDos= async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos= await res.json()
    return todos
}

export default async function ToDoList() {
    const todos= await fetchToDos()
  return (
    <>
    {todos?.map((todo) => (
        <p key={todo.id}>
            <Link href={`/todosapp/${todo.id}`}>ToDo {todo.id}</Link>
        </p>     
    ))}
    </>
  )
}

