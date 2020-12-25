import './App.css';
import React, { useState } from 'react';
import AddMovie from './components/AddMovie'
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { BrowserRouter as Router , Route } from 'react-router-dom' 
import Trailer from './components/Trailer'

function App() {

  const [movie, setMovie] = useState([
    {title : "Avengers Endgame",
    rate : 5,
    posterUrl : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    description : "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    id : 1,
    trailer : "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
  {title : "Avatar",
  rate : 3,
    posterUrl : "https://i.pinimg.com/originals/f9/9d/8c/f99d8c1aeb172d05353d9ab3841f6af2.jpg",
    description : "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
    id : 2,
    trailer : "https://www.youtube.com/embed/5PSNL1qE6VY"

},
  {title : "The Hobbit",
  rate : 2,
  posterUrl : "https://m.media-amazon.com/images/I/71iOSKkZvcL._AC_SY879_.jpg",
  description : "Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug.",
  id : 3,
  trailer :  "https://www.youtube.com/embed/JTSoD4BBCJc" 
},
{title : "Catch me if you can",
  rate : 4,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._AC_SL1500_.jpg",
  description : "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl, becomes obsessed with tracking down the con man. But Frank not only eludes capture, he revels in the pursuit.",
  id : 4,
  trailer : "https://www.youtube.com/embed/s-7pyIxz8Qg",
},
{title : "Law Abiding Citizen",
  rate : 5,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg",
  description : "Clyde Shelton is desperate to exact revenge on those who killed his family as well as on the police officials, including assistant DA Nick Rice, who could not guarantee an appropriate sentence.",
  id : 5,
  trailer : "https://www.youtube.com/embed/LX6kVRsdXW4" 
},
{title : "Up",
  rate : 1,
  posterUrl : "https://static.wikia.nocookie.net/pixar/images/1/15/Up_Poster.jpg/revision/latest?cb=20200619221440",
  description : "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
  id : 6,
  trailer : "https://www.youtube.com/embed/ORFWdXl_zJ4" 
},
{title : "Spiritted away",
  rate : 5,
  posterUrl : "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  description : "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.",
  id : 7,
  trailer : "https://www.youtube.com/embed/ByXuk9QqQkk",
},
{title : "Riddick",
  rate : 1,
  posterUrl : "https://images-na.ssl-images-amazon.com/images/I/71J21ePe%2BsL._AC_SL1138_.jpg",
  description : "Riddick finds himself on a sun-scorched planet and tries hard to fight for survival. He stands up against a race of alien predators, more lethal than any human race he has ever encountered.",
  id : 8,
  trailer : "https://www.youtube.com/embed/iP3eFIOBU0k",
},
  ])

  const [inputSearch, setInputSearch] = useState('');
  const [inputSearchRate, setInputSearchRate] = useState(0);

  const handleAdd = (a,b,c,d,e) => {
    setMovie([...movie, {title : a ,  rate : b , posterUrl : c , description : d, id: Math.random(), trailer: e}]);
  }

  const handleDelete = (i) => {
    setMovie(movie.filter((el)=> el.id != i ))
  }

  const handleEdit = (x,a,b,c,d) => {
    setMovie(movie.map((el,i)=> (el.id == x ) ? {
      title : a,
      rate : b,
      posterUrl : c ,
      description : d
    } : el
    ) )
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <h1 style ={{marginTop:"30px"}} >Free Movies</h1>
          <div className="top-search">
            <AddMovie handleAdd={handleAdd} />
            <Filter setInputSearchRate={setInputSearchRate} setInputSearch={setInputSearch} inputSearchRate={inputSearchRate} inputSearch={inputSearch}/>
          </div>
          <MovieList handleEdit={handleEdit} handleDelete={handleDelete} inputSearch={inputSearch} movie={movie} inputSearchRate={inputSearchRate} />
        </Route>
        <Route path="/:id" render={(props)=> <Trailer movie={movie} {...props} /> } /> 
      </Router>
    </div>
  );
}

export default App;
