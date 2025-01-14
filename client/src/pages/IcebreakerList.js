import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles"
import NewIcebreaker from "./NewIcebreaker";
import MoreButton from "../components/MoreButton.js";
import { FlipCard } from "../components/FlipCard.js";

function IcebreakerList() {
    let initialPage = 0;
  const [seeIceBreakers, setIceBreakers] = useState([]);
  const [currentPage, setPage] = useState(initialPage);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
    function updateIcebreaker(id, flames) {
    //PATCH
    let flames_a = flames + 1;
    fetch(`/icebreakers/${id}/update`, {
      method: "PATCH",
      body: JSON.stringify({ flames: flames_a }),
    }).then(() => {
      setIceBreakers(
        seeIceBreakers.map((ice) => {
          if (ice.id === id) {
            ice.flames = flames;
          }
          return ice;
        })
      );
    });
  }


  const removeIntro = (id) => {
    fetch(`/icebreakers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setIceBreakers(
      seeIceBreakers.filter((i) => {
        return i.id !== id;
      })
    );
  };

  // get all icebreakers
  useEffect(() => {
    fetch("/icebreakers")
      .then((res) => res.json())
      .then((data) => setIceBreakers(data));
  }, []);

  //update icebreakers

  const intros = seeIceBreakers.slice(currentPage * 6, (currentPage + 1) * 6);

  return (
    <div className="card-container">
      {Array.from(intros).map((ice) => (
        <div className="card-item-container">
          <FlipCard
            content={ice.content}
            tags={ice.tags}
            flames={ice.flames}
            id={ice.id}
            icebreaker={ice}
            key={ice.id}
            removeIntro={removeIntro}
            updateIcebreaker={() => updateIcebreaker(ice.id, ice.flames + 1)}
          />
        </div>
      ))}
      <div className="">
        <div className="">
          <MoreButton nextPage={handleNextPage} />
        </div>
      </div>
    </div>
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
