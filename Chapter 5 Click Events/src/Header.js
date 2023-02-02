const Header = () => {
    const headerStyle = {
        backgroundColor: "royalBlue",
        color: '#fff'
    }
    return (
        <header style={headerStyle} >
            <h1>Groceries List</h1>
        </header>
      )
  /*
  return (
    <header style={{
        backgroundColor: "mediumBlue",
        color: '#fff'
    }} >
        <h1>Groceries List</h1>
    </header>
  )
  */
}

export default Header
