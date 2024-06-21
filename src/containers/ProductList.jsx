import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import items from '../utils/data';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				{
					items.map((item) => (
						<ProductItem key={item.id} title={item.title} price={item.price} img={item.image}/>
					))
				}

			</div>
		</section>
	);
}

export default ProductList;
