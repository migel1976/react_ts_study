import {BrowserRouter,Routes, Route, NavLink} from 'react-router-dom'
import UsersPage from './components/UserPage'
import TodosPage from './components/TodoPage'

const App=()=>{

	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to='/users'>Пользователи</NavLink>
					<NavLink to='/todos'>Список дел</NavLink>
				</div>
				<Routes>
					<Route path={'/users'} element={<UsersPage />} />
					<Route path={'/todos'} element={<TodosPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
export default App;
