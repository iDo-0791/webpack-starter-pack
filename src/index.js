// QndReact 需要被引入
import QndReact from './qnd-react';
import QndReactDom from './qnd-react-dom';
import Counter from "./counter";

const Greeting = ({name}) => <p>Welcome {name}!</p>;

const App = (
  <div>
    <h1 className="primary">QndReact is Quick and dirty react</h1>
    <p>It is about building your own React in 90 lines of JavsScript</p>
    <Greeting name={"Ameer Jhan"} />
    <Counter />
  </div>
);

QndReactDom.render(App, document.getElementById('root'));
