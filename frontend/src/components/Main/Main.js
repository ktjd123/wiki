import React from 'react';
import { Link } from 'react-router-dom'
import {parser} from 'lib/parser'
import Cancel from './Cancel'
import './Main.css';


const Main = ({ testString, reducerTest }) => {

    let string = `[싫어] [또 왜]`
    let result = parser.get(string, "[", "]")
    const showString = result.map((string, i) => {
        return (
            <Cancel string={string}
                    key={i}
            />
        )
    })
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