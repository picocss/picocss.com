import Header from "./Header";

export default function RootError({ caught, ...props }) {
  return (
    <>
      <Header />
      <main className="container" {...props}>
        <hgroup>
          <h1>{caught.statusText}</h1>
          <p>
            {caught.status} {caught.data}
          </p>
        </hgroup>
        <p>
          <small>That's all we know.</small>
        </p>
      </main>
    </>
  );
}
