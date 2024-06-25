// components/CustomCartProvider.js
import { CartProvider } from 'react-use-cart';

const CustomCartProvider = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default CustomCartProvider;
