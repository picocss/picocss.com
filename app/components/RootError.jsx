import Header from "~/components/Header";
import Content from "~/components/docs/Content";
import ErrorHeader from "~/components/docs/Header";
import Main from "~/components/docs/Main";
import { HeaderProvider } from "~/contexts/HeaderContext";

export default function RootError({ error, ...props }) {
  return (
    <HeaderProvider {...props}>
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
