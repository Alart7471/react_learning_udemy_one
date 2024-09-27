import React, { useState, useEffect } from 'react'
import './styles.css'

let index = 0

function HelloModalWindow(props) {
  const [text, setText] = useState('Привет')
  const texts = [
    'Ты попал на страницу нашего магазина',
    'Магазин пока в разработке',
    'Желаем удачи! :)',
  ]

  useEffect(() => {
    if(index !== texts.length) {
      setTimeout(() => {
        setText(texts[index])
        index = index + 1
      }, 2000)
    }
  }, [text])

 
  
  return (
    <div className="hello">
      <div className="hello-modal">
        <p>{text}</p>
        {index === texts.length && <button onClick={() => {
          console.log('aboba ?')
        }}>Закрыть</button>}
      </div>
    </div>
  )
}

export default HelloModalWindow


