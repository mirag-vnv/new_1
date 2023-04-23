export default function Counter (){

    let count = 0

    const[count, setcount]= React.useState(0)

function incrementCounter()
    count = count + 1
    console.log(Count)
}

    function incrementCounter(){
         console.log("incrementCounter")
    }
    return (
        <div>
            <h1>Counter </h1>
            <h2> Current value of count is :0</h2>

            <button onClick={incrementCounter}>Click to increment</button>
        </div>
    )
}