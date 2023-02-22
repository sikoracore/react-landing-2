import React from 'react'
import { SubHeading, MenuItem } from '../../components'
import { data, images } from '../../constants'
import './Menu.scss'

const Menu = () => {
	return (
		<div className='specialMenu flex__center section__padding' id='menu'>
			<div className='specialMenu__title'>
				<SubHeading title='Menu that fits your palatte' />
				<h1 className='headtext__cormorant'>Today&apos;s Special</h1>
			</div>

			<div className='specialMenu__menu'>
				<div className='specialMenu__menu-wine  flex__center'>
					<p className='specialMenu__menu-heading'>Wine & Beer</p>
					<div className='specialMenu__menu-items'>
						{data.wines.map((wine, index) => (
							<MenuItem
								key={wine.title + index}
								title={wine.title}
								price={wine.price}
								tags={wine.tags}
							/>
						))}
					</div>
				</div>

				<div className='specialMenu__menu-img'>
					<img src={images.menu} alt='menu__img' />
				</div>

				<div className='specialMenu__menu-cocktails flex__center'>
					<p className='specialMenu__menu-heading'>Cocktails</p>
					<div className='specialMenu__menu-items'>
						{data.cocktails.map((cocktail, index) => (
							<MenuItem
								key={cocktail.title + index}
								title={cocktail.title}
								price={cocktail.price}
								tags={cocktail.tags}
							/>
						))}
					</div>
				</div>
			</div>

			<div style={{ marginTop: 15 }}>
				<button type='button' className='custom__button'>
					View More
				</button>
			</div>
		</div>
	)
}

export default Menu
