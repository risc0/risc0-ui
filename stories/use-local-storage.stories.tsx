import { Button } from "button";
/* c8 ignore start */
import { useLocalStorage } from "../hooks/use-local-storage";
import { Input } from "../input";
import { Label } from "../label";

export function Default() {
  const [value, setValue] = useLocalStorage("example-key", "initial value");

  return (
    <div className="space-y-4">
      <h2>useLocalStorage Hook</h2>
      <p>Current value: {value}</p>
      <div className="space-x-2">
        <Button onClick={() => setValue("updated value")}>Update Value</Button>
        <Button variant="outline" onClick={() => setValue("")}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export function MultipleValues() {
  const [name, setName] = useLocalStorage("user-name", "");
  const [age, setAge] = useLocalStorage("user-age", 0);

  const clearAll = () => {
    setName("");
    setAge(0);
  };

  return (
    <div className="space-y-4">
      <h2>useLocalStorage Hook - Multiple Values</h2>
      <div className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name:</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age:</Label>
          <Input id="age" type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
      </div>
      <div>
        <p>Stored Name: {name}</p>
        <p>Stored Age: {age}</p>
      </div>
      <Button variant="outline" onClick={clearAll}>
        Clear All
      </Button>
    </div>
  );
}
