import React from 'react'
import Card, {CardVariant} from './components/Card'

const App=()=>{
	const click=(num:number)=>{
				alert('you just now click on Card component '+num)
	}
	return (
		<div>
			<h1>
				hello world
			</h1>
			<Card 
				onClick={click}
				width='200px'
				height='300px'
				variant={CardVariant.primary}
			>
				<button>click me</button>
			</Card>
		</div>
	)

}
export default App;
