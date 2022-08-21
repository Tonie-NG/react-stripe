import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
const StripeKey = "pk_test_51LXSfRHhVAhEjh6ZPas68JOkQHFXKsnrei74rlenpF43kjSjEROhSlLe4Ljuy3QixaWdkXdhJ47ebJYgK8Fr7Vns004D7UHf1Z";

function Pay() {

    const [stripeToken, setStripeToken] = useState(null);

    const navigateTo = useNavigate()

    const onToken = (token) => {
        setStripeToken(token);
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount:2000,
                    }
                );
                console.log(res.data)
                navigateTo('/success');
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigateTo])

  return (
    <div 
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto ",
        }}
    >
        {stripeToken ? (<span>Processing. Please wait.....</span>) : (
        <StripeCheckout
            name = "tonie shop"
            image=''
            billingAddress = ''
            shippingAddress = ''
            description='Your Total is $20'
            amount={2000}
            token={onToken}
            stripeKey={StripeKey}
        >
        <button
        style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
        }}>
            Pay Now
        </button>
        </StripeCheckout>
        )}
    </div>
  )
}

export default Pay