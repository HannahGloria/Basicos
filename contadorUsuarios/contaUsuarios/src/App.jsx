import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //función para traer a los usuarios
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try{
      const res = await fetch("https://randomuser.me/api/");
      if(!res.ok) throw new Error("Error al obtener usuarios");
      const data = await res.json();
      setUsers([...users, data.results[0]]);
    }catch (err){
      setError(err.message);
    } finally{
      setLoading(false);
    }
  };

  //función para eliminar usuarios
  const handleDelete = (id) =>{
    setUsers(users.filter(u => u.login.uuid !== id)); //filter crea un nuevo array sin el usuario eliminado
  }
  return (
    <>
    <button onClick={fetchUsers}>Agregar usuario</button>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map(u=>(
          <li key={u.login.uuid}>
            <img src={u.picture.thumbnail} alt="foto" srcset="" />
            <div>
              {u.name.first} {u.name.last}
            </div>
            <div>
              {u.email}
            </div>
            <button onClick={() => handleDelete(u.login.uuid)}>Eliminar</button>
          </li>
        ))
        }
      </ul>
    </>
  )
}

export default App
