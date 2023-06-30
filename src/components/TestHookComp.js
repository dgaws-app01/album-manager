import React, {useState} from "react";


export const TestHookComp = (params) => {
        //const {Todo} = hooks.stor
        const [no, setNo] = useState(0)
        let incr = (e) => setNo((n)=> n+1)
        console.log(`TestHookComp / ${new Date().getTime()} `)
        return <>
                <div>---- TestHookComp ---- </div>
                //<div>{no}</div>
                <button onClick={(e)=> incr()}>Incr</button>
        </>
}