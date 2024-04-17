import React, { useRef, useState } from "react";

const AddGenre = React.memo(({createGenre})=>{
    const name = useRef(null)
    const save = (e)=>{
        e.preventDefault()
        console.log(name);
        createGenre({name:name.current.value, id:Date.now()})
        name.current.value=''
    }
    return (
        <div>
            <h1>Addgenre</h1>
            <form onSubmit={save}>
                <input ref={name} className="form-control"/>
                <button className="form-control btn btn-info">Save</button>
            </form>

        </div>
    )
})


export default AddGenre