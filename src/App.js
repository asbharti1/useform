import "./App.css";
import AssignProgressBar from './AssignProgressBar';
import MyForm from './components/useForm';
import MyComponent from './components/useFetch'

export default function App() {
  return (
    <>
    <div className="App">
      <h1>Hello 'Sanjay'</h1>
      {/* <AssignProgressBar/> */}
      <MyForm/>
      <MyComponent/>
    </div>
    </>
  );
}
