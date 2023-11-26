import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProdDisplay = (props) => {
    const MY_SERVER = "https://dgango-supermarker.onrender.com"

    return (
        <div>
            <div>
                <div className="col">
                    <div className="card product-card">
                        <div className="card-body">
                            <img src={MY_SERVER + "/static" + props.prod.img} class="card-img-top" alt="Product"/>
                            <h5 className="card-title">{props.prod.description}</h5>
                            <p className="card-text">{props.prod.price}</p>
                            <button className="btn btn-success buy-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProdDisplay