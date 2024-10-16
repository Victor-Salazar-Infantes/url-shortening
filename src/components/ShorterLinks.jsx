import "../styles/shorten-links.css"
// import {useState} from 'react';

function ShorterLinks() {
  /* const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  async function handleShortenClick() {
    if(!inputUrl){
      alert("Ingrese una URL valida");
      return
    }

    try {
      const response = await fetch("/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({url: inputUrl}),
      });

      if (!response.ok){
        throw new Error("Error al acortar la URL");
      }

      const data = await response.json();

      setShortenedUrl(data.result_url);
      console.log(shortenedUrl);

    } catch (error) {
      console.error("Error", error);
      alert("Failed to shorten the URL");
    }
  } */

  return (
    <div className="shorten-container">      
      <input type="text" id="input" className="shorten-input" /* value={inputUrl} onChange={e => setInputUrl(e.target.value)}  */placeholder="Shorten a link here..."/>
      <button type="button" id="shorten-btn" className="shorten-button" /* onClick={handleShortenClick} */>Shorten It!</button>
    </div>
  )
}

export default ShorterLinks