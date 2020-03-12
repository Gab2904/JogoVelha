function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Quadrado extends React.Component {
  render() {
    return (
      React.createElement("button", {
        className: "quadrado",
        onClick: () => {this.props.onClick();} },
      this.props.value));


  }}


class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quadrados: Array(9).fill(null),
      xIsNext: true };

  }

  render() {
    return (
      React.createElement("div", { className: "game" },
      React.createElement("div", { className: "game-board" },
      React.createElement(Tabuleiro, { quadrados: this.state.quadrados })),

      React.createElement("div", { className: "game-info" },
      React.createElement("ol", null, "Movimentos"))));



  }}



class Tabuleiro extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "jogarSozinho",

































    () => {
      let i = Math.floor(Math.random() * 9) + 1;
      alert(i);
      const quadrados = this.state.quadrados.slice();
      let ocupado = true;
      while (ocupado == true) {
        if (!quadrados[i]) {
          ocupado = false;
        } else {
          i = Math.floor(Math.random() * 9) + 1;
        }

      }

      if (calculateWinner(quadrados)) {
        alert('Jogo já acabou');
        return;
      }

      quadrados[i] = this.state.xIsNext ? 'X' : '0';

      this.setState({
        quadrados: quadrados,
        xIsNext: !this.state.xIsNext });


    });_defineProperty(this, "resetar",

    () => {
      this.setState({
        quadrados: Array(9).fill(null),
        xIsNext: true });

    });this.state = { quadrados: Array(9).fill(null), xIsNext: true };}handleClick(i) {//faz uma cópia do vetor
    const quadrados = this.state.quadrados.slice();if (calculateWinner(quadrados)) {alert('Jogo já acabou');return;}if (quadrados[i]) {alert('Quadrado ocupado!');return;}quadrados[i] = this.state.xIsNext == true ? 'X' : '0';this.setState({ quadrados: quadrados, xIsNext: !this.state.xIsNext });}renderizarQuadrado(i) {return React.createElement(Quadrado, { value: this.state.quadrados[i], onClick: () => this.handleClick(i) });}

  render() {
    const vencedor = calculateWinner(this.state.quadrados);
    let status;
    if (vencedor) {
      status = 'Vencedor: ' + vencedor;
    } else {
      status = 'Jogador: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      React.createElement("div", null,
      React.createElement("button", { onClick: () => {this.resetar();}, className: "btnResetar" }, "Resetar"),
      React.createElement("button", { onClick: () => {this.jogarSozinho();}, className: "btnResetar" }, "Joga sozinho"),
      React.createElement("div", { className: "status" }, status),
      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(0),
      this.renderizarQuadrado(1),
      this.renderizarQuadrado(2)),

      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(3),
      this.renderizarQuadrado(4),
      this.renderizarQuadrado(5)),

      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(6),
      this.renderizarQuadrado(7),
      this.renderizarQuadrado(8))));



  }}


function calculateWinner(squares) {
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];


  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(
React.createElement(Jogo, null),
document.getElementById("root"));


// ReactDOM.render(
//   <Quadrado onClick={
//       () =>{
//         alert('Clicou!')
//       }
//     }
//     value={2+2}
//     />,

//   document.getElementById ("root")
// );