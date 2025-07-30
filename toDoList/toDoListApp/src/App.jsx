import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === ''){
      return;
    } 
    const newTask = {
      id: Date.now(), //id único
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]); //Agrega la nueva tarea
    setTask('');
  };
  const toggleTask = (id) =>{
    const updatedTasks = tasks.map((t)=>
      t.id === id ? {...t, completed: !t.completed}: t
    );
    setTasks(updatedTasks)
  }
  const deleteTask = (id) => {
   const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <div className='App'>
        <h1>Lista de tareas</h1>
        <input type="text" placeholder="Escribe una tarea" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddTask}>Agregar</button>
        <ul style={{listStyle: 'none', padding: 0}}>
          {tasks.map((t)=>(
            <li key={t.id} style={{marginBottom: '10px'}}>
              <span style={{
                textDecoration: t.completed ? 'line-through' : 'none',
                marginRight: '10px'
              }}>
                {t.text}
              </span>
              <button onClick={()=>toggleTask(t.id)}>
                {t.completed ? 'Deshacer' : 'Completar'}
              </button>
              <button onClick={()=> deleteTask(t.id)} style={{marginLeft: '5px', color: 'red'}}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
