import './App.css'
import Books from './Books'
import State from './State'
import Student from './Student'
import Todo from './Todo'
import UsersUseEffect from './UsersUseEffect'

function App() {
  const books = ['JS', 'CPP', 'Python', 'Java']
  const students = [
    { id:1, name: 'Rahima', age: 22 },
    { id:2, name: 'Jalil', age: 21 },
    { id:3, name: 'Kodom', age: 23 },
  ]

  function  handleClick (){
alert('Button Clicked')
  }

  const handleClick2 = () => {
    alert('Button 2 clicked')
  }
  return (
    <>

    <UsersUseEffect></UsersUseEffect>
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


      <h3>React core Concept 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={ () => alert('third click')}>Third</button>
   
   <State></State>

    </>
  )
}
export default App
