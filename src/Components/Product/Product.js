import React from 'react';
import './Product.css'
import items from './Product.json';
import Product from './Productdb.js';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            productType: event.target.value
        })
    }


    render() {
        const { productType, cost } = this.state;
        return (
            <React.Fragment>
                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
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
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$8M - $20M</option>
                            <option value="medium">$21M - $50M</option>
                            <option value="high">$51M - $80M</option>
                        </select>
                    </div>
                </div>

                <section id="container" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (productType === 'default' && cost === 'default') {
                                return <Product item={item} />
                            } else if (productType === item.productType && cost === item.cost) {
                                return <Product item={item} />
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