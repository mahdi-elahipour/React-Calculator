/* eslint no-eval: 0 */
import React, { useState, useRef } from 'react';
import style from './Styles/style.module.css';
import './Styles/fontStyle.css';

let s = '';
function App() {

    const inputDisplay = useRef();
    inputDisplay.length && inputDisplay.current.focus();
    const [display, setDisplay] = useState('');
    const handleChange = (e) => {
        setDisplay(e.target.value);
    }

    const handleClick = (e) => {
        let isItTrue = false;
        switch (e.target.innerHTML) {
            case '=':
                isItTrue = true;
                break;
            case 'C':
                isItTrue = true;
                break;
            case '+':
                isItTrue = true;
                break;
            case '.':
                isItTrue = true;
                break;
            case '-':
                isItTrue = true;
                break;
            case '*':
                isItTrue = true;
                break;
            case '/':
                isItTrue = true;
                break;
            default: isItTrue = false;
        }

        if (!isNaN(e.target.innerHTML) || isItTrue === true) {
            if (e.target.innerHTML !== '=') {
                if (e.target.innerHTML !== 'C') {

                    s += e.target.innerHTML;

                    setDisplay(s)

                }
                else {
                    setDisplay('')
                    s = '';
                }

            }
            else if (e.target.innerHTML === '=' && inputDisplay.current.value) {
                let result = eval(display);
                setDisplay(result)
                s = result;
            }
        }
    }
    return (
        <div>
            <div onClick={e => handleClick(e)} className={style.calculator}>
                <div>
                    <input placeholder='0' readOnly ref={inputDisplay} className={display && display.length > 16 ? style.decFontSize : style.displayInput} type='text' value={display} onChange={handleChange} />
                </div>
                <div className={style.keyBoard}>
                    <div className={style.keyPanel}>
                        <div id={style.keys}>
                            <div className={style.key}>7</div>
                            <div className={style.key}>8</div>
                            <div className={style.key}>9</div>
                            <div className={style.key}>4</div>
                            <div className={style.key}>5</div>
                            <div className={style.key}>6</div>
                            <div className={style.key}>1</div>
                            <div className={style.key}>2</div>
                            <div className={style.key}>3</div>
                            <div id='clear' className={`${style.key} ${style.clear}`}>C</div>
                            <div className={style.key}>0</div>
                            <div className={style.key}>.</div>
                        </div>
                    </div>
                    <div className={style.operatorPanel}>
                        <div id={style.operators}>
                            <div className={`${style.key} ${style.operator}`}>+</div>
                            <div className={`${style.key} ${style.operator}`}>-</div>
                            <div className={`${style.key} ${style.operator}`}>/</div>
                            <div className={`${style.key} ${style.operator}`}>*</div>
                        </div>
                    </div>
                </div>
                <div className={style.resultKey}>=</div>
            </div>
        </div>
    );
}

export default App;