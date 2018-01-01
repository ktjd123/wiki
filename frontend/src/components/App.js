import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './App.css';


const App = ({ testString, reducerTest }) => {
    return (
        <div>
            <div className="App">
                <h1 className="App-title">The Seed에 어서오세요</h1>
                <p className="App-intro">
                    모든 것을 이곳에서부터 시작하세요!<br/>
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
                <ul className="introduce">
                    <li>---BACKEND---</li>
                    <li>express</li>
                    <li>express session</li>
                    <li>mongoose</li>
                    <li>bcrypt</li>
                    <li>예정: multer</li>
                    <li>---FRONTEND---</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Create-react-app</li>
                    <li>react-router</li>
                    <li>redux-thunk</li>
                    <li>axios</li>
                    <li>react-addons-udpate</li>
                </ul>
            </div>
            <Link to='/about'>About</Link>
        </div>
    )
}

App.propTypes = {
    testString: PropTypes.string,
    reducerTest: PropTypes.func
}

App.defaultProps = {
    testString: 'Not modified yet',
    reducerTest: () => console.warn('reducer test not defined')
}

export default App;