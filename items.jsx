import React ,{Component}from 'react';
import {getProduct, getProducts} from './fakeProductsService';//import the database of store product data.
import './index.css';
class Item extends Component {
    //Create state that contains an array of objects that contain the store product data,
    //that  start and end variables contain numbers that determine the rows view.
    state ={
         products: getProducts(), 
         start:0,
         end:4,
         all:0,
         send:false
    } 
    //The plus action checks if the number in the stack member is higher than zero SUM will increase by 1.
    //otherwise a window will be displayed which will explain the problem 
    plus(obj){
      (obj.numberInStock>0)?this.setState([this.state.products[obj._id-1].sum+=1]): alert("המוצר אזל במלאי");
    }
    //The minus operation checks if the SUM limb is higher than zero SUM will be reduced by 1.
    //otherwise a window will be displayed which will explain the problem.
    minus(obj){
      if(obj.sum>0) 
      this.setState([this.state.products[obj._id-1].sum-=1]);
    }
    //The checkOrder operation checks if the Number in stack is higher or equal to 
    //SUM If so the operation will subtract the SUM from the Number in stack,
    // otherwise a window will be displayed which will explain the problem.
    checkOrder(obj){ 
      if(obj.sum==0 && obj.numberInStock>0)
      alert("אנא הכנס כמות פריטים");
      if(obj.numberInStock==0)
      alert("המוצר אזל במלאי");
      (obj.sum<=obj.numberInStock && obj.sum!=0)? alert(" המוצר הוסף לעגלה! מחיר:"+obj.sum*obj.price+"₪",this.setState([this.state.products[obj._id-1].numberInStock-=obj.sum]),this.setState([this.state.all+=obj.sum*obj.price])):
      (obj.numberInStock>0 && obj.sum!=0)?alert("(Number in stock)אנא בחר כמות שווה או נמוכה יותר מכמות מלאי המוצר המופיע בשורת המוצר עצמה.. תודה", 
      this.setState([this.state.products[obj._id-1].sum=0])):console.log();
      this.setState([this.state.products[obj._id-1].sum=0]);
       
    }
    //The like operation checks if the liked limb is true and a full Like will be displaye, otherwise a Like Rake will come out.
    like(obj){
      (obj.liked==true)?this.setState([this.state.products[obj._id-1].liked=false]):this.setState([this.state.products[obj._id-1].liked=true]);
    }
    //The row action creates a row that contains the organs of the objects that are in the products array inside state.
    //The function also produces 3 buttons,
    // one to increase the quantity of products to be purchased, one button to subtract, and one button to add an order.
    row(obj){
     return <tr key={obj._id}> 
              <td>{obj._id}</td>
              <td>{obj.productName}</td>
              <td>{obj.category}</td> 
              <td>{obj.numberInStock}</td>
              <td>{obj.price}₪</td>
              <td className="urlItem" style={{backgroundImage: "url('"+obj.imgUrl+"')", backgroundSize:"100%",borderRadius:"30px",width:"270px"}}></td>
              <td className={(obj.liked)?"fa fa-heart":"fa fa-heart-o"} style={{backgroundColor:(obj.liked)?"rgb(226, 53, 53)":"",borderRadius:"10px"}} onClick={()=> this.like(obj)}></td>
              <td >{obj.sum}</td>
              <td ><button tythe="button" className="btn btn-primary" onClick={()=> this.plus(obj)}>+</button></td>
              <td ><button type="button" className="btn btn-primary" onClick={()=> this.minus(obj)}>-</button></td>
              <td ><button type="button" className="btn btn-primary" onClick={()=> this.checkOrder(obj)}>add</button></td>
              <br/></tr>;
    }
    //The function is given two parameters that determine the range of records displayed in the general table.
    page(start,end){
      this.setState([this.state.start=start]);
      this.setState([this.state.end=end]);
    }
    all(){
      var price = this.state.all;
      (this.state.all!=0)?alert("סכהכ לתשלום:"+price+"₪\nתודה שרכשת אצלנו יא דג!"):console.log();
      (this.state.all!=0)?this.setState([this.state.all=0]):alert("אנא הוסף מוצרים לעגלה!");
    }
    render() { 
        return <React.Fragment>
           <div class="top"><div class="LP"></div><h1>מחשבים LP</h1></div>
            <table class="table table-dark table-striped">
            <thead><tr><th>Row Number</th><th>Product name</th> <th>Category</th> <th>Number in stock</th> <th>Price</th><th>Product image</th> <th>Liked</th> <th>Sum</th> <th>Up</th> <th>Down</th><th>Order</th></tr></thead>
            {this.state.products.map(obj=> (obj._id-1<this.state.end && this.state.start<=obj._id-1)?this.row(obj):"")/*Rune on the entire array of objects found in TT*/}
            </table>
            <div align="center">{/*Creating a div containing 3 buttons to scroll through the table pages*/}
            <button type="button" class="btn btn-primary"  onClick={()=>this.page(0,4)  }><span>1</span></button>
            <button type="button" class="btn btn-primary"  onClick={()=>this.page(4,8)  }><span>2</span></button>
            <button type="button" class="btn btn-primary"  onClick={()=>this.page(8,12) }><span>3</span></button>
            <div class='ss'>
            <h1 typy="h1" class="h1">{this.state.all}₪:סכום העגלה</h1>
            <button type="button" class="btn btn-primary" onClick={()=>this.all()}>Send</button>
            </div>
            </div>
            {/*Creating a DIV that contains two DIV that display an image for decoration*/}
            <div class="twoPik"><div class="pik" ></div><div class="pik1"></div></div>
            </React.Fragment>;
    }
}
export default Item;