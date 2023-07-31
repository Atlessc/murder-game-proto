import './ColorSetTesterComp.css';
import { useState } from 'react';

function ColorSetTesterComp() {

    const [colorState, setColorState] = useState("ColorSet1");

    const ColorState = colorState;

    const ToggleColorSet1 = () => {
        setColorState('ColorSet1');
    };

    const ToggleColorSet2 = () => {
        setColorState('ColorSet2');
    };

    const ToggleColorSet3 = () => {
        setColorState('ColorSet3');
    };

    const ToggleColorSet4 = () => {
        setColorState('ColorSet4');
    };

    const ToggleColorSet5 = () => {
        setColorState('ColorSet5');
    };

    const ToggleColorSet6 = () => {
        setColorState('ColorSet6');
    };

    const ToggleColorSet7 = () => {
        setColorState('ColorSet7');
    };

    const ToggleColorSet8 = () => {
        setColorState('ColorSet8');
    };

    const ToggleColorSet9 = () => {
        setColorState('ColorSet9');
    };



    return (
        <>
            <div className='CSTBtnContainer'>
                <div className='ColorSetTesterBtn' id="set1" onClick={ToggleColorSet1}>Set1</div>
                <div className='ColorSetTesterBtn' id="set2" onClick={ToggleColorSet2}>Set2</div>
                <div className='ColorSetTesterBtn' id="set3" onClick={ToggleColorSet3}>Set3</div>
                <div className='ColorSetTesterBtn' id="set4" onClick={ToggleColorSet4}>Set4</div>
                <div className='ColorSetTesterBtn' id="set5" onClick={ToggleColorSet5}>Set5</div>
                <div className='ColorSetTesterBtn' id="set6" onClick={ToggleColorSet6}>Set6</div>
                <div className='ColorSetTesterBtn' id="set7" onClick={ToggleColorSet7}>Set7</div>
                <div className='ColorSetTesterBtn' id="set8" onClick={ToggleColorSet8}>Set8</div>
                <div className='ColorSetTesterBtn' id="set9" onClick={ToggleColorSet9}>Set9</div>

            </div>
            <div className={`ColorSets ${colorState}`}>
                <div className={`ColorBox c1`}></div>
                <div className={`ColorBox c2`}></div>
                <div className={`ColorBox c3`}></div>
                <div className={`ColorBox c4`}></div>
                <div className={`ColorBox c5`}></div>
            </div>
        </>
    )
};

export default ColorSetTesterComp