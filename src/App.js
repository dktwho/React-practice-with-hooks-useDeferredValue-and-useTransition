import './App.css';
import data from './data/data';
import { useMemo, useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [users, setUsers] = useState(data)

  const filteredUser = useMemo(() => {
    return users.filter(item => item.name.toLocaleLowerCase().includes(text))
  }, [text])

  const onValueChange = (e) => {
    setText(e.target.value)
  }
 
  return (
    <>
    <div className="my-flex-cont">
      <div className='my-flex-box'>
      <input value={text} type="text" onChange={onValueChange} />
        {filteredUser.map((user) => {
          return <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        })}
      </div>   
    </div>
    </>
  );
}

export default App;
