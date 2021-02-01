// Code Keypad Component Here
function Keypad() {

    function change() {
        console.log('Entering password...')
    }

    return (
        <input type="password" onChange={change}/>
    )
}

export default Keypad;