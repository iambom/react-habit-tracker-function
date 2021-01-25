import React, { memo } from 'react';

const Form = memo(props => {
    console.log(props)
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Enter your habit"/>
            <button className="button button-color">Add</button>
        </form>
  )
});
export default Form;
