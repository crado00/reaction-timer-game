import { useState } from 'react'
import ReactionTimerGame from './components/ReactionTimerGame';

const App = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="bg-green-100 min-h-screen flex justify-center items-center">
        <ReactionTimerGame/>
    </div>
  );
};

export default App;