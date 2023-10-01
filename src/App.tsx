/* import header from "./assets/header.png"; */

import "./App.css";
import Box from "./components/Box";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Box>
       <Header/>
        <div className="space"></div>
        <div className="form">
          <div className="space"></div>
          <div className="fieldset">
            <div className="label">Quais stickers:</div>
            <div className="space"></div>
            <div>
              <input type="checkbox" /> React
            </div>
            <div className="space"></div>
            <div>
              <input type="checkbox" /> Vue
            </div>
            <div>
              <input type="checkbox" /> Angular
            </div>
          </div>
          <div className="space-md"></div>
          <div className="fieldset">
            <div className="label">Quantos stickers de cada?</div>
            <div className="space"></div>
            <div className="counter">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
                <path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" />
              </svg>
              <input type="text" placeholder="0" />
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
                <path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" />
              </svg>
            </div>
          </div>
          <div className="space-md"></div>
          <div className="fieldset">
            <div className="label">Observações:</div>
            <div className="space"></div>
            <textarea
              name="descricao"
              placeholder="Alguma dúvida? Recado?"
            ></textarea>
          </div>
          <div className="space-md"></div>
          <div className="footer">
            <button>Enviar</button>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
