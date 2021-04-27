import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {

  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    (async () => {
      let requestURL = await fetch('https://reqres.in/api/users?per_page=12');
      const dataFromUrl = await requestURL.json();
      if (dataFromUrl) setUsersData(dataFromUrl.data);
    })();
  }, [] )

  const onRemoveCard = (id) => {
    const deleteCard = usersData.filter(item => item.id !== id);
    setUsersData(deleteCard)
  }

  const addCard = (event) => {
    if(event) event.preventDefault();
    
    if (event) {
      setUsersData ([
        ...usersData, {
          id: usersData[usersData.length - 1].id + 1,
          first_name: event.target.firstName.value,
          last_name: event.target.lastName.value
        }
      ])
    }
  }
   
  return (
    <div >
      <Form 
        onClick={e => addCard(e)} 
      />
      <div>
        {usersData && usersData.map(item => <Card
          id={item.id}
          firstName={item.first_name}
          lastName={item.last_name}
          onRemoveCard={id => onRemoveCard(id)}
        />)}
      </div>
    </div>
  );
}

export default App;