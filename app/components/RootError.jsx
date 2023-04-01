import Header from "./Header";

export default function RootError({ error, ...props }) {
  return (
    <>
      <Header />
      <main className="container" {...props}>
        <hgroup>
          <h1>{error ? error.statusText : "Oops!"}</h1>
          <p>
            {error ? (
              <>
                {error.status} {error.data}
              </>
            ) : (
              "Something went wrong."
            )}
          </p>
        </hgroup>
        <p>
          <small>That's all we know.</small>
        </p>
      </main>
    </>
  );
}
