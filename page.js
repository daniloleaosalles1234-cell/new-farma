"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Paracetamol 750mg", price: 12.99 },
  { id: 2, name: "Dipirona Sódica 1g", price: 9.5 },
  { id: 3, name: "Ibuprofeno 600mg", price: 16.0 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    if (!address || !paymentMethod) {
      alert("Preencha o endereço e a forma de pagamento.");
      return;
    }

    console.log("Novo pedido recebido pela New Farma:", {
      cart,
      address,
      paymentMethod,
    });

    setCheckout(true);
    setCart([]);
    setAddress("");
    setPaymentMethod("");
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">New Farma 💊</h1>
      <p className="text-center text-gray-600 mb-10">
        Compre medicamentos online com segurança e praticidade.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">R$ {product.price.toFixed(2)}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Carrinho 🛒</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Nenhum item no carrinho.</p>
        ) : (
          <ul className="list-disc list-inside mb-4">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Finalizar Pedido 📦</h2>
        <input
          type="text"
          placeholder="Endereço de entrega"
          className="border p-2 rounded w-full mb-4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full mb-4"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Selecione a forma de pagamento</option>
          <option value="Pix">Pix</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Boleto">Boleto</option>
        </select>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Confirmar Pedido
        </button>
      </div>

      {checkout && (
        <div className="bg-green-100 text-green-700 p-4 rounded shadow">
          Pedido realizado com sucesso! 🎉<br />
          Em breve, entraremos em contato para confirmação.
        </div>
      )}
    </main>
  );
}
