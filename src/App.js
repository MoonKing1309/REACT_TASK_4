import './App.css';
import Axios from 'axios';
import {useState,useEffect,Component} from 'react';
function App(){

  const [data,setData] = useState([]);

  useEffect(()=>
  {
    Axios.get("https://dummyjson.com/users")
    .then((res)=>
    { 
      console.log(res.data.users)
        setData(res.data.users);
    })
    .catch((err)=>alert(err))
  },[])

  function fetchDetails()
  {
    return data.map((x,i)=>{
      return(
          <tbody key={i}>
            <tr>
              <td>{x.id}</td>
              <td><img src={x.image} alt="pfp" width={'50px'}></img></td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.gender}</td>
              <td>{x.email}</td>
              <td>{x.username}</td>
              <td>{x.domain}</td>
              <td>{x.ip}</td>
              <td>{x.university}</td>
            </tr>
          </tbody> 
      )
    })
  }
  
  return(
        <div>
          <h1>Dummy Data</h1>
          <table border={'2px'}>
          <tbody>
            <tr style={{border:"2px solid white"}}>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </tbody>
          {
            fetchDetails()
          }
        </table>
        </div>
        
  )
}

export default App
