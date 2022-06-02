import { Article, Description, Anchor, Subtitle, Title } from "../common";

export default function Experience() {
  return (
    <div className="container">
      <Title>Experience</Title>
      <Article>
        <Subtitle>Lead Web Developer</Subtitle>
        <Description>
          I worked in a startup that raised more than{" "}
          <Anchor
            url={
              "https://businessinsider.mx/proptech-neivor-ronda-inversion-softbank_startups/"
            }
          >
            $3.5M
          </Anchor>
          . Participating in developer selection, in addition to Frontend
          development using Scrum.
          <br />I managed 6 developers, with OKR alignment, communication
          between other teams, training and KPI improvement.
        </Description>
      </Article>

      <Article>
        <Subtitle>Blockchain Developer</Subtitle>
        <Description>
          I made a{" "}
          <Anchor url={"https://growledge.vercel.app/"}>
            course marketplace
          </Anchor>{" "}
          using Web3.js to interact to the contract, SWR for data fetching,
          Next.js for user interfaces, Mocha for Unit testing, Tailwind for
          styling elements and Solidity to make Smart Contracts.
          <br />
          The project runs on the Ropsten Testnet. Check the{" "}
          <Anchor url={"https://github.com/IFAKA/growledge"}>
            code
          </Anchor>
          .
        </Description>
      </Article>
    </div>
  );
}
