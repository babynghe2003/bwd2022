import React from 'react'
import './inspiration.css'

export default function Inspiration() {
  return (
    <div className='inspiration'>
        <div className='wrapperInspiration'>
            <div className='contentInspiration'>
                <div className='imgInspiration'>
                <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614a2fbaaf92eb5b7a83b6df_studio-illustration.svg" loading="lazy" alt="" class="studioIllustration"/>
                </div>
                <div className='textInspiration'>
                    <h1 className='heading-1'>Where the best designers go for inspiration and community.</h1>
                    <div class="body-copy-2">Over 40,000 designers trust Pttrns as one of their top sources for production UI design research and inspiration. Improve your ideation and concept generation skills while saving hours of research time.</div>
                </div>
            </div>
        </div>
    </div>
  )
}
