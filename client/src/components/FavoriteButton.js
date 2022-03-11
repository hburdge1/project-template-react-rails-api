
import React, { useState, useEffect } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { far } from '@fortawesome/free-solid-svg-icons'
  import { faStar, faExclamation} from '@fortawesome/free-solid-svg-icons'

  library.add(faStar, faExclamation)

// Separate all fetches because render hooks has an issue with rendering
// hooks a different amount of times in the same component

// THIS IS THE FAVORITE BUTTON
function FavoriteButton({favBool, history, id}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);
    const currentlyAFavorite = <FontAwesomeIcon icon="star-exclamation" />
    const notCurrentlyAFavorite = <FontAwesomeIcon icon='star' />

    const [favorite, setFavorite] = useState(favBool);


    // this toggles my button
  function toggleFavorite(icebreaker){
    setFavorite(!favorite)       
    fetch(`/icebreakers/${icebreaker.id}/update`, {
             method: "PATCH",
             headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({"favorite": favorite })
        }).then((r) => {
    //   setIsLoading(false);
        if (r.ok) {
        history.push("/");
        } 
        
        })
}
    return (
        <>
        <button
            onClick={toggleFavorite}
            key={id}>
        { favorite === true ? currentlyAFavorite : notCurrentlyAFavorite} 
        </button>
        </>
    )
}


export default FavoriteButton