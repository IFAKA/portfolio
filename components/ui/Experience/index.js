import { Article, Description, Anchor, Subtitle, Title } from "../common";

export default function Experience() {
  return (
    <div className="container">
      <Title>Experience</Title>
      <Article>
        <Subtitle>Lead Web Developer</Subtitle>
        <Description>
          I worked at a startup that raised over{" "}
          <Anchor
            url={
              "https://businessinsider.mx/proptech-neivor-ronda-inversion-softbank_startups/"
            }
          >
            $3.5M
          </Anchor>
          . Participating in the selection of developers, as well as in the
          Frontend development using Scrum.
          <br />
          Managed 6 developers, helping them to align their OKR&apos;s,
          communicate between other teams, mentoring and KPI improvement.
        </Description>
      </Article>

      <Article>
        <Subtitle>Blockchain Developer</Subtitle>
        <Description>
          I made a course{" "}
          <Anchor url={"https://marketplace-course.vercel.app/"}>
            Marketplace
          </Anchor>{" "}
          using Web3.js to connect to the contract, SWR for data fetching,
          Next.js for user interfaces, Mocha for Unit testing, Tailwind for
          styling elements and Solidity to make the Smart Contracts.
        </Description>
      </Article>
    </div>
  );
}
