import { useState } from "react";


const Forms = () => {
    const [text, setText] = useState("")
    const [quantity, setQuantity] = useState(0)
    const[payment, setPayment] = useState('');
    
    

    const handleChange = (e) => setText(e.target.value);
    const quantityChange = (e) => setQuantity(e.target.value);
    
    return(
        <div>
            <div className="bg-gray-600 p-10">
            <input type="text" value={text} onChange={handleChange} style={{backgroundColor:'blue', padding:'5px'}}/>
            <p style={{fontStyle:'italic', color:'blue', fontSize:'100px', fontWeight:'bold'}}>Value:{text}</p>

            <br />
            <input type="number" value={quantity} onChange={quantityChange} />
            <p style={{fontStyle: 'italic', fontWeight: 'bold', color:"blue"}}>Quantity: {quantity}</p>

            <br />
            <p style={{fontSize:"70px"}}>Choose Payment Type</p>
            <select value={payment} onChange={(e) => setPayment(e.target.value)} style={{fontSize:'50px'}}>
                <option value= ''></option>
                <option value= 'Debit Card'>Debit Card</option>
                <option value= 'Visa Card'>Visa Card</option>
                <option value='Master Card'>Master Card</option>
            </select>
            <p style={{fontSize: '60px'}}>Your Payment type is {payment}</p>

            <label htmlFor="">
                <input type = "radio" value= "Express" checked={shipping === "Express"} onChange={handleShipping}/>
                Express
            </label>
            <label htmlFor="">
                <input type="radio" value="Standard" checked={shipping === "standard"} onChange={handleShipping}></input>
                Standard
            </label>
            <p>Shipping Method: {shipping}</p>
            </div>
        </div>
        
    )
}

export default Forms