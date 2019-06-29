import React from 'react';

 import './styles.css';

const contact = () => 
    <>
        <div className='container'>
            <h1 className='title'>Vamos conversar?</h1>
            <div className='content' style={{width: '100%'}}>
                <div className='right'>
                    <form method='post' action='http://localhost:3001/api/product'>
                        <label>
                            <input name='name' type='text' placeholder='Nome Completo'/>
                        </label>

                        <label>
                            <input name='price' type='price' placeholder='preço'/>
                        </label>

                        <label>
                            <input name='description' type='text' placeholder='Descrição'/>
                        </label>

                        <label>
                            <textarea name='image' placeholder='Url' row='5'/> 
                        </label>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='left'>
                    <p>Email de contato:<br />marivest@outlook.com</p>

                    <p>Horarios de atendimento:<br/> das 9:00 as 17:00 em dias uteis</p>

                    <p>Quer fazer parte dessa grande ideia?<br/></p>

                </div>
            </div>   
        </div>
            
    </>

export default contact;
