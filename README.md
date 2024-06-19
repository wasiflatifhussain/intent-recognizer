### Main files:
1. App.tsx (src/App.tsx)
2. followUpOrder.tsx (src/utils/followUpOrder.ts)
3. identifyOrderIntent.ts (src/utils/identifyOrderIntent.ts)
   
### Key Ideass
1. As we would like to detect the intent behind each inquiry, we can make knowledge bases for each inquiry type. The knowledge base for a inquiry type, for now, is basically an array object containing common words which might exist in that inquiry type. For example, if someone was making an inquiry about making a new order, their inquiry might contain words like "new order"/"create an order"/"make order" and so on. So, I tried to make knowledge bases for each inquiry type and stored them under identifyOrderIntent.ts.
   For example, the knowledge-base for "Create Order" intent for now is:
   ```
      const createKeywords = [
          "place a new order", "place new order", "create an order", "create order", "new order", 
          "send order", "ship order", "make order", "purchase", 
          "order product", "buy", "place order", "order now", 
          "request order"
      ];
   ```
3. The identifyOrderIntent.ts file will receive calls from the followUpOrder.ts function. The identifyOrderIntent function will compare the inquiry sentence against every element in the knowledge-base to see if one of the knowledge-base substrings exists within the inquiry sentence. When a match is found, the name of the inquiry intent/inquiry type is returned back to the followUpOrder function.
4. The followUpOrder.ts file contains the followUpOrder function which simply takes a inquiry and sends it to identifyOrderIntent function to get the inquiry type and based on that, it checks a dictionary object to return the follow-up from a stored fixed list of followUps.
5. The App.tsx runs the whole program and allows users to user a set of pre-loaded example inquiries (for quick checking), or enter their own inquiries, and get a follow-up.

### Further Improvements:
1. We can make the knowledge-base bigger so that more keywords are stored in it and there is greater chance that the user inquiry will give the correct follow-up
2. We can perhaps train an AI Chatbot as there are many sources available online. The chatbot can cover many more inquiries as we can feed a much bigger knowledge-base to the chatbot as it will index them and store them better. This will be optimal when we have a much larger knowledge base and want to cover many different inquiries.

### To use the platform:
1. You can click on the "Use Example Inquiries" to load a set of inquiries and test quickly by then clicking "Process Inquiries"
2. You can also write an inquiry in the input box and then click "Add Inquiry" to add the inquiry (one at a time) to the inquiry list. You can click "Process Inquiries" anytime after that, to get the results for the inquiries.
3. Click "Clear Past Inquiries" to clear all the inquiries made so far.
   
### To run the app:

#### Clone the repo, enter the directory and initiate the React Project:
```
git clone https://github.com/wasiflatifhussain/intent-recognizer.git
```
```
cd intent-recognizer
```
```
npm install
```
```
npm start
```



