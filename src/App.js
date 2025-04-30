import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Azure Static Web App</h1>
      <p style={styles.text}>
        Цей вебзастосунок створено з використанням React і призначений для
        деплою в Azure Static Web Apps.
      </p>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#0078d4",
  },
  text: {
    fontSize: "1.2rem",
    color: "#333",
  },
};
export default App;
