import "./styles.css";
import People from "./Component/People";
import { Input } from "./Component/Input";

export default function App() {
  return (
    <div>
      <h1>People</h1>
      <Input />
      <People />
    </div>
  );
}
