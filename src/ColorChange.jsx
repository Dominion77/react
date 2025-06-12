import { useState } from "react";

function FavouriteColor(){
    const [color, setColor] = useState("red");
    const h1 = {
        color: 'rgb(165, 199, 82)',
        fontSize: '30px'
    }
    return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Green</button>
        </>
      );
}

export default FavouriteColor