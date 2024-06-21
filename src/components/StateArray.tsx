import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

const StateArray = () => {
  const [ itemInput, setItemInput ] = useState('');
  const [ list, setList ] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: false },
    { id: 2, label: 'Comprar bolo', checked: false}
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') {
      return;
    }
    setList([...list, { id: list.length + 1,label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  }

  const toggleItem = (id: number) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked
      }
    }

    setList(newList);
  }

  return (
    <>
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input 
          type="text"
          placeholder="O que deseja fazer ?"
          className="flex-1 border border-black text-2xl p-3 text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{ list.length } items na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item) => (
          <li key={item.id}>
            <input 
              type="checkbox" 
              checked={item.checked} 
              className="w-6 h-6 mr-3" 
              onClick={() => toggleItem(item.id)}
            />
            { item.label } - <button onClick={() => deleteItem(item.id)} className="hover:underline">[ deletar ]</button></li>  
        ))}
      </ul>
    </>
  )
}

export default StateArray
