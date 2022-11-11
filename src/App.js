import MailBox from "./components/MailBox";
import NavBar from "./components/NavBar";
import TicketContainer from "./components/TicketContainer";

function App() {
  return (
    <div className="App bg-[#FAFAFA]">
      <NavBar />
      <div className="h-screen flex justify-start">
        <MailBox />
        <TicketContainer/>
      </div>
      
    </div>
  );
}

export default App;
