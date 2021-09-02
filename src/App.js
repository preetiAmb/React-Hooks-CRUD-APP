import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';

function App() {
  return (
    <div className="container-x1">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>  
    </div>
  );
}

export default App;
