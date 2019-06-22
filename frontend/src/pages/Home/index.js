import React from 'react';
import './style.css'
import Map from  '../../components/Map'
import List from  '../../components/List'


const Home = () => (
    <>
        <div className='container'>
            <div className='title'>
                <h1>Bem vindo a Marivest</h1>
            </div>
            
            <Map />
            <List />
        </div>
        
    </>
)

export default Home;
