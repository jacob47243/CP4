# App API Documentation
This API gives information on various dog breeds, including the Portuguese Water Dog, Doodle, and Australian Shepherd.

## Get breed
**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Gives information about the dog breeds

**Supported Parameters** 
  * `type` (required)
  * The specific breed, either PWD or Doodle.

**Example Request:** GET /breed/PWD

**Example Response:**

```json
{
  "text": "The Portuguese Water Dog is a breed of water dog from the Algarve region of Portugal. These dogs were originally used by fishermen to herd fish into nets, retrieve lost tackle or broken nets, and act as couriers from ship to ship, or ship to shore.";
}
```

**Error Handling:**
Returns a 400 error if the inputed type is not PWD or Doodle.

Example: GET /breed/pug

Output:
```
Error: Dog breed must be PWD or Doodle
```

## Get Australian Shepherd
**Request Format:** GET

**Returned Data Format**: Plain Text

**Description:** Returns information about the Australian Shepherd

**Supported Parameters** None

**Example Request:** GET /AShepherd

**Example Response:**

```
"The Australian Shepherd, often known simply as the 'Aussie', is a breed of herding dog that was developed in the United States. Despite its name, the breed was not actually developed in Australia. They are known for their intelligence, agility, and strong work ethic."
```

**Error Handling:**