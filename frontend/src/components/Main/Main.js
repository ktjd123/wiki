import React from 'react';
import { Link } from 'react-router-dom'
import './Main.css';


const Main = ({ testString, reducerTest }) => {

    let string = "[[[ 그래서 그게 어쨌는데? ]]]  쏼라쏼라 [[[또왜]]] <br>"
    return (
        <div>
            <div className="App">
                <h1 className="App-title">The Seed에 어서오세요</h1>
                <p className="App-intro">
                    모든 것을 이곳에서부터 시작하세요!<br />
                    Start everything from here
                </p>
                {testString}
                <div>
                    <button
                        className="btn"
                        onClick={reducerTest}>
                        REDUCER TEST
                </button>
                </div>
                <div className="title">사용된 기술들</div>
                {
                    string.split('[[[').map((inner, i) => {
                        inner = inner.replace(']]]', '')
                        if (i === 0) {
                            return (<div className='cancel'>{inner}</div>)
                        }
                        return 0;
                    })
                }
            </div>
            <Link to='/about'>About</Link>
        </div>
    )
}
export default Main;