import { useState, useEffect } from 'react'
import './App.css'

function App() {
 const [user, setUser] = useState(null); 
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 const fetchUser = async () =>{
  setLoading(true);
  setError(null);
  setUser(null);
  try {
    const response = await fetch('https://randomuser.me/api');
    if(!response.ok) throw new Error('Error en la respuesta');
    
    const data = await response.json();
    setUser(data.results[0]); //El usuario viene en un arreglo, tomamos el primero
  } catch (err){
    setError('No se pudo cargar el usuario');
  } finally {
    setLoading(false);
  }
 }
  return (
    <>
      <div className="App">
        <h1>Usuario Aleatorio</h1>
        <p>Consumiendo una API ejemplo super sencillo con React Javascript, Vite</p>
        <button onClick={fetchUser}>
          Cargar Usuario
        </button>
        {loading && <p>Cargando usuario...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}

        {user && (
          <div style={{marginTop: '20px'}}>
            <img src={user.picture.large} alt="Foto del user" srcset="" />
            <h2>{user.name.title} {user.name.first}</h2>
            <p>{user.login.username}</p>

          </div>
        )}
      </div>
    </>
  )
}

export default App
