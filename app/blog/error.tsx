'use client'
const error = ({ error }: { error: Error }) => {
  return (
    <h1 style={{ textAlign: "center", color: "red", padding: "80px", border: "2px solid red", width: "50%", margin: "auto", marginTop: "10%" }}>Oops!!! <br /> {error.message}</h1>
  )
}

export default error