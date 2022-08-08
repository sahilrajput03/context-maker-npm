import {createContext, useContext, useState} from 'react'

function contextMaker() {
	let MyContextInstance

	const useMyContext = (initialValue) => {
		const _value = useState(initialValue)

		const isFirstCall = initialValue !== undefined

		// I create context only on first call of the hook
		if (isFirstCall) {
			MyContextInstance = createContext(_value)
		} else if (!MyContextInstance) throw Error('You must provide initial value to the `useYourContext()` hook')

		return useContext(MyContextInstance)
	}

	return useMyContext
}

export default contextMaker
