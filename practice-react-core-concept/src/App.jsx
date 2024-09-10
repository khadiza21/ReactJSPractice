import './App.css'
import HookForm from './Form/HookForm'
import RefForm from './Form/RefForm'
import SimpleForm from './Form/SimpleFrom/SimpleForm'
import StateFullForm from './Form/StateFullForm/StateFullForm'
// import CoreConcept1 from '../src/CoreConcept1/CoreConcept1'

function App() {
  
  return (
    <>
<SimpleForm></SimpleForm>
 {/* <CoreConcept1></CoreConcept1> */}
<StateFullForm></StateFullForm>
<RefForm></RefForm>
<HookForm></HookForm>
    </>
  )
}
export default App
