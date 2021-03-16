import React from 'react';
import Table from 'react-bootstrap/Table'
import Row from "../Row"


function Record(props) {
  console.log(props)

   const headingsArray = [" ","First Name","Last Name", "Email", "Phone Number", "DOB"]
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
          {/* {headingsArray.map((heading,index) => {
            return(
              <th onClick = {() => props.sortFunction(heading)}>{heading}</th>
            )
          })} */}
          </tr>
        </thead>
        <tbody>
          {console.log(props.results)}
          {props.results && props.results.map(element => (
            <Row
              key ={element.email}
              img={element.picture.thumbnail}
              firstName={element.name.first}
              lastName={element.name.last}
              email={element.email}
              phoneNum={element.phone}
              dob= {element.dob.date}

            />
          ))}

        </tbody>
      </Table>
    </div>
  );
}


export default Record;