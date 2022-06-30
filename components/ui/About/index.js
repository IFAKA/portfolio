import { Article, Description, Title } from "../common";

export default function About() {
  return (
    <div className="container section">
      <Article>
        <Title>FAKA</Title>
        <Description>
          Driven by vision, discipline and metrics.
          <br />I code to help you make a difference.
        </Description>
      </Article>
    </div>
  );
}
