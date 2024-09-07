import './App.css'
import Books from './Books'
import Student from './Student'
import Todo from './Todo'

function App() {
  const books = ['JS', 'CPP', 'Python', 'Java']
  const students = [
    { id:1, name: 'Rahima', age: 22 },
    { id:2, name: 'Jalil', age: 21 },
    { id:3, name: 'Kodom', age: 23 },
  ]
  return (
    <>
      <Todo
        isDone={true}
        task={'cooking'}
      ></Todo>

      {
        books.map(book => <Books name={book}></Books>)
      }
      <Books name={'React'}></Books>
      {
        students.map(student => <Student  student={student}></Student>)
      }
   

    </>
  )
}

export default App
