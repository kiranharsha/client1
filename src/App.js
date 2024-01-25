import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Switch, Route, Redirect } from "react-router-dom";
import DisplayData from "./components/DisplayData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDetails from "./components/user/UserDetails";
import MovieDetails from "./components/movie/MovieDetails";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphgql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <DisplayData /> */}
        <Header />
        <Switch>
          <Route path="/" exact component={DisplayData}></Route>
          <Route path="/user" exact component={UserDetails}></Route>
          <Route path="/movie" exact component={MovieDetails}></Route>
        </Switch>
        <Footer />
      </div>
    </ApolloProvider>
  );
}
export default App;
