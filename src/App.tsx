import Card from './components/card'
import './App.css'
import chubis from './images/chubis.jpeg'
import dipea from './images/dipea.jpeg'
import mexicano from './images/mexicano.jpg'
import selena from './images/selena.webp'
import arrope from './images/arrope.jpg'
import boba from './images/boba.jpeg'
import pocillo from './images/pocillo.jpeg'
import georgetti from './images/georgetti.jpg'
import flor from './images/flor.jpeg'
import asahi from './images/asahi.jpeg'




function App() {
  return (
    <>
      <div>
        <h1>UPRRP Favorites</h1>
      </div>
      <div className='cards'>
        <Card image={chubis} title = 'Chubis' content = 'Puerto Rican'/> 
        <Card image={dipea} title = 'Dipea' content = 'Wings'/> 
        <Card image={mexicano} title = 'Mexicano' content = 'Mexican'/>
        <Card image={selena} title = 'Selena' content = 'Pizzeria'/>
        <Card image={arrope} title = 'Arrope' content = 'Brunch'/>
        <Card image={boba} title = 'Icy Bubo' content = 'Bubble Tea'/>
        <Card image={pocillo} title = 'Pocillo Dulce' content = 'Coffee'/>
        <Card image={georgetti} title = 'Heladeria Georgetti' content = 'Ice Cream'/>
        <Card image={flor} title = 'Flor de Parcha' content = 'Puerto Rican'/>
        <Card image={asahi} title = 'Asahi' content = 'Japanese'/>

      </div>
    </>
  )
}

export default App