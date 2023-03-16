import './App.css';
import data from './data/data';
import { useMemo, useState, useDeferredValue, useTransition } from 'react'

function App() {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [users, setUsers] = useState(data)
  const defferedValue = useDeferredValue(text2)
  const [isPending, startTransition] = useTransition();

  const filteredUser = useMemo(() => {
    return users.filter(item => item.name.toLocaleLowerCase().includes(text))
  }, [text])
  
  const filteredUser2= useMemo(() => {
    return users.filter(item => item.name.toLocaleLowerCase().includes(text2))
  }, [defferedValue])

  const filteredUser3= useMemo(() => {
    return users.filter(item => item.name.toLocaleLowerCase().includes(text3))
  }, [text3])
  

  const onValueChange = (e) => {
    setText(e.target.value)
  }

  const onValueChange2 = (e) => {
    setText2(e.target.value)
  }

  const onValueChange3 = (e) => {
    startTransition(() => {
    setText3(e.target.value)
    })
  }
 
  return (
    <>
    <div className="my-flex-cont">
      <div className='my-flex-box'>
      <h2>default filter</h2>
      <input value={text} type="text" onChange={onValueChange} />
        {filteredUser.map((user) => {
          return <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        })}
      </div>   

      <div className='my-flex-box'>
        <h2>useDefferedValue</h2>
      <input value={text2} type="text" onChange={onValueChange2} />
        {filteredUser2.map((user) => {
          return <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        })}
      </div>   

      <div className='my-flex-box'>
        <h2>useTransition</h2>
      <input value={text3} type="text" onChange={onValueChange3} />
      {isPending ? <h4>Loading...</h4> : filteredUser3.map((user) => {
          return <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        })  }
        
      </div>   
    </div>
    </>
  );
}

export default App;
