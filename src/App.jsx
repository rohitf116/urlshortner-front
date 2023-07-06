import { useEffect, useState } from "react";
import axios from "axios";
import { FaCopy } from "react-icons/fa";
import Search from "./components/Search";
import Headline from "./components/Headline";
import SubmitButton from "./components/SubmitButton";
function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setError("");
    setResult("");
    setCopied(false);
    setUrl(e.target.value);
  };
  const handleClick = async (url) => {
    console.log(url);
    try {
      const response = await axios.post(
        "https://urlshortner-uxr5.onrender.com",
        {
          longUrl: url,
        }
      );

      setResult(response.data.shortUrl);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="main">
        <div className="content">
          <Headline />
          <div className="input-container">
            <Search url={url} onUrlChane={handleChange} />
            {error ? <h4>{error}</h4> : ""}
            <SubmitButton url={url} onSubmitHandle={handleClick} />
          </div>
          <div>
            <div className="result">
              {result ? (
                <>
                  <p className="success">{result}</p>
                  <button className="FaCopy">
                    <FaCopy onClick={copyToClipboard} />
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
