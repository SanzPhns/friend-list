import { render, screen } from "@testing-library/react";
import AddFriend from "./AddFriend";

const initialValues = {
    id: "",
    name: "",
    phoneNumber: "",
    email: "",
    work: "",
    city: "",
  };

test('render add friends component successfully',()=> {
    render(<AddFriend initialValues={initialValues} setValues = {jest.fn()}/>);
    const element = screen.getByText("Name");
    element.debug();
    expect(element).toBeInTheDocument();
})