'use client'
import React, { useState } from 'react'

const Todo = () => {
    // todoList：存储所有待办事项
    const [todoList, setTodoList] = useState(
        [
            { id: 1, text: 'Learn React', isCompleted: false },
            { id: 2, text: 'Build a Todo App', isCompleted: false },
            { id: 3, text: 'Deploy the App', isCompleted: true }
        ]
    );
    // 当前输入框的内容
    const [currentTodoItem, setCurrentTodoItem] = useState('');
    // 正在编辑的 todo 的 id
    const [editId, setEditId] = useState<number | null>(null);
    // 编辑时输入框的内容
    const [editText, setEditText] = useState('');

    // 添加新 todo
    function handClick() {
        if (currentTodoItem.trim() === '') {
            alert('Please enter a todo item');
            return;
        }
        const newTodo = {
            id: todoList.length + 1,
            text: currentTodoItem,
            isCompleted: false
        };
        setTodoList([...todoList, newTodo]);
        setCurrentTodoItem('');
       // console.log('Todo added:', newTodo);
      //  console.log('Current Todo List:', todoList);
    }

    // 删除 todo
    function handleDelete(id: number) {
        //删除了 id 等于传入 id 的那一项
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList);
      //  console.log('Todo deleted:', updatedTodoList);
    }

    return (
        <div>
            <h1>Todo List</h1>
            {/* 新增 todo 输入框 */}
            <input type="text" placeholder="Add a new todo"
                value={currentTodoItem}
               // 输入框内容始终同步状态
                onChange={e => setCurrentTodoItem(e.target.value)}

                // onChange={((e) => {
                //     e.target.value && setCurrentTodoItem(e.target.value)
                //    // 只有当输入框有内容时，才会更新 currentTodoItem，如果输入为空则不会更新。

                //    // console.log(e.target.value)
                // })}
            />
            <button onClick={handClick}>Add todo</button>

            <ul>
                {todoList.map((todo, index) => (
                    <li key={index} className={todo.isCompleted ? 'complate' : ''}>
                        {/* 完成状态复选框 */}
                        <input type="checkbox" checked={todo.isCompleted}
                            onChange={(e) => {
                                // 切换完成状态
                                const updatedTodoList = todoList.map(t =>
                                    t.id === todo.id ? { ...t, isCompleted: e.target.checked } : t
                                );
                                setTodoList(updatedTodoList);
                               // console.log('Todo updated:', updatedTodoList);
                            }}
                        />
                        {/* 编辑模式 */}
                        {editId === todo.id ? (
                            <>
                                {/* 编辑输入框 */}
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    style={{ marginLeft: 8 }}
                                />
                                {/* 保存按钮 */}
{/* 遍历 todoList 数组，对每一个 todo 项（用 t 表示）：
如果 t.id === todo.id，说明找到了当前要编辑的 todo，就用 { ...t, text: editText } 创建一个新对象，把它的 text 字段更新为 editText（你输入的新内容）。
如果不是要编辑的 todo，直接返回原对象 t。
最终返回一个新的 todoList 数组，只有被编辑的那一项的 text 被修改了，其他项保持不变。
简化理解：
把 todoList 里 id 等于当前编辑项 id 的 todo 的 text 字段，替换成 editText。 */}
                                <button
                                    onClick={() => {
                                        // 保存编辑内容   
                                        const updatedTodoList = todoList.map(t =>
                                            t.id === todo.id ? { ...t, text: editText } : t
                                        );
                                        setTodoList(updatedTodoList);
                                        setEditId(null);
                                        setEditText('');
                                    }}
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                {/* 普通显示模式，完成时变红 */}
                                <span style={{ color: todo.isCompleted ? 'red' : 'inherit', marginLeft: 8 }}>
                                    {todo.text}
                                </span>
                                {/* 编辑按钮 */}
                                <button
                                    onClick={() => {
                                        setEditId(todo.id);
                                        setEditText(todo.text);
                                    }}
                                >
                                    Edit
                                </button>
                            </>
                        )}
                        {/* 删除按钮 */}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo






// 'use client'
// import React, { useState } from 'react'


// const Todo = () => {
//     const [todoList, setTodoList] = useState(
//         [
//             { id: 1, text: 'Learn React', isCompleted: false },
//             { id: 2, text: 'Build a Todo App', isCompleted: false },
//             { id: 3, text: 'Deploy the App', isCompleted: true }
//         ]
//     );
//     const [currentTodoItem, setCurrentTodoItem] = useState('');

//     const [editId, setEditId] = useState<number | null>(null);
//     const [editText, setEditText] = useState('');
//     function handClick() {
//         if (currentTodoItem.trim() === '') {
//             alert('Please enter a todo item');
//             return;
//         }
//         const newTodo = {
//             id: todoList.length + 1,
//             text: currentTodoItem,
//             isCompleted: false
//         };
//         setTodoList([...todoList, newTodo]);
//         setCurrentTodoItem('');
//         console.log('Todo added:', newTodo);
//         console.log('Current Todo List:', todoList);
//     }
//     // function handleEdit() {
//     //     const updatedTodoList = todoList.map(todo =>
//     //         todo.id === 1 ? { ...todo, text: 'Updated Todo Item' } : todo
//     //     );
//     //     setTodoList(updatedTodoList);
//     //     console.log('Todo edited:', updatedTodoList);

//     // }
//     function handleDelete(id: number) {
//         const updatedTodoList = todoList.filter(todo => todo.id !== id);
//         setTodoList(updatedTodoList);
//         console.log('Todo deleted:', updatedTodoList);
//     }

//     // function handToggleTodo(id: number) {
//     //     const updatedTodoList = todoList.map(todo =>
//     //         todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//     //     );
//     //     setTodoList(updatedTodoList);
//     //     console.log('Todo toggled:', updatedTodoList);
//     //     return updatedTodoList;
//     // }

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input type="text" placeholder="Add a new todo"
//                 value={currentTodoItem}
//                 onChange={((e) => {
//                     e.target.value && setCurrentTodoItem(e.target.value)
//                     console.log(e.target.value)
//                 })}
//             />
//             <button onClick={handClick}>Add todo</button>


//             <ul>
//                 {todoList.map((todo, index) => (
//                     <li key={index} className={todo.isCompleted ? 'complate' : ''}>
//                         <input type="checkbox" checked={todo.isCompleted}
//                             // onClick={()=>handToggleTodo(todo.id)}
//                             onChange={(e) => {
//                                 const updatedTodoList = todoList.map(t =>
//                                     t.id === todo.id ? { ...t, isCompleted: e.target.checked } : t
//                                 );
//                                 setTodoList(updatedTodoList);
//                                 console.log('Todo updated:', updatedTodoList);
//                             }}
//                         />
//                         {editId === todo.id ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={editText}
//                                     onChange={(e) => setEditText(e.target.value)}
//                                     style={{ marginLeft: 8 }}
//                                 />
//                                 <button
//                                     onClick={() => {
//                                         const updatedTodoList = todoList.map(t =>
//                                             t.id === todo.id ? { ...t, text: editText } : t
//                                         );
//                                         setTodoList(updatedTodoList);
//                                         setEditId(null);
//                                         setEditText('');
//                                     }}
//                                 >
//                                     Save
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <span style={{ color: todo.isCompleted ? 'red' : 'inherit', marginLeft: 8 }}>
//                                     {todo.text}
//                                 </span>
//                                 <button
//                                     onClick={() => {
//                                         setEditId(todo.id);
//                                         setEditText(todo.text);
//                                     }}
//                                 >
//                                     Edit
//                                 </button>
//                             </>
//                         )}
//                         <button onClick={() => handleDelete(todo.id)}>Delete</button>


//                         {/* <span style={{ color: todo.isCompleted ? 'red' : 'inherit', marginLeft: 8 }}>
//                             {todo.text}
//                         </span>
//                         <button onClick={() => {
//                             setEditId(todo.id);
//                             setEditText(todo.text);
//                         }
//                         }>Edit</button>
//                         <button onClick={() => handleDelete(todo.id)}>Delete</button>
//                         {editId === todo.id && (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={editText}
//                                     onChange={(e) => setEditText(e.target.value)}
//                                 />
//                                 <button onClick={() => {
//                                     const updatedTodoList = todoList.map(t =>
//                                         t.id === todo.id ? { ...t, text: editText } : t
//                                     );
//                                     setTodoList(updatedTodoList);
//                                     setEditId(null);
//                                     setEditText('');
//                                 }}>Save</button>
//                             </div>
//                         )} */}
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     )
// }

// export default Todo
