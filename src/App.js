import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Footer from './components/Footer';
import StudentComponent from './components/StudentComponent';

function App() {
  const students = ['ram', 'sita', 'gita'];
  const users = ['Kumar', 'Kumari', 'Prashon'];
  return (
    <div>
        <h1>Student List</h1>
        {students.map((students, key) => {
          return <StudentComponent key={key} studentName={students} />
        })}
    </div>
  );
}

export default App;
