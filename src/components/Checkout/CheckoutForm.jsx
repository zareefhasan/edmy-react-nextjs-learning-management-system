"use client";

import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutList from "./CheckoutList";
import { cartAmoutSub, cartTotal } from "@/utils/cartTotal";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ lang }) => {
  const { count, cart, remove } = useCartStore();
  const handleRemove = async (cartId) => {
    remove(cartId);
  };

  return (
    <>
      <div className="cart-area ptb-100">
        <div className="container">
          <p className="your-cart">
            <span>{count()}</span> courses in your cart
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cart-content">
                <ul className="single-cart">
									{count() > 0 ? (
										cart.map((cart) => (
											<CheckoutList
												lang={lang}
												key={cart.id}
												{...cart}
												onRemove={() => handleRemove(cart.id)}
											/>
										))
									) : (
										<>
											<div className="col-lg-12 text-center">
												<h3
													style={{
														textAlign: "center",
														fontWeight: "bold",
														color: "#0000001f",
														fontSize: "93px",
													}}
												>
													Empty
												</h3>

												<Link
													href={`/${lang}/courses`}
													className="default-btn"
												> 
													Continue Shopping
												</Link>
											</div>
										</>
									)}
                </ul>
              </div>
            </div>

            {count() > 0 && (
              <div className="col-lg-4 col-md-12">
								<div className="cart-total">
									<h3>

										Total <span>${cartTotal(cart)}</span>
										
									</h3>

									<ul>
										<li>
											<del>
												${cartAmoutSub(cart)}
											</del>
										</li>
									</ul>
  
									<Elements stripe={stripePromise}>
										<PaymentForm />
									</Elements>
								</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
