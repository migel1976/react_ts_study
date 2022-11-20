import React from 'react'
import Card, {CardVariant} from './components/Card'
import UserList from './components/UserList'
import {IUser} from './types/types'

const App=()=>{
	const click=(num:number)=>{
				alert('you just now click on Card component '+num)
	}
	const users:IUser[]=[
		{ id:1,name:'Jim',adress:{city:'LA'}},
		{ id:2,name:'Kim',adress:{city:'NY'}},
	]
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
			<UserList users={users} />
		</div>
	)

}
export default App;
