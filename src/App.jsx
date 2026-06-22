import "./styles/App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

function App() {
  return (
    <div className="app">
      <Header />

      <TodoForm />

      <EmptyState />

      <TodoList />

      <Footer />
    </div>
  );
}

export default App;