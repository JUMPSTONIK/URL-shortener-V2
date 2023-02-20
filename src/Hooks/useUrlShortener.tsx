import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { urlCardTypes } from '../types/urlCardType'

export const useUrlShortener = () => {

    const [error, setError] = useState(false)
    const [url, setUrl] = useState('')
    const [urlCards, setUrlCards] = useState<urlCardTypes[]>([{
        originalUrl: 'jflsjflsd',
        shortUrl: 'fdlfjsf'
}])

    const isValidUrl = (url:string) => {
    // Regular expression for URL validation
    const urlRegex = /^((https?|ftp):\/\/)?(www\.)?[^\s/$.?#]+\.(?:site|com|net|org|edu|gov|biz|info|io|tv)(?:\/.*)?$/i;
  
    // Test the input string against the regex
    return urlRegex.test(url);
  }

    const handleOnChangeUrl = (event: { target: { value: React.SetStateAction<string> } }) =>{
        setUrl(event.target.value)
    }

    const submitShortUrl = async() =>{
        if(!isValidUrl(url)){
            setError(true)
            return
        }

        await axios.post('https://jumpstonik-url-shortener.herokuapp.com/url',{
            url
        }).then( res => {
            setUrlCards([{
                originalUrl: url,
                shortUrl: res.data.data.shortURL}, ...urlCards])
            setError(false)
        }).catch( err =>{
            console.log(err)
        })
    }
    
    return {
        error,
        url,
        urlCards,
        handleOnChangeUrl,
        submitShortUrl
    }
}

