import React from 'react';
import '../styles/Header.scss'

// import logo from './logos/logo_yard_sale.png'

const Header = () => {
	return (
		<nav>
			{/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
			<i className="fa-solid fa-bars menu" ></i>
			<div className="navbar-left">
				{/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
					{/* <img src={logo} className="logo" /> */}

				<i className="fa-brands fa-font-awesome logo" ></i>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<i className="fa-solid fa-cart-shopping navbar-shopping-c"></i>
						{/* <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" /> */}
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;