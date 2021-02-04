import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div >
                    <img className="jet-img" alt="jets"
                        src={this.props.item.image} />
                    <h4 className="title">{this.props.item.name}</h4>
                    <p className="price">{this.props.item.price}</p>
                    <p>{this.props.item.description}</p> 
                </div>
            </React.Fragment >
        )
    }
}

export default Products;