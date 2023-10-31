import React from "react";
function ColorItem(props){
return <li style ={{ color: props.n}} > {props.n}</li>
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  
  const arr = colors.map( (n) => {
    return <ColorItem key={n} n ={n} />
  })
  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];
  const arr2= users.map((o) =>{
    return <h1 key={o.id}> {o.firstName}</h1>
  })
  
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      
       <h1> {arr}</h1>
       <h1> {arr2}</h1>
        
    </div>
  );
}

export default ColorList;
