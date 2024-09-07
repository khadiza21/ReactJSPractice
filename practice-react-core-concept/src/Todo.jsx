// conditional rendering option 1

// export default function Todo({task,isDone}) {
//     if (isDone === true) {
//         return <li>Finis : {task}</li>
//     }
//     else {
//         return <li>Work On : {task}</li>
//     }
// }

// conditional rendering option 2

// export default function Todo({task,isDone}) {
//     if (isDone) {
//         return <li>Finis : {task}</li>
//     }
//     return <li>Work On : {task}</li>
// }


// conditional rendering 3 
// export default function Todo({task,isDone}) {

//     return( <li>{isDone ? 'Finished ': 'work on'} :{task}</li>)
// }


// conditional rendering 4
// export default function Todo({task,isDone}) {<li>Work on : {task}</li>
//     return( <li> {task} {isDone  &&  ': Do it'}</li>)
// }


// conditional rendering 5
// export default function Todo({task,isDone}) {
//     return( <li> {task} {isDone  ||  ': Do it'}</li>)
// }

// conditional rendering 6
export default function Todo({task,isDone}) {
    let listItem;
    if(isDone){
        listItem = <li>Work on : {task}</li>
    }else{
 listItem = <li>Work on : {task}</li>
    }
    return listItem
}


