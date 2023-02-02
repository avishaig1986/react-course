const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
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
  
  return (
    <main>
    <p onDoubleClick={handleClick}>
        Content Hello {handleNameChange ()}
        </p>
        <button onClick={handleClick}>click it</button>
        <button onClick={() => handleClickName( `${handleNameChange ()}`)}>click it name</button>
        <button onClick={(e) => handleClickEvent(e)}>click it event</button>
    </main>
  )
}

export default Content