// const app = document.getElementById('app');
// const root = ReactDom.creatRoot(app);
// root.render(<h1>Hooooola</h1>);

function Raiz() {
  return <p><CompA/><CompB/></p>;
}
function CompA() {
  return <p>Develop. Preview. Ship.<CompA1/></p>;
}
function CompA1() {
  return <p>Develop. Preview. Ship.</p>;
}
function CompB() {
  return <p>Develop. Preview. Ship.<CompB1/></p>;
}
function CompB1() {
  return <p>Develop. Preview. Ship.</p>;
}
 
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<Raiz/>);