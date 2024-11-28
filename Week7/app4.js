import React, { useState ,useEffect} from "react";
import Love from './Love.png' //imports all the images
import Sad from './sad.png'
import Like from './like.png'
import Happy from './happy.png'

function EmojeeText(){
    const [input, setInput] = useState(""); //stores the txt input
    const [pic, setPic] = useState(null) //stores the image


    useEffect(()=> // function to set the img
        {
            if (input==="love") //if it equals love
            setPic(Love) //sets it to love
            else if (input==="like")
            setPic(Like)
            else if (input==="sad")
            setPic(Sad)
            else if (input==="happy")
            setPic(Happy)
            else 
            setPic(null) //if it equals none then sets it to null
        });

    const handleChange = (event) => // function to handle the the txt input changing
        {
            setInput(event.target.value);
        };


    return ( //the <input/> gets an input from the user in a text field using onchange to update it every time it changes
        <div className="App"> 
            <h1>Type "love", "sad", "like" or "happy" to display image</h1>
            <input type="text" onChange={handleChange} placeholder="Text"/> 
            <div>
                <img src={pic} style={{ height: "400px" }} />
            </div>
        </div>
    ); // <img/> displays the image in a 400px box
}

export default EmojeeText; //exports it