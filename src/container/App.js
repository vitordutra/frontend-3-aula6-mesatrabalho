import FunctionalComponent from '../components/FunctionalComponent';
import ClassComponent from '../components/ClassComponent';

export default function App() {
  return (
    <div className='App'>
      <h3>Tasks: </h3>
      <ClassComponent name='João' isOnList={true} />
      <ClassComponent name='Jéssica' isOnList={true} />
      <ClassComponent name='Chris' isOnList={true} />
      <ClassComponent name='Joker' isOnList={false} />

      <h3>Guests: </h3>
      <FunctionalComponent name='João' task='meat' />
      <FunctionalComponent name='Jéssica' task='orange juice' />
      <FunctionalComponent name='Chris' task='polish sweets' />
    </div>
  );
}
