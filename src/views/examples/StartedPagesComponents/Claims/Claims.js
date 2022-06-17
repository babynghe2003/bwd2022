import React from 'react'
import { useEffect,useState,useRef,useCallback} from 'react'

import './claims.css'

export default function Claims(props) {

    const {img, title} = props
    const [y, setY] = useState(window.scrollY);
    const [toggle, setToggle] = useState(false);
    const myRef = useRef()

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y>myRef.current.offsetTop-800 && toggle === false) {
                setToggle(true)
                console.log("true")
                document.getElementById("main").classList.add("active")
            }else if (toggle === true && y<myRef.current.offsetTop-800) {
                setToggle(false)
                console.log("false")
                document.getElementById("main").classList.remove("active")
            }
                
            
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
  return (
    <div className='claims' ref={myRef}>
        <div className='ClaimsSection'>
            <div className='claimsContent'>
                <div className='claimsText'>
                    <h1 style={{color: '#111', fontSize: '60px', lineHeight: '1em', fontWeight: 800}} className='headingClaimsText'>What you get.</h1>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3 text-info">Gain knowledge about sex education</h3>
                        <div className="body-copy-2">
                        Sex education is extremely important, helping you understand the issues of puberty, what to do or not to do.</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3 text-warning">Know how to protect yourself from abuse</h3>
                        <div className="body-copy-2">The situation of young people being sexually abused is a lot, we should understand to avoid abuse.</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3 text-success">Share sensitive issues with everyone</h3>
                        <div className="body-copy-2">Adolescence has a lot of sensitive issues that will happen, it would be great if someone would listen and answer those issues, right?</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3 text-dark">All anonymous</h3>
                        <div className="body-copy-2">You can ask and answer questions for others without anyone knowing, but be civilized</div>
                    </div>
                </div>
                <div id="main" className='claimsImg'>
                  <img src={img.imgSrc} alt="" className="wygScreenshot"/>
                </div>
            </div>
        </div>
    </div>
  )
}
