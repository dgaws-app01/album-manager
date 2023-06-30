import React from "react";
import {hooks} from '../data/stores/masterStore.js'

export const TestComponent2 = (params) => {
        const {Todo} = hooks.stor
        console.log(`TestComponent2 / ${new Date().getTime()} `)
        return <>
                <div>---- Test Comp 2 ---- </div>
                <div>{Todo.todos[0].id}</div>
        </>
}