import {ChangeEvent, ReactElement, useState} from "react";
import {Card} from "primereact/card";
import {InputNumber} from "primereact/inputnumber";

export default function Converter(): ReactElement {
    const [units, setUnits] = useState<string[]>([]);
    
    function onTempChanged(e: ChangeEvent) {

    }

    return (
        <>
            <Card className="w-full" title="Temperature Converter">
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                    <label htmlFor="temperature" className="p-hidden-accessible">Temperature</label>
                    <InputNumber
                        onChange={onTempChanged}
                        id="temperature"
                        placeholder="Temperature"
                        className="mr-2"
                        value={98}/>
                </div>
            </Card>
        </>
    )
}