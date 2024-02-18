import React,{useEffect , useState} from 'react'
import GooglePayButton from '@google-pay/button-react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export default function Payments() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const location = useLocation();
  const [paidFor, setpaidFor] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paidForParam = searchParams.get('paidFor');
    setpaidFor(paidForParam);
    console.log(paidFor)
  }, [location.search]);
 

 
  const onSubmit = (data) => {
      console.log(data); // Data contains email and amount
      // You can perform further actions, like sending data to a server
      paymentData = {
        "email": data.email,
        "paid_amt": data.amount,
        "paid_for":paidFor
      }
  };

  return (
   <>
   <br></br>
   <br></br>
   <br></br>
   <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body ">
            <h2 class="card-title mb-4">Donate 🤝</h2>
            <p class="card-text">"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</p>
            <p class="card-text">"Happiness doesn't result from what we get, but from what we give." - Ben Carson</p>
           
           {/* form */}
           <div className="container mt-3">
            <div className="row ">
                <div className="col-md-12 p-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="form-group col-5">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="inputEmail"
                                placeholder="Enter email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>
                        <div className="form-group col-5">
                            <label htmlFor="inputAmount">Amount (INR)</label>
                            <input
                                type="number"
                                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                id="inputAmount"
                                placeholder="Enter amount"
                                {...register('amount', { required: 'Amount is required' })}
                            />
                            {errors.amount && <div className="invalid-feedback">{errors.amount.message}</div>}
                        </div>
                        <h5>Donate using Gpay</h5>
        <GooglePayButton
        environment='TEST'
        buttonSizeMode='fill'
        buttonType="plain"
        paymentRequest={{
          apiVersion:2,
          apiVersionMinor:0,
          allowedPaymentMethods:[
            {
              type:'CARD',
              parameters:{
                allowedAuthMethods: ['PAN_ONLY' , 'CRYPTOGRAM_3DS'],
                allowedCardNetworks:['MASTERCARDS', 'VISA']
              },
              tokenizationSpecification:{
                type: 'PAYMENT_GATEWAY',
                parameters:{
                  gateway:'example',
                  gatewayMerchantId: 'exampleGatewayMerchantID',
                },
              },
            },
          ],
          merchantInfo:{
          merchantId: 'BCR2DN4T5H7KZHT5',
          merchantName: 'Demo Only (you will not be charged)',
          },
          transactionInfo:{
            totalPriceStatus:'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: 100,
            currencyCode:'INR',
            countryCode:'IN',
          },
        }}
        onLoadPaymentData={paymentData =>{
          console.log('TODO: send order to server', paymentData.paymentMethodData);
          alert("done payment");
        }}
        />
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}
