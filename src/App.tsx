import React, {useState, useEffect} from 'react'
import Card, {CardVariant} from './components/Card'
// import UserList from './components/UserList'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import {IUser, ITodo} from './types/types'
import axios from 'axios'

const App=()=>{
	const click=(num:number)=>{
				alert('you just now click on Card component '+num)
	}
	const [users, setUsers]=useState<IUser[]>([])
	const [todos, setTodos]=useState<ITodo[]>([])
	// const users:IUser[]=[
	// 	{ id:1,name:'Jim',adress:{city:'LA'}},
	// 	{ id:2,name:'Kim',adress:{city:'NY'}},
	// ]
	useEffect(()=>{
		fetchUsers()
		fetchTodos()
	},[])

	async function fetchUsers(){
		try{
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			 setUsers(response.data)
		}catch(e){
			alert(e)
		}
	}

	async function fetchTodos(){
		try{
			const response=await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(response.data)
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
			{/* <UserList users={users} /> */}
			<List
				items={users}
				renderItem={(user:IUser)=>
					<UserItem user={user}
						key={user.id}
					/>
				}
			/>
			<List
				items={todos}
				renderItem={(todo:ITodo)=>
					<TodoItem todo={todo}
						key={todo.id}
					/>
				}
			/>
		</div>
	)

}
export default App;
