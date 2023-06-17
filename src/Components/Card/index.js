import React from 'react'
import './index.css';
import { useStore } from '../../Zustand';

export default function Card(props) {
    // const images = React.context('../../../public/Assets/images', true);
    const {items, totalPrice, addPrice, addItem, removeItem} = useStore();
    // let imgSrc = images("./cake1.jpg");
    let image = require('../../Assets/images/' + props.images);
    let CardName = `color_bg ${props.alt}`
    // let bg_img = `url(${props.images})`;
    let { title, old_price, newPrice, dollar, exp_date } = props
    let totItem = items.length !== 0 ? items.filter((curr, i, arr) => {
        if(curr.id === props.id) {
            return curr;
        }
    }) : "";
    let totItemLen = totItem.length === 0 ? null : totItem.length;
    return (

        <div className="card">
            <div className="wrapper">
                {/* <div className="card_img" style={{backgroundImage: "url(imgSrc)"}}></div> */}
                <img src={image} height="200px" width="100%" alt={props.images}/>
                <div className="heart">
                    <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                        <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                        </path>
                    </svg> 
                </div>
                <div className="cardInfo">
                    <h1>{title}</h1>
                    <p className="date_">{exp_date}</p>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price old_price">{dollar}{old_price}</p>
                            <p className="price newPrice">{dollar}{newPrice}</p>
                        </div>
                        <div className="cart">
                            <div style={{width: "100%", height: "20px", display: "flex", alignItems: "center", justifyContent: "center"}}>{totItemLen}</div>
                            <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                                <path d="M2 6h10l10 40h32l8-24H16"></path>
                                <circle cx="23" cy="54" r="4"></circle>
                                <circle cx="49" cy="54" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="add-cart" onClick={e=> {
                    e.preventDefault();
                    addItem({id: props.id, price: props.newPrice, name: props.title})
                }}>
                    Add to Cart
                </div>
                <div className="remove-cart" onClick={e=> {
                    e.preventDefault();
                    removeItem(props.id);
                }}>
                    Remove from Cart
                </div>
            </div>
        </div>
    )
}