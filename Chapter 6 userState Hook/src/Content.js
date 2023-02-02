import {useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    
    const handleClick = () => {
        console.log('clicked')
    }

    const handleClickName = (name) => {
      console.log(`${name} clicked`)
  }

    const handleClickEvent = (e) => {
      console.log(e)
}

    const handleClickCount = () => {
      setCount(count + 1)
      console.log(count)
}

    const handleClickCountState = () => {
      console.log(count)
}
  return (
    <main>
    <p onDoubleClick={handleClick}>
        Hello {name} !
        </p>
        <button onClick={handleNameChange}>click it</button>
        <button onClick={() => handleClickName( `${handleNameChange ()}`)}>click it name</button>
        <button onClick={(e) => handleClickEvent(e)}>click it event</button>
        <button onClick={() => handleClickCount()}>click it count</button>
        <button onClick={() => handleClickCountState()}>click it count state</button>

    </main>
  )
}

export default Content