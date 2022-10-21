import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() =>{
            tg.ready();
    },[])



    return(
        <div className="App">
                <h1>Work</h1>
            <button onClick={onToggleButton}>Close</button>
        </div>
    )
}

export default App;
