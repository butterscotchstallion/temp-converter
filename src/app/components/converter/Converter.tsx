import {ReactElement, useCallback, useEffect, useState} from "react";
import {Card} from "primereact/card";
import {InputNumber, InputNumberChangeEvent} from "primereact/inputnumber";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {
    convertCelsiusToFahrenheit,
    convertCelsiusToKelvin,
    convertFahrenheitToCelsius,
    convertKelvinToCelsius,
    convertKelvinToFahrenheit
} from "./conversions.ts";

interface IConvertedData {
    unit: string;
    value: string;
}

export default function Converter(): ReactElement {
    const units: string[] = ["Celsius", "Fahrenheit", "Kelvin"];
    const [temp, setTemp] = useState<number>(98);
    const [convertedData, setConvertedData] = useState<IConvertedData[]>([
        {unit: "Celsius", value: 0},
        {unit: "Fahrenheit", value: 0},
        {unit: "Kelvin", value: 0},
    ]);
    const [unit, setUnit] = useState<string>("Kelvin");
    const [celsusTemp, setCelsusTemp] = useState<number>(0);
    const [fahrenheitTemp, setFahrenheitTemp] = useState<number>(0);
    const [kelvinTemp, setKelvinTemp] = useState<number>(0);

    const calculateConvertedValues: () => void = useCallback(() => {
        const currentValue: number = parseFloat(temp.toString());

        if (unit === "Celsius") {
            setCelsusTemp(currentValue);
            setFahrenheitTemp(convertCelsiusToFahrenheit(currentValue));
            setKelvinTemp(convertCelsiusToKelvin(currentValue));
        } else if (unit === "Fahrenheit") {
            setFahrenheitTemp(currentValue);
            setCelsusTemp(convertFahrenheitToCelsius(currentValue));
            setKelvinTemp(convertFahrenheitToCelsius(currentValue));
        } else if (unit === "Kelvin") {
            setKelvinTemp(currentValue);
            setCelsusTemp(convertKelvinToCelsius(currentValue));
            setFahrenheitTemp(convertKelvinToFahrenheit(currentValue));
        }

        setConvertedData([
            {unit: "Celsius", value: celsusTemp},
            {unit: "Fahrenheit", value: fahrenheitTemp},
            {unit: "Kelvin", value: kelvinTemp},
        ]);
    }, [celsusTemp, fahrenheitTemp, kelvinTemp, temp, unit]);

    function onTempChanged(e: InputNumberChangeEvent) {
        if (e.value) {
            setTemp(e.value);
        } else {
            setTemp(0);
            setCelsusTemp(0);
            setFahrenheitTemp(0);
            setKelvinTemp(0);
        }
    }

    useEffect(() => {
        calculateConvertedValues();
    }, [calculateConvertedValues, unit])

    return (
        <>
            <Card className="w-[800px] mx-auto" title="Temperature Converter">
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                    <div className="flex justify-between gap-10 w-full">
                        <section className="w-[240px] mt-4">
                            <div className="mb-4">
                                <label htmlFor="temperature" className="mb-2 block">Temperature</label>
                                <InputNumber
                                    onChange={(e: InputNumberChangeEvent) => onTempChanged(e)}
                                    id="temperature"
                                    placeholder="Temperature"
                                    className="mr-2 w-[65px]"
                                    value={temp}/>
                            </div>
                            <div>
                                <label htmlFor="unit" className="mb-2 block">Unit</label>
                                <Dropdown value={unit}
                                          onChange={(e: DropdownChangeEvent) => setUnit(e.value)}
                                          options={units}
                                          optionLabel="name"
                                          className="w-full"/>
                            </div>
                        </section>
                        <section className="w-3/4 ml-4">
                            <DataTable value={convertedData} stripedRows>
                                <Column field="unit" header="Unit"></Column>
                                <Column field="value" header="Value"></Column>
                            </DataTable>
                        </section>
                    </div>
                </div>
            </Card>
        </>
    )
}