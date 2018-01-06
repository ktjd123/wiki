import React from 'react';
import { Link } from 'react-router-dom'
import {parser} from 'lib/parser'
import './Main.css';


const Main = ({ testString, reducerTest }) => {

    let string = "[그래서 그게 어쨌는데?] [또 왜]<br>"
    let showString = "d"
    let result = parser.get(string, "[", "]")
    showString = (
        <div className='cancel'>
            {result[0]}
        </div>
    )
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
                {showString}
            </div>
            <Link to='/about'>About</Link>
        </div>
    )
}
export default Main;