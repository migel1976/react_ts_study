import React from 'react'

interface CardProps{
	width:string,
	height:string,
}

const Card=({width, height}:CardProps)=>{
	return(
		<div style={{width, height, border:'1px solid gray'}}>
			aloha from card
		</div>
	)
}
export default Card
