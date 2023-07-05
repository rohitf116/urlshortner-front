import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
    }
  };
  const createShortUrl =async (url) => {
    const { data } = await axios.post("http://localhost:3000/", { longUrl:url })
    return data.shortUrl
  }
const handleChange = (e) => {
  e.preventDefault()
  setError("")
  setResult("")
  setCopied(false)
  setUrl(e.target.value)
}
const handleClick = async (url) => {
  console.log(url);
  try {
    const response = await axios.post("http://localhost:3000/", { longUrl: url });
    setResult(response.data.shortUrl);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
  useEffect(() => {
    console.log(result);
  }, [result]);


  return (
    <>
      <div className='main'>
         <h3>Enter a url</h3>
        <input type="text" value={url} onChange={handleChange} />
        {error?<p className='error'>{error}</p>:""}
        <button className='shrink' onClick={()=> handleClick(url)}>Shrink</button>
      </div>
      {result ?<div className='result'> <div className='resultItem'>{result}</div>  <button onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy'}
      </button></div>:""}
    </>
  )
}

export default App
