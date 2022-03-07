import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function RecipeList() {
  const [phrases, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/phrases")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <Wrapper>
      {phrases.length > 0 ? (
        phrases.map((phrase) => (
          <Recipe key={phrase.id}>
            <Box>
             
              <p>
                <em>Time to Complete: {phrase.content} minutes</em>
                &nbsp;·&nbsp;
                <cite>By {phrase.user.username}</cite>
              </p>
              <ReactMarkdown>{phrase.instructions}</ReactMarkdown>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No icebreakers Found</h2>
          <Button as={Link} to="/new">
            Generate an icebreaker!
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default RecipeList;
