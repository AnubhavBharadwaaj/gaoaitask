import React, {useEffect} from "react";
import { useStore } from "../../Zustand";
export const Checkout = props => {
    const {items} = useStore();
    let totalPrice = 0;
    
    for(let i = 0; i<items.length; i++) {
        totalPrice += Number(items[i].price);
    }
    return <div style={{"display": "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        {items.map((num, i, curr) => {
            return (<div key={'list' + i} style={{display: "flex", flexDirection: "row"}}>
                <div key={'listname' + i} style={{height: "3rem", width: "2rem", paddingRight: "4rem"}}>{num.name}</div>
                <div key={'listprice' + i} style={{height: "3rem", width: "2rem"}}>{num.price}</div>
                </div>)
        })}
        <div>Total Price: {totalPrice}</div>
    </div>
}