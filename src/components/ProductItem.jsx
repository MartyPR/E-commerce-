import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = ({img,title,price}) => {
	return (
		<div>
			<div className="ProductItem">
			<img src={img}alt="" />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure>
					{/* <img src="./icons/bt_add_to_cart.svg" alt="" /> */}
					<i className="fa-solid fa-cart-shopping"></i>
				</figure>
			</div>
		</div>

		</div>
	);
}

export default ProductItem;
