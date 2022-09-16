import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FiltersList from "./FiltersList";

it('Should render the form', () => {
    //Arrange
    render(<FiltersList />)
    //Act
    const button = screen.getByRole("button", {name: /brewed before 2010/i});
    userEvent.click(button);

    const success = screen.queryByText("Showing beers brewed before 2010")

    //Assert
    button.expect(success).toBeInTheDocument();
}) 
