import Link from 'next/link';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Fluttensor">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Lee. I'm a Developer, Data Scientist;
          </p>
          {/* <p>
            I’ve spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. I write about
            development, tech careers, and my personal life on&nbsp;
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link>
          </p>
          <p>
            I grew up in small-town Iowa and went to school at Iowa State,
            graduating with a degree in Computer Engineering. I spend my free
            time playing music, creating videos, and enjoying time with friends
            and family in Des Moines, IA.
          </p> */}
        </div>
      </div>
    </Container>
  );
}
