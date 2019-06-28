import React from 'react';
import './style.css'
import List from  '../../components/List'


const Home = () => (
    <>
        <div className='container'>
            <div className='title'>
                <h1>Bem vindo a Marivest</h1>
            </div>
            <div className='destaques'>
                <h2>Destaques</h2>
            </div>
            
            <List />
        </div>
        
    </>
)

export default Home;
