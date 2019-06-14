import React from 'react'
import logo from './logo.svg'
import './App.css'

function Div(props) {
    const { style } = props
    function onMouseEnter(num) {
        console.log('onMouseEnter:' + num)
    }

    return <div style={style} onMouseEnter={e => onMouseEnter(4)}></div>
}

function App() {

    function onMouseEnter(num) {
        console.log('onMouseEnter:' + num)
    }

    const elems = [
        {
            id: '123',
            style: {
                width: 200,
                height: 200,
                backgroundColor: '#09c'
            }
        }
    ]

    return (
        <div className="App">
            <div className="editor">
                {elems.map(item => {
                    return <Div style={item.style} />
                })}
                <div style={{width: 500,height: 500,backgroundColor: '#999'}} onMouseEnter={e => onMouseEnter(3)}>
                    <div style={{width: 100,height: 100,backgroundColor: '#666'}} onMouseEnter={e => onMouseEnter(1)}></div>
                    <div style={{width: 100,height: 100,backgroundColor: '#666'}} onMouseEnter={e => onMouseEnter(2)}></div>
                </div>
            </div>
        </div>
    )
}

export default App
