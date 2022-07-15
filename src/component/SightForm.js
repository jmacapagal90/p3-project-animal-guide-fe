import React from "react";
import { useState } from "react";
import { Form, Button, Input, Label, Container,Dropdown } from "semantic-ui-react";

function SightForm( {habitat, animals,setRefresh} ) {
    const [ animalName, setAnimalName] = useState('')
    const animalsDisplay = (animals ? animals.map((animal)=>{
        return {
            key: animal.id,
            text: animal.name,
            value: animal.name
            }
        }): null)


    function handleSubmitSight(e) {
        const animalId = animals.find(animal => animal.name == animalName).id
        e.preventDefault();
        alert("Nice catch! Thanks for contributing to animal conservation!")
        const sightingData = {
            habitat_id: habitat.id,
            animal_id: animalId,
            seen: Date()
        }

        fetch('https://fast-castle-86440.herokuapp.com/sightings', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sightingData),
        })
            .then((r) => r.json())
            .then((newSighting) => console.log(newSighting));

            fetch(`https://fast-castle-86440.herokuapp.com/animal/${animalId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  sighted: true,
                }),
              })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    console.log("also, turn Sighted of the animal to true")})
                    window.location.reload()
        }
        

return (
    <Form onSubmit={(e)=>{handleSubmitSight(e)}} >
            <Form.Field>
                <Label for="Seen">Animal Seen:</Label>
                {/* <Input placeholder='Animal' onChange={(e)=>setAnimalName(e.target.value)} value={animalName}/> */}
                <Dropdown 
                placeholder='Select Existing Animal'
                selection
                options={animalsDisplay}
                onChange={(e)=>setAnimalName(e.target.textContent)}
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
)
}

export default SightForm;