import { identifyOrderIntent } from "./identifyOrderIntent";

// this is the followUpActions object, that the function followUpOrder usees to return the followup for the intent
const followUpActions = {
    "Create Order": "Initiate new order creation.",
    "Update Order": "Update order details.",
    "Order Status": "Check order tracking system.",
    "Cancel Order": "Initiate order cancellation.",
    "Other": "Forward to order support team."
};

// this function receives each enquiry and calls the identifyOrderIntent function to check what is the intent of this order
// the function that uses the intent to check the followUpActions object and return the output
export const followUpOrder = (inquiries: string[]): { inquiry: string, followUp: string }[] => {
    const intents = identifyOrderIntent(inquiries);
    return intents.map((intent, index) => ({
        inquiry: inquiries[index],
        followUp: followUpActions[intent]
    }));
};

