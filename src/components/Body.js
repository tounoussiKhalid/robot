import React from "react";
import content from './content.json';
import Card from './Card';
import '../App.css';
class Body extends React.Component{
    render(){
       
          const filteredobjects = content.filter( obj => {
              console.log(this.props.filter  + " " + obj.name );
               return (obj.name.includes(this.props.filter) || this.props.filter === '')  } 
               );
          const objects = filteredobjects.map( ( obj ) => {
            return  <Card key={obj.ref} reference={obj.ref} name={obj.name} email={obj.email}> bonjour </Card>;
          }
               
            );

            return ( 
                <div className="" style={{display:"flex",flexWrap:"wrap"}}>
                    {objects}
                                
                </div>
                
                
            );
       
    }
}

export default Body;