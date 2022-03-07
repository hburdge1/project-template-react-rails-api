import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewPhrase({ user }) {
  const [content, setContent] = useState("This is a phrase");
  const [phraseUser, setPhraseUser] = useState("What happens in the dark always comes to light");
  const [instructions, setInstructions] = useState(`Here's how you make it.
  
## Ingredients

- 1c Sugar
- 1c Spice

## Instructions

**Mix** sugar and spice. _Bake_ for 30 minutes.
  `);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/phrases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        phraseUser
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="content">Icebreaker</Label>
            <Input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="postedBy">Posted by:</Label>
            <Input
              type="string"
              id="phraseUser"
              value={phraseUser}
              onChange={(e) => setPhraseUser(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>
            {/* {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))} */}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{content}</h1>
        <p>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{instructions}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewPhrase;
