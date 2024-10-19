import "../styles/shorten-links.css"
// import {useState} from 'react';

function ShorterLinks() {
   /* const [inputUrl, setInputUrl] = useState("");
   const [shortenedUrl, setShortenedUrl] = useState(""); */

   async function handleShortenClick() {
      /* if(!inputUrl){
         alert("Ingrese una URL valida");
         return
      } */

      /* const apiUrl = 'https://ulvis.net/API/write/get?url=https://es.react.dev/reference/react/useContext';
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const url = corsProxy + apiUrl;

      fetch(url)
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error('Error:', error)); */

      const inputUrl = 'https://es.react.dev/reference/react/useContext'; // Ejemplo de URL
      const response = await fetch(`http://localhost:3000/shorten-url?url=${encodeURIComponent(inputUrl)}`);
      const data = await response.json();
      console.log("URL acortada:", data.shortenedUrl);
          
             

      /* const respone = await fetch("https://ulvis.net/API/write/get?url=https://es.react.dev/reference/react/useContext") */

      /* try {
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
      } */

      /* async function handleShortenClick() {
         try {
            const response = await fetch(`https://ulvis.net/API/write/get?url=${encodeURIComponent(inputUrl)}`, {
               method: "GET",
               headers: {
               "Content-Type": "application/json",
               }
            });
         
            if (!response.ok) {
               throw new Error("Error al acortar la URL");
            }
         
            const shortenedUrl = await response.text();
         
            setShortenedUrl(shortenedUrl);
            console.log("URL acortada:", shortenedUrl);
         
         } catch (error) {
            console.error("Error", error);
            alert("Failed to shorten the URL");
         }
      } */
          
      /* async function handleShortenClick() {
         try {
           const response = await fetch(`https://ulvis.net/API/write/get?url=${encodeURIComponent(inputUrl)}`, {
             method: "GET",
             headers: {
               "Content-Type": "application/json",
             }
           });
       
           if (!response.ok) {
             throw new Error("Error al acortar la URL");
           }
       
           const shortenedUrl = await response.text();
       
           setShortenedUrl(shortenedUrl);
           console.log("URL acortada:", shortenedUrl);
       
         } catch (error) {
           console.error("Error", error);
           alert("Failed to shorten the URL");
         }
      } */
       
  }

  return (
    <div className="shorten-container">      
      <input type="text" id="input" className="shorten-input" /* value={inputUrl} onChange={e => setInputUrl(e.target.value)} */ placeholder="Shorten a link here..."/>
      <button type="button" id="shorten-btn" className="shorten-button" onClick={handleShortenClick}>Shorten It!</button>
    </div>
  )
}

export default ShorterLinks