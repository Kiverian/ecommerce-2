import React from 'react';
import './Product.css'
import items from './Product.json';
import Product from './Productdb.js';

class Filter extends React.Component {
    //Making a constructor to call the productType and cost from the JSON file
    constructor(props) {
        super(props);
        this.state = {
            productType: "default",
            cost: "default"
        }
    }

    
    //Creating a function asking for the event to target the price/value inside of the JSON file
    //Will go to every producct in the JSON and say what the value is
    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            productType: event.target.value
        })
    }



    //Variable to call the product and cost
    render() {
        const { productType, cost } = this.state;
        return (
            <React.Fragment>
                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                         {/* saying what we are looking for, is it the jet or the yacht? */}
                        <select id="filterSelect" value={productType} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="Jet">Jets</option>
                            <option value="Yacht">Yachts</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                         {/* saying what are we looking for based off of the price range we want */}
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$8M - $20M</option>
                            <option value="medium">$21M - $50M</option>
                            <option value="high">$51M - $80M</option>
                        </select>
                    </div>
                </div>


                {/* all the information from the Productdb is inside of the section container*/}
                <section id="container" >
                    <div className="filter">

                        {/* filtering through the items in the JSON file */}
                        {items.items.map(item => {
                            // using default, it's just going to show everything in the JSON file
                            if (productType === 'default' && cost === 'default') {
                                return <Product item={item} />
                                // if the product is === to the product type it will show the product that you want
                            } else if (productType === item.productType && cost === item.cost) {
                                return <Product item={item} />
                                // if the product is === to the product type it will show the product that you want
                            } else if (productType === item.productType || cost === item.cost) {
                                return <Product item={item} />
                            }
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default Filter;