import React, { useState, useHistory} from "react";
import { Button, Error, Input, FormField, Label, onAuth } from "../styles";



function ResponseForm({user, icebreaker, history, addIcebreaker}){
    const [response, setResponse] = useState("")
    const [errors, setErrors] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response
      }),
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        history.push("/");
        addIcebreaker(r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return(
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
  )}

export default ResponseForm