import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

import "./App.css";
import "./Normalize.css";

function App() {
  return (
    <div class="container">
      <header>
        <Header />
      </header>

      <aside>
        <Nav />
      </aside>
      <main></main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
