// import React from 'react';
import axios from 'axios';

export function Api(setData, setDescription, date) {
    if(date === undefined) {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(
          res => {
              setData(res.data.hdurl)
              setDescription(res.data.explanation)
          })
      .catch(err => console.log(err))
    
    }else if (date){
        axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(
        res => {
            setData(res.data.hdurl)
            setDescription(res.data.explanation)
        })
      .catch(err => console.log(err))
    }

}
