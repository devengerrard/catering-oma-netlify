exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const data = JSON.parse(event.body || "{}");
  if (!data.username) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Username wajib diisi." })
    };
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      success: true,
      user: { username: data.username, role: "customer" }
    })
  };
};
