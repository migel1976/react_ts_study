import React, {useEffect, FC, useState} from 'react'
import List from './List'
import TodoItem from './TodoItem'
import {IUser, ITodo} from '../types/types'
import axios from 'axios'

const TodoPage:FC=()=>{
	const [todos, setTodos]=useState<ITodo[]>([])
	useEffect(()=>{
		fetchTodos()
	},[])

	async function fetchTodos(){
		try{
			const response=await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(response.data)
		}catch(e){
			alert(e)
		}
	}
	return(
		<div>
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
export default TodoPage


