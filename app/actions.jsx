export async function searchUser(name) {
    const response = await fetch("https://invoiceapi.senihay.com/api/Adress/Clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    })
    return await response.json();
  }