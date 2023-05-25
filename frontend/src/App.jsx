import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [data, setData] = useState("");

    const handleClick = () => {
        axios.get("	https://api.adviceslip.com/advice")
            .then(res => {
                // console.log(res.data);
                setData(res.data.slip)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="box">
            <div className="content">
                <div className="top">
                    <h3>A D V I C E {data && (
                        "#" + data.id
                    )}</h3>
                    <h2 className='advice'>{data ? data.advice : "Click button bellow for an advice"}</h2>
                    <hr className='line' />
                </div>
                <div className="bottom">
                    <button onClick={handleClick} className='dice'>Get more</button>
                </div>
            </div>
        </div>
    );
}

export default App;
