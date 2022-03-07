import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function IcebreakerList() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    fetch("/outlinelist")
      .then((r) => r.json())
      .then(setPhrases);
  }, []);

  return (
    <Wrapper>
      {phrases.length > 0 ? (
        phrases.map((phrase) => (
          <NewIcebreaker key={phrase.id}>
            <Box>
             
              <p>
                <em>{phrase.filled_portions}</em>
                &nbsp;·&nbsp;
                <cite>By {phrase.user.username}</cite>
              </p>
              <ReactMarkdown></ReactMarkdown>
            </Box>
          </NewIcebreaker>
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

export default IcebreakerList;
