import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Layout, Table, notification} from 'antd';

function App() {

  const [firstTime,setfirstTime]= useState(true);
  const [dataTable,setDataTable] = useState([])
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Home team',
      dataIndex: 'home_team',
      key: 'home_team'
    },
    {
      title: 'Home Goals',
      dataIndex: 'home_ft',
      key: 'home_ft'
    },
    {
      title: 'Away Goals',
      dataIndex: 'away_ft',
      key: 'away_ft'
    },
    {
      title: 'Away team',
      dataIndex: 'away_team',
      key: 'away_team'
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city'
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country'
    }
  ]
  const getDataMatches = matches => {
    return matches.map(match =>({
      key: match.id,
      date: match.date,
      home_team: match.home_team,
      home_ft: match.home_ft,
      away_ft: match.away_ft,
      away_team: match.away_team,
      city: match.city,
      country: match.country,
      tournament: match.tournament
    }))
  }
  const getMatches = async (params = {}) => {
    var targeturl = 'https://matches-server.herokuapp.com/v1/matchs',
        proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    
    await fetch (proxyUrl + targeturl, {
      header:{
        accept: "application/json"
        },
      }).then(response =>{
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return response
    }).then(async response =>{
      const data = await response.json()


      setDataTable(getDataMatches(data.matchs))
    }).catch(error => {
      notification.error({
        message: 'Opps!',
        description: 'There is a problem parsing the data'
      })

    })
  }
  useEffect(() => {
    if (firstTime){
    getMatches()
    setfirstTime(false)
  }
    const interval = setInterval(()=>{
      getMatches()
    }, 20000)
    return () => clearInterval(interval)
  },[])

  return (
    
    <div className='main'>
    <Layout class = 'layout'>
      <Layout.Header>
      <h1 style={{color:"white"}}>Partidos</h1>
      </Layout.Header>
      <Layout.Content>
        <Table
          columns={columns}
          dataSource={dataTable}
        />
      </Layout.Content>
      <Layout.Footer>
        <span> Made with love by Nicolas Forero</span>
        <span> MIT License</span>
      </Layout.Footer>
    </Layout>
    </div>
  )
}

export default App;
