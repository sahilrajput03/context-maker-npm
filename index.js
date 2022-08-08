import {createContext, useContext, useState} from 'react'

function contextMaker() {
	let MyContextInstance

	const useMyContext = (value) => {
		const _value = useState(value)

		const isFirstCall = value !== undefined

		if (isFirstCall) {
			MyContextInstance = createContext(_value)
		} else if (!MyContextInstance) throw Error('You must provide initial value to the `useYourContext()` hook')

		return useContext(MyContextInstance)
	}

	return useMyContext
}

export default contextMaker
