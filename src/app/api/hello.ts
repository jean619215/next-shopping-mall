export default function handler(req: any, res: any) {
  if (req.method === "GET") {
    // Handle GET request for retrieving a resource
    console.log("_____Hello World req", req);
    res.status(200).json({ name: "Jean" });
  } else if (req.method === "POST") {
    // Handle POST request for creating a new resource
    // ...
  } else if (req.method === "PUT") {
    // Handle PUT request for updating an existing resource
    // ...
  } else if (req.method === "DELETE") {
    // Handle DELETE request for deleting a resource
    // ...
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
