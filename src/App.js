import './App.scss';
import Checkbox from './common/checkbox/Checkbox';

import Logo from './common/logo/Logo';
import RadioBtn from './common/radioBtn/RadioBtn';
import Letter from './common/letter/Letter';
import Tab from './common/tab/Tab';
import Pagination, { PaginationArrow } from './common/pagination/Pagination';

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
        <RadioBtn label={'ABC'} name="radio" />
        <RadioBtn label={'ABC'} name="radio" />
        <RadioBtn label={'ABC'} name="radio" />
      </div>

      <div>
        <p>Checkbox</p>
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" checked />
      </div>

      <div>
        <p>Letter</p>
        <Letter value={'A'} />
        <Letter value={'A'} checked />
        <Letter value={'A'} />
      </div>

      <div>
        <p>Tab</p>
        <Tab value={'Препараты'} checked />
        <Tab value={'Производители'} />
        <Tab value={'Активные вещества'} />
      </div>

      <div className="pagination-row">
        <p>Pagination</p>
        <PaginationArrow />
        <Pagination value={'1'} checked />
        <Pagination value={'2'} />
        <Pagination value={'...'} />
        <Pagination value={'12'} />
        <PaginationArrow value={'endBtn'} />
      </div>
    </div>
  );
}

export default App;
