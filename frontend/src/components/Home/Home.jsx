import {React, useState} from 'react'
import { TextField } from '@mui/material'
import SearchBar from '../SearchBar/searchBar'
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <header>
        <TextField id='outlined-basic' variant='outlined' fullWidth label='search'> 

        </TextField>
      </header>
      <div className='main-container' >
        
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
