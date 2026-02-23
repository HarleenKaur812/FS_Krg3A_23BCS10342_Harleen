import {render} from "@testing-library/react";
import Greetings from "./Greetings";

test("matches snapshot",()=>{
    const {container} = render(<Greetings name="Harleen"/>);
    expect(container).toMatchSnapshot();
})