
import './App.css';
import { ToDoContextProvider } from './Context/ToDoContext';
import ToDoCalendar from './components/ToDoCalendar';

function App() {
  return (
    <ToDoContextProvider>
      <ToDoCalendar/>
    </ToDoContextProvider>
  );
}

export default App;
