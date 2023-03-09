import "./Calculator.css";
import React, { useState } from "react";

export default function Calculator() {

    var [res, setRes] = useState("");

    function handleSubmit(event) {
        let num = 0;
        num = event.target.value;
        setRes(res + num);
    }

    function result() {
        let qwe = res.split("");
        let a = '';
        let ope = '';
        let val = 0;

        for (let i = 0; i < qwe.length; i++) {
            if (qwe[i] != '+' && qwe[i] != '-' && qwe[i] != '*' && qwe[i] != '/') {
                a = a + qwe[i];
            } else if (qwe[i] === '+' || qwe[i] === '-' || qwe[i] === '*' || qwe[i] === '/') {
                ope = ope + qwe[i] + ' ';
                a = a + ' ';
            }
        }
        let a1 = a.split(' ')
        let oprt = ope.split(' ')
        oprt.pop()

        for (let i = 0; i < oprt.length; i++) {
            if (oprt[i] === "/") {
                val = a1[i] / a1[i + 1]
                a1.splice(i, 2, val)
                oprt.splice(i, 1)
                i--
            }
        }

        for (let i = 0; i < oprt.length; i++) {
            if (oprt[i] === "*") {
                val = a1[i] * a1[i + 1]
                a1.splice(i, 2, val)
                oprt.splice(i, 1)
                i--
            }
        }

        for (let i = 0; i < oprt.length; i++) {
            if (oprt[i] === "+") {
                if (i >= 1) {
                    val = -Number(a1[i]) + Number(a1[i + 1])
                    a1.splice(i, 2, -val)
                    oprt.splice(i, 1)
                    i--
                } else {
                    val = Number(a1[i]) + Number(a1[i + 1])
                    a1.splice(i, 2, val)
                    oprt.splice(i, 1)
                    i--
                }
            }
        }

        for (let i = 0; i < oprt.length; i++) {
            if (oprt[i] === "-") {
                val = a1[i] - a1[i + 1]
                a1.splice(i, 2, val)
                oprt.splice(i, 1)
                i--
            }
        }
        setRes(val);
    }

    function clear() {
        setRes("")
    }

    return (
        <div id="container">
            <div id="calulator">
                <table border="1" cellPadding="15" cellSpacing="18">
                    <tr>
                        <td colSpan="4"><input type="text" id="display" value={res} disabled /></td>
                    </tr>
                    <tr>
                        <td><input className="operator" type="button" value="+" onClick={handleSubmit} /></td>
                        <td><input className="operator" type="button" value="-" onClick={handleSubmit} /></td>
                        <td><input className="operator" type="button" value="*" onClick={handleSubmit} /></td>
                        <td><input className="operator" type="button" value="/" onClick={handleSubmit} /></td>
                    </tr>
                    <tr>
                        <td><input className="digit" type="button" value={7} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={8} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={9} onClick={handleSubmit} /></td>
                        <td rowSpan="4"><input id="result" type="button" value="=" onClick={result} /></td>
                    </tr>
                    <tr>
                        <td><input className="digit" type="button" value={4} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={5} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={6} onClick={handleSubmit} /></td>
                    </tr>
                    <tr>
                        <td><input className="digit" type="button" value={1} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={2} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value={3} onClick={handleSubmit} /></td>
                    </tr>
                    <tr>
                        <td><input className="digit" type="button" value={0} onClick={handleSubmit} /></td>
                        <td><input className="digit" type="button" value="." onClick={handleSubmit} /></td>
                        <td><input className="digit" id="clear" type="button" value="AC" onClick={clear} /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}