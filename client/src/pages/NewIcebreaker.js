import { useState } from "react";
import { useHistory, RouteProps, Route } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import "../components/FlipCard.css";

function NewIcebreaker({ user, addIceBreaker }) {
  debugger;
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const flames = 0;

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/icebreakers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        category,
        flames,
        user,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
        // addIcebreaker(r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <div>
          <div className="">
            <h2>Create New Intro</h2>
            <h4>
              Choose between an Activity or a Question and give a detailed
              description as to what should happen or be asked to the grpup.{" "}
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Category: </label>
              <select
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Activity">Activity</option>
                <option value="Question">Question</option>
              </select>
            </div>
            <FormField>
              <Label>Description:</Label>
              <Input
                type="string"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormField>
            <cite>
              By {user.username} {Date().toLocaleString()}
            </cite>
            <FormField>
              <Button color="primary" type="submit">
                {isLoading ? "Loading..." : "Submit Intro"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
        </div>
        <div className="">
          <h1>{content}</h1>
          <h3>{category}</h3>
          {/* <ReactMarkdown>{instructions}</ReactMarkdown> */}
        </div>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewIcebreaker;
