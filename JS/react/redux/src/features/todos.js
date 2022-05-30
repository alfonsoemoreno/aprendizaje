import { combineReducers } from "redux"
import { makeFetchingReducer, makeSetReducer, reduceReducers } from "./utils"

export const setPending = () => {
    return {
        type: 'todos/pending'
    }
}

export const setFulfilled = payload => ({ type: 'todos/fulfilled', payload})
export const setError = e => ({ type: 'todos/error', error: e.message})
export const setComplete = payload => ({ type: 'todo/complete', payload })
export const setFilter = payload => ({ type: 'filter/set', payload })

export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0, 10)
        dispatch(setFulfilled(todos))
    } catch (e) {
        dispatch(setError(e))
    }
}

export const crudReducer = (state = [], action) => {
    switch(action.type) {
        case 'todo/add': {
            return state.concat({...action.payload})
        }
        case 'todo/complete': {
            const newEntities = state.map(entity => {
                if(entity.id === action.payload.id) {
                    return {...entity, completed: !entity.completed }
                }
                return entity
            })
            return newEntities
        }
        default:
            return state
    }
}

export const fulfilledReducer = makeSetReducer(['todos/fulfilled'])

export const todosReducer = reduceReducers(crudReducer, fulfilledReducer)

export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer([
    'todos/pending',
    'todos/fulfilled',
    'todos/rejected',
])

export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer,
    }),
    filter: filterReducer,
})

export const selecTodos = state => {
    const { todos: { entities }, filter } = state

    if (filter === 'complete') {
        return entities.filter(todo => todo.completed)
    }
    if (filter === 'incomplete') {
        return entities.filter(todo => !todo.completed)
    }

    return entities
}

export const selectStatus = state => state.todos.status

