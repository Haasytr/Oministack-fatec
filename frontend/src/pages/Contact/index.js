import React from 'react';

 import './styles.css';

const contact = () => 
    <>
        <div className='container'>
            <h1 className='title'>Vamos conversar?</h1>
            <div className='content' style={{width: '100%'}}>
                <div className='right'>
                    <form>
                        <label>
                            <input type='text' placeholder='Nome Completo'/>
                        </label>

                        <label>
                            <input type='email' placeholder='Email'/>
                        </label>

                        <label>
                            <input type='text' placeholder='Assunto do email'/>
                        </label>

                        <label>
                            <textarea placeholder='Mensagem' row='5' /> 
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
