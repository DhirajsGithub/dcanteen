import React, {useEffect, useState} from 'react'

const UseScrollPosition = () => {
    const [scrollPosition, serScrollPosition] = useState(0);

    useEffect(()=>{
        const updatePosition = ()=>{
            serScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        // return ()=> window.removeEventListener('scroll', updatePosition);
    }, [])

  return scrollPosition;
}

export default UseScrollPosition