import {render, screen} from '@testing-library/react'; 
import Product from './Product'; 
import * as api from '../api/ProductApi';

jest.mock("../api/ProductApi")

test("renders product", async()  => {
    api.fetchProduct.mockResolvedValue({id: 1, name: "phone", price: 5000});

    render(<Product/>);

    const productName = await screen.findByText("phone");
    const productPrice = await screen.findByText(/5000/);  
    
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
});
