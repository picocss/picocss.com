import { HeaderProvider } from "~/contexts/HeaderContext";
import Main from "~/components/docs/Main";
import Header from "~/components/Header";
import ErrorHeader from "~/components/docs/Header";
import Content from "~/components/docs/Content";

export default function RootError({ error, ...props }) {
  return (
    <HeaderProvider>
      <Header />
      <Main>
        <ErrorHeader
          title={error ? error.statusText : "Oops!"}
          description="Something went wrong."
        />

        <Content>
          <p>
            <small>That's all we know.</small>
          </p>
        </Content>
      </Main>
    </HeaderProvider>
  );
}
