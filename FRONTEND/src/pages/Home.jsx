import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Home = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!url) {
      console.error("❌ Please fill all fields")
      return
    }

    console.log("🔄 Sending URL...")
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/create`, { url })
      console.log("✅ Short URL generated:", response.data)
      setShortUrl(response.data.short_url) // ✅ Only set the short URL string
      console.log(`URL has been set successfully: ${response.data.short_url}`)
    } catch (error) {
      console.error("❌ Error shortening URL:", error.message)
    }
  }


  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex justify-center items-center mt-10'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Best Free URL Shortener: Track, Analyze, and Boost Your Links</h1>
          <p className='text-gray-500 mt-2'>
            Shorten, track, and analyze your links with our free URL shortener. Get insights, boost your traffic, and grow your brand.
          </p>
        </div>
      </div>

      <form onSubmit={submitHandler} className='flex justify-center items-center mt-10 gap-3'>
        <input
          type="text"
          placeholder='Enter your link here'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='border-2 w-1/2 h-15 border-gray-300 rounded-md p-3'
        />
        <button type="submit" className='bg-blue-500 text-white px-8 py-4 rounded-md'>
          Short URL
        </button>
      </form>


      {shortUrl && (
        <div className='flex justify-center mt-5 text-center'>
          <p className='text-green-600 font-semibold'>Shortened URL: <a href={shortUrl} target='_blank' rel='noreferrer' className='underline'>{shortUrl}</a></p>
        </div>
      )}

    </div>
  )
}

export default Home
