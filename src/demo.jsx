
import React from 'react';
import {useState} from 'react';
import './App.css';
//import ReactDOM from 'react-dom';
const initstate={
    groceryname:"",
   price:"",
   weight:""
}

const Addgroceryitems=()=>{
    const[data,setData]=useState(initstate);

    const handleChange=e=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

   const{groceryname,price,weight}=data;
 //onst groceryname=data;
   function addgrocerydiv(){
       console.log(data);
        const div=document.createElement("div");
         const h1=document.createElement("h1");
         h1.textContent="Grocery: "+data.groceryname;

         const p2=document.createElement("p");
         p2.textContent="price: "+data.price+" rupees";
         const p3=document.createElement("p");
         p3.textContent="weight: "+data.weight +" kg";
         var dltbtn=document.createElement("button");
         dltbtn.textContent="Delete";
         div.setAttribute("className","groceryclass")
         div.append(h1,p2,p3,dltbtn);
         document.getElementsById("groceryitems").appendChild(div);
      
   }




  return(
      <>
      <h1>hello grocery</h1>,
      <div>
           <input type="text" name="groceryname" value={groceryname} placeholder="enter grocery" onChange={handleChange}/>
          <input type="number" name="price" value={price} placeholder="enter price" onChange={handleChange}/>
          <input type="number" name="weight" value={weight} placeholder="enter weight" onChange={handleChange}/> 
          <button onClick={addgrocerydiv}>Add Grocery</button>
      </div>
      </>
  )

}

export default Addgroceryitems;