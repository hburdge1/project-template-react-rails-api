import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import NewIcebreaker from "./NewIcebreaker"

function IcebreakerList() {
  const [icebreakers, setIcebreakers] = useState([]);

  useEffect(() => {
    fetch("/icebreakers/")
      .then((r) => r.json())
      .then(setIcebreakers);
  }, []);

  return (
    <Wrapper>
      {icebreakers.length > 0 ? (
        icebreakers.map((icebreaker) => (
          <NewIcebreaker key={icebreaker.id}>
            <Box>
             
              <p>
                <em>{icebreaker.content}</em>
                &nbsp;·&nbsp;
                <cite>By {icebreaker.user.username}</cite>
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
