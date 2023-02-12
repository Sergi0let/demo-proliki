import './App.scss';
import Checkbox from './common/checkbox/Checkbox';

import Logo from './common/logo/Logo';
import RadioBtn from './common/radioBtn/RadioBtn';
import Letter from './common/letter/Letter';

function App() {
  return (
    <div className="App">
      <Logo />

      <div>
        <span className="regular">Golos Regular</span>
        <span className="medium">Golos Medium</span>
        <span className="bold">Golos Bold</span>
      </div>

      <div>
        <p>radiobutton</p>
        <RadioBtn label={'ABC'} disabled name="radio" />
        <RadioBtn label={'ABC'} name="radio" />
        <RadioBtn label={'ABC'} name="radio" />
      </div>

      <div>
        <p>Checkbox</p>
        <Checkbox label="Checkbox" disabled />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" checked />
      </div>

      <div>
        <p>Letter</p>
        <Letter value={'A'} />
        <Letter value={'A'} checked />
        <Letter value={'A'} disabled />
      </div>

      {/* <div>
        <p>Tab</p>
        <Tab value={'Активные вещества'} />
        <Tab value={'Активные вещества'} checked />
        <Tab value={'Активные вещества'} disabled />
      </div> */}
    </div>
  );
}

export default App;
