import {render, screen, cleanup, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom'
/**
 * @jest-environment node 
 */

import App from './App'

describe('App', () => {  
    it('Should work as expexted', () =>{
       render(<App />)
    })
})

