import AddtodoForm from "./AddtodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer()
{
const [activityArr, setActivityArr] = useState([
    {
        id: 1,
        activity: "Go for a Walk"
    },
    {
        id: 2,
        activity: "Have a breakfast"
    },
    {
        id: 3,
        activity: "Go to Office"
    }
])

    return(
        <div>
            <div className="flex gap-4 flex-wrap">
                <AddtodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
         
          
          </div>
        </div>
    )
}

export default TodoContainer