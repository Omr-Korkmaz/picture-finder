import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './components/gallery/Gallery';
import Input from './components/search/Search';

function App() {

  const [photos, setPhotos] = useState([]);
  const [loading, setloading] = useState(true)
  const [search, setSearch]= useState('')



 
    const fetchData = async (search)=>{
      setloading(true);
      try{
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=`);

      const pictures = await response.data;
      setPhotos(pictures);
      setloading(false)
      console.log('THIS IS THE RESOPONSE', pictures)
    }
  
  catch (err) {
    console.log(err);
  }}
  
  useEffect(()=>{
fetchData()
  },[])

const onChangeHandler = (event)=>{
setSearch(event.target.value)
}

const submitHandler = (event)=>{
  event.preventDefault();
  fetchData(search);
}

if(loading){
  return (<h1>Looding</h1>)
}



  return (
    <div className="App">

      
      <h1>Hello</h1>
      <Input SearchInput = {onChangeHandler}  submit={submitHandler}  />

      <Gallery PhotosArray= {photos.results} />
     
    </div>
  );
}

export default App;
