import React from 'react'
import './AwardCard.scss'


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
	return (
		<div className='awardsCard'>
			<img src={imgUrl} alt='awards' />
			<div className='awardsCard__content'>
				<p className='p__cormorant' style={{ color: '#DCCA87' }}>
					{title}
				</p>
				<p className='p__opensans'>{subtitle}</p>
			</div>
		</div>
	)
}

export default AwardCard
