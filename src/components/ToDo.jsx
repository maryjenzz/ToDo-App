import React, { useEffect, useState, useRef } from 'react'
import Task from './Task'
import './ToDo.css';

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState(false); //Status da aplicação Editando
    const [editId, setEditId] = useState(null); // Armazenar o ID da tarefa editada
    const [editText, setEditText] = useState(''); //Armazenar o texto da tarefa editada

    const inputEdit = useRef(null);
    const inputAdd = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
        if (inputAdd.current)
            inputAdd.current.focus();

    }, []);

    useEffect(() => {
        if (inputEdit.current)
            inputEdit.current.focus();
    }, [editTask]);

    const handleAddTask = () => {
        if (!newTask) return;
        const taskData = { text: newTask, done: false };
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        }).then(res => res.json())
            .then(task => setTasks([...tasks, task]));
        setNewTask('');
        if (inputAdd.current)
            inputAdd.current.focus();
    };

    const handleEditTask = (id, text) => {
        setEditTask(true);
        setEditText(text);
        setEditId(id);
    };

    const handleEditSave = () => {
        fetch(`http://localhost:3001/tasks/${editId}`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: editText })
            }
        ).then(res => res.json())
            .then(() => {
                setTasks(tasks.map(t => t.id === editId ? { ...t, text: editText } : t));
                setEditId(null);
                setEditText('');
                setEditTask(false);
            });

    };

    const handleToggleDone = (id, done) => {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ done: !done })
        })
            .then(res => res.json)
            .then(() => setTasks(tasks.map(t => t.id === id ? { ...t, done: !done } : t)));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'DELETE'
        }).then(() => setTasks(tasks.filter(t => t.id !== id)));
    }



    const doneCount = tasks.filter(t => t.done).length;

    return (
        <div className='container'>
            <header>
                <input type="checkbox" checked readOnly />
                <span className="logo">ToDo App</span>
            </header>
            <div className="status-card">
                <div>
                    <div className="status-title">Concluídas</div>
                    <div className="status-sub">Continue assim, não desista!</div>
                </div>
                <div className="circle">
                    <b>{doneCount}/{tasks.length}</b>
                </div>
            </div>
            {!editTask ?
                <div className="add-task">
                    <label>Digite sua nova tarefa</label>
                    <div className="input-row">
                        <input type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder='Nova Tarefa'
                            ref={inputAdd} />
                        <button onClick={handleAddTask}>
                            <i className='bx  bx-plus'  ></i>
                        </button>
                    </div>
                </div>
                :
                <div className="edit-task">
                    <label>Edite sua tarefa</label>
                    <div className="input-row">
                        <input type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            ref={inputEdit}
                        />
                        <button onClick={handleEditSave}>
                            <i className='bx  bx-check'  ></i>
                        </button>
                    </div>
                </div>
            }

            <div>
                {tasks.map((task) => <Task
                    key={task.id}
                    task={task}
                    onEdit={() => handleEditTask(task.id, task.text)}
                    onToggleDone={() => handleToggleDone(task.id, task.done)}
                    onDelete={() => handleDelete(task.id)}
                />)}
            </div>


        </div>
    )
}

export default ToDo