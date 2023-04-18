import React, { useState, useEffect } from "react";
import "./HomePage.css";
import TMDB_logo from './assets/TMDB-logo.png';
import {useNavigate} from 'react-router-dom';

const App = (props) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const API_KEY = "85981b526007525e8ea7aceb499b7672";
  const BASE_URL = "https://api.themoviedb.org/4/";
  const fetchUrl = `${BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
  let navigate = useNavigate();

  useEffect(() => {
    // 从 API 获取第一张图片
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          // 从 API 返回的结果中获取第一张图片的 URL
          const url = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
          setBackgroundImage(url);
        }
      } catch (error) {
        console.error("Failed to fetch background image:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="overlay">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <button onClick={()=>navigate("/")} className="nav-button">Home</button>
              <button onClick={()=>navigate("/")} className="nav-button">Movie List</button>
            </div>
            <div className="icon-container">
              <img
                className="icon"
                src={TMDB_logo} // 替换成你的图标 URL
                alt="Icon"
              />
            </div>
            <div className="navbar-right">
              <button onClick={()=>navigate("/liked")} className="nav-button">Liked</button>
              <button onClick={()=>navigate("/blocked")} className="nav-button">Blocked</button>
            </div>
          </div>
        </nav>
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default App;
