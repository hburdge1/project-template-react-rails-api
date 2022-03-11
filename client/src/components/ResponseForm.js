import React, { useState, useHistory} from "react";
import { Button, Error, Input, FormField, Label, onAuth } from "../styles";



function ResponseForm({user, icebreaker, responses, patchIcebreaker, addIcebreaker}){
    const [allResponse, setAllResponse] = useState([responses])
    const [response, setResponse] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setResponse(e.target.value)
    // setIsLoading(true);
    fetch(`/responses/`, {
      method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "response": response,
        "icebreaker_id": icebreaker.id})
            
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        patchIcebreakers(r);
      } else {
        
      }
    });
  }
    function patchIcebreakers(ice){
        let newIce = this.state.icebreakers.filter((f) => f.id !== ice.id)
        newIce.push(ice)
        this.setState({
         newIce
    })
    }
  return(
      <>
      <ul>
      {icebreaker.responses.map((r) => <li>{r.response} --from ({r.response.username})</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
           <FormField>
            <Label>Description:</Label>
            <Input
              type="text-area"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            />
          </FormField>
         <cite>
            By {user} {Date().toLocaleString()}
          </cite>
          <FormField>
            <Button color="primary" type="submit">
              Submit Response
            </Button>
          </FormField>
      </form>
    </>
  )}

export default ResponseForm