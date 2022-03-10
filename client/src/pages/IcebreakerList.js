import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import NewIcebreaker from "./NewIcebreaker";
import Pagination from "react-bootstrap/Pagination";

function IcebreakerList() {
  const [icebreakers, setIcebreakers] = useState([]);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
      <br />

      <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  return { paginationBasic };
  //   useEffect(() => {
  //     fetch("/icebreakers")
  //       .then((r) => r.json())
  //       .then(setIcebreakers);
  //   }, []);

  //   return (
  //     <Wrapper>
  //       {icebreakers.length > 0 ? (
  //         icebreakers.map((icebreaker) => (
  //           <NewIcebreaker key={icebreaker.id}>
  //             <Box>

  //               <p>
  //                 <em>{icebreaker.filled_portions}</em>
  //                 &nbsp;·&nbsp;
  //                 <cite>By {icebreaker.user.username}</cite>
  //               </p>
  //               <ReactMarkdown></ReactMarkdown>
  //             </Box>
  //           </NewIcebreaker>
  //         ))
  //       ) : (
  //         <>
  //           <h2>No icebreakers Found</h2>
  //           <Button as={Link} to="/new">
  //             Generate an icebreaker!
  //           </Button>
  //         </>
  //       )}
  //     </Wrapper>
  //   );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default IcebreakerList;
