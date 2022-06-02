import { Article, Description, Title } from "../common";

export default function About() {
  return (
    <div className="container section">
      <Article>
        <Title>FAKA</Title>
        <Description>
          Ambition, detail and metrics-driven.
          <br />I code to help you make a difference.
        </Description>
      </Article>
    </div>
  );
}
