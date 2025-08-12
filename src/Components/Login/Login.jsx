import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate funciona na v7

import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Inicializa o navigate

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("envio", email, password);

        // Redireciona para a página de dashboard
        navigate('/dashboard');
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1 >Acesse o sistema e marque sua consulta</h1>
                <div>
                    <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon' />


                </div>

                <button type="submit">
                    Entrar
                </button>
                <div className='auth-extra'>
                    <div className='recall-forget'>
                        <label>
                            <input type="checkbox" />
                            Lembrar de mim

                        </label>
                    </div>

                    <div>
                        <a href="#"> Esqueceu a senha ?</a>

                        <div className='signup-link'>
                             <a href="#">Crie sua conta aqui</a>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Login;
