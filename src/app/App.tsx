import './App.scss'
import 'primeicons/primeicons.css';
import {ReactElement} from "react";
import Converter from "./components/converter/Converter.tsx";

function App(): ReactElement {
    return (
        <>
            <div className="flex mx-auto w-1/2 mt-10">
                <Converter/>
            </div>
        </>
    )
}

export default App
