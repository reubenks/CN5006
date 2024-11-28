import './App.css'

function GreetingElement ()
{
    const greeting = "Hello Function Component"
    return( 
            <div classname="app">
                <h1>
                    {greeting}
                </h1>
            </div>
        )
}
export default GreetingElement