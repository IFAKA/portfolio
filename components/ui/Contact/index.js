import { Anchor, Article, Subtitle, Title } from "../common";

export default function Contact() {
  return (
    <div className="container section">
      <Article>
        <Title>Contact</Title>
        <Subtitle>
          <Anchor url={"mailto:me@faka.dev"}>me@faka.dev</Anchor>
        </Subtitle>
      </Article>
    </div>
  );
}
