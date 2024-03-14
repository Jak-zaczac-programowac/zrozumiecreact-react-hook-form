import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

const initialPeople = [
    {
        id: 1,
        name: "Jan Kowalski",
        age: 30,
        tel: "+48 555666777",
        email: "jan.kowalski@gmail.com",
        nip: "0000000001",
    },
    {
        id: 2,
        name: "Janina Kowalska",
        age: 25,
        tel: "+48 333222111",
        email: "janina.kowalska@o2.com",
    },
];

function App() {
    const [people, setPeople] = useState(initialPeople);

    return (
        <>
            <Form
                onAddPerson={(person) =>
                    setPeople((prevPeople) => [...prevPeople, person])
                }
            />
            <List data={people} />
        </>
    );
}

export default App;
