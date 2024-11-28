import './App.css'

function Lab(props)
{
    function Addition()
    {
        const addition = Number(props.n1) + Number(props.n2)
        alert(props.n1 + " + " + props.n2 + " = " + addition)
    }

    return (
        <div>
            <h2>Add 2 Numbers function</h2>
            <p>{props.n1} + {props.n2} = <button onClick={Addition}>Calculate</button></p>

        </div>
    );
}

export default Lab