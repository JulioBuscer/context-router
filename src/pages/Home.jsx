import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { userData } from '../helpers/userData';

const Home = () => {
    //Consumiendo el estado global a traves del hook useContext(), y pasándole el contexto definido.
    const { user, setUser } = useContext(UserContext);
    //Definimos el método handleLogin en el que le vamos a pasar los datosdel usuario al context.
    const handleLogin = () => {
        //Establecemos el valor del userContext pasándole los datos del usuario.
        setUser(userData);
    };

    const handleLogout = () => {
        //Borramos los datos.
        setUser(null);
    };

    return (
        <div  className="container text-center mt-5">
            <h1>Home Screen</h1>
            {!user ? (
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            ) : (
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            )
            }
        </div>
    )
}

export default Home
