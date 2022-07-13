import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { data } from './data'

export default function App() {
  const card = data.map((item) =>
        <Card key={item.id}
            item = {item}
            />)
  return (
    <div>
      <Navbar />
      <main>
        {card}
      </main>
    </div>
  );
}