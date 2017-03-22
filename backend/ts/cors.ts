export function cors(statusCode: number, body: Object) {
  return {
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials' : true // Required for cookies, authorization headers with HTTPS
    },
    statusCode: statusCode
  };
}
