import Heading from 'components/Heading.client';
import Page from 'components/Page.client';
import Posts from 'components/Posts.server';
import WebGLDemo from 'components/WebGLDemo.client';

export default function Home() {
  return (
    <>
      <WebGLDemo />
      <Page
        head={
          <>
            <title>Christian de Botton</title>
            <meta
              name="description"
              content="Software engineer, photographer, videographer, animator, dog dad."
            />
          </>
        }
      >
        <Heading element="h2">Hello, world</Heading>
        <Posts />
      </Page>
    </>
  );
}
