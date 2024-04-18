import { useState } from "react"

interface Person {
  name: string,
  email: string,
  image: string
}

function App() {
  const [people,setPeople] = useState([
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ])
  const addOne = ()=> {
    setPeople([...people,{
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }])
  }
  return (
   <div className="w-2/3 justify-center mx-auto">
    <ul className="divide-y divide-gray-200">
      {people.map((person: Person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
    <button className="bg-slate-300 p-2 text-center rounded-full text-sm text-slate-600 hover:bg-slate-200 active:bg-slate-500" onClick={()=>addOne()}>+添加</button>
   </div>
  )
}

export default App
