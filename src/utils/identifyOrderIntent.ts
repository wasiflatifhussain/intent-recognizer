// each of the keyword objects act as knowledge-bases for the requests
// for any given enquiry, entries from the knowledge-base is checked again the inquiry to check any substring 
// of the inquiry exists in one of the knowledge-bases
// if it exists, then it is marked as a match, and the function should return back to the followUpOrder function to give the appropriate followup

export const createKeywords = [
    "place a new order", "place new order", "create an order", "create order", "new order", 
    "send order", "ship order", "make order", "purchase", 
    "order product", "buy", "place order", "order now", 
    "request order"
];

export const updateKeywords = [
    "change the shipping address", "update my payment method", "update order", 
    "change order", "modify order", "edit order", "update shipping", 
    "change payment", "edit address", "update details", 
    "update delivery", "change billing", "change payment method", 
    "change delivery address"
];

export const statusKeywords = [
    "status of my order", "track my order", "order status", 
    "order tracking", "track order", "order progress", 
    "check order", "order update", "where is my order", 
    "order location", "delivery status", "order follow-up", 
    "order confirmation", "get my order", "receive my order",
    "when will i get my order", "when will my order arrive", 
    "order arrival", "order receipt"
];

export const cancelKeywords = [
    "cancel my order", "order cancellation", "cancel order", 
    "delete order", "remove order", "abort order", "call off order", 
    "stop order", "void order", "cancel request", 
    "order refund", "cancel purchase", "order reversal"
];

type Intent = "Create Order" | "Update Order" | "Order Status" | "Cancel Order" | "Other";

export const identifyOrderIntent = (inquiries: string[]): Intent[] => {
    return inquiries.map((inquiry) => {
        const lowerInquiry = inquiry.toLowerCase();

        if (createKeywords.some(kw => lowerInquiry.includes(kw))) {  // check if any of the entries from createKeywords knowledge-base exists in the inquiry string
            return "Create Order";
        } else if (updateKeywords.some(kw => lowerInquiry.includes(kw))) {  // check if any of the entries from updateKeywords knowledge-base exists in the inquiry string
            return "Update Order";
        } else if (statusKeywords.some(kw => lowerInquiry.includes(kw))) {  // check if any of the entries from statusKeywords knowledge-base exists in the inquiry string
            return "Order Status";
        } else if (cancelKeywords.some(kw => lowerInquiry.includes(kw))) {  // check if any of the entries from cancelKeywords knowledge-base exists in the inquiry string
            return "Cancel Order";
        } else {
            return "Other";
        }
    });
}
