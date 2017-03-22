import * as React from 'react';
import Container from '../components/container';

interface IAboutPageProps extends React.Props<any> {};

export default function AboutPage(props: IAboutPageProps) {
return (
    <Container size={4} center>
      <h2 className="caps">About</h2>
      <p>
        Giphy search app for learning React with Redux & Typescript.
      </p>
    </Container>
  );
}
