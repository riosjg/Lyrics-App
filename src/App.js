import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';

function App() {
  const [ lyricSearch, setLyricSearch ] = useState({});
  const [ lyric, setLyric ] = useState('');
  const [ info, setInfo ] = useState({});

  useEffect( () => {
    if(Object.keys(lyricSearch).length === 0) return;
    const fetchData = async () => {
      const { artist, song } = lyricSearch;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [lyrics, info] = await Promise.all([
        Axios(url),
        Axios(url2)
      ])
      setLyric(lyrics.data.lyrics);
      setInfo(info.data.artists[0]);
    }
    fetchData();
  }, [lyricSearch, info])
  return (
    <>
    <Form 
      setLyricSearch={setLyricSearch}
    />

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Info
            info={info}
          />
        </div>
        <div className="col-md-6">
          <Song
            lyric={lyric}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
