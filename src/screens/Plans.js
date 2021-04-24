import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from '../features/userSlice';
import { firestore } from '../firebase';
import { loadStripe } from '@stripe/stripe-js';

const Plans = () => {

    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);
    const user = useSelector(selectUser);

    useEffect(() => {
        firestore.collection('products').where('active', '==', true).get().then((querySnapshot) => {
            const productsObjects = {};
            querySnapshot.forEach(async productDoc => {
                productsObjects[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach((price) => {
                    productsObjects[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProducts(productsObjects);
        });
    }, []);

    useEffect(() => {
        firestore.collection('customers').doc(user.uid).collection('subscriptions').get().then((querySnapshot) => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_start: subscription.data().current_period_end.seconds,
                    current_period_end: subscription.data().current_period_start.seconds
                })
            })
        })
    }, [user.uid]);

    const loadPayment = async (priceId) => {
        const docRef = await firestore.collection('customers').doc(user.uid).collection('checkout_sessions').add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(`An error occured: ${error.message}`);
            }

            if (sessionId) {
                const stripe = await loadStripe('pk_test_51IjRx4BimLNy0r0pmt2W9qxYAffrtO9hk4kLlOXp1crpQfxHxYDBP5tcKrATRiKXSvOybKu6UubjExV6KU4JL8E100Cfpgxy7l');

                stripe.redirectToCheckout({ sessionId });
            };
        })
    };

    return (
        <PlansContainer>
            {Object.entries(products).map(([productId, productData]) => {

                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

                return (
                    <PlanDetails key={productId}>
                        <PlanInfo>
                            <PlanName>{productData.name}</PlanName>
                            <PlanDescription>{productData.description}</PlanDescription>
                        </PlanInfo>
                        <SubscribeButton onClick={() => !isCurrentPackage && loadPayment(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                        </SubscribeButton>
                    </PlanDetails>
                )
            })}
        </PlansContainer>
    )
}

export default Plans

const PlansContainer = styled.div``;

const PlanDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

const PlanInfo = styled.div``;

const PlanName = styled.h3``;

const PlanDescription = styled.h3``;

const SubscribeButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: white;
    font-weight: 600;
    color: var(--dark-grey-1);
    border: none;
    outline: none;
    cursor: pointer;
`;
