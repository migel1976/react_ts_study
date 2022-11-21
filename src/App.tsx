import React, {useState, useEffect} from 'react'
import Card, {CardVariant} from './components/Card'
import UserList from './components/UserList'
import {IUser} from './types/types'
import axios from 'axios'

const App=()=>{
	const click=(num:number)=>{
				alert('you just now click on Card component '+num)
	}
	const [users, setUsers]=useState<IUser[]>([])
	// const users:IUser[]=[
	// 	{ id:1,name:'Jim',adress:{city:'LA'}},
	// 	{ id:2,name:'Kim',adress:{city:'NY'}},
	// ]
	useEffect(()=>{
		fetchUsers()
	},[])

	async function fetchUsers(){
		try{
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			 setUsers(response.data)
		}catch(e){
			alert(e)
		}
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
			<UserList users={users} />
		</div>
	)

}
export default App;
