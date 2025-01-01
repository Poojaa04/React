

const Section = (props) => {

    console.log(props)
  return (
    <>
    <div className="m-5 flex justify-between align-center">
        <h1>Hello {props.username}</h1>
        <button className="bg-red-600  rounded-xl">  Log in</button>
    </div>
    </>
    
  )
}

export default Section