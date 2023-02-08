import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App"



// we write a test with key elements and specifics we are looking for
test("It should show off players fname,lname and career stats", async ()=>{


    render(<App/>);// rendering my app function

    //lets check to see if there is a list of players
    const element = await screen.findByRole("list");// there is no list yet

    //check that a specific person or people are in the list
    const player1 = await screen.findByText(/Billy/);
    const player2 = await screen.findByText(/Marcus/)
})


test("It should be able to create new players", async () => {

    render(<App/>)

    // checking to see if the elements are there
    const fnameInput = await screen.findByPlaceholderText("John");
    const lnameInput = await screen.findByPlaceholderText("Smith");
    const heightInput = await screen.findByPlaceholderText("72");
    const weightInput = await screen.findByPlaceholderText("200");
    const addButton = await screen.findByText(/Add Player/);

    // interact with elements like a user
    userEvent.type(fnameInput,"Frank");
    userEvent.type(lnameInput,"Spilman");
    userEvent.type(heightInput,"80");
    userEvent.type(weightInput,"265");
    userEvent.click(addButton);

    //check to see that a element popped up saying player created
    const createdHeading = await screen.findByText(/Player Created/);

    //check that the person added is on the screen
    const frank = await screen.findByText(/Frank/);

})