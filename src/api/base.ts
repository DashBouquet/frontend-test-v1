const config = {
  baseUrl: 'http://4o4.co.nz/api/v1/'
};

declare function fetch(...params);

export const JSONResponse = (response: any) => {
  if ( response.ok) {
    return response.json();
  }

  const json = response.json();
  return json.then((err) => { throw err; });
};

export
const request: any = new Object({
  get: (apiEndpoint: string, params?: any) => {
    const paramsString = Object
      .keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
    console.log(paramsString);
    return fetch(config.baseUrl + apiEndpoint + ( paramsString ? `?${paramsString}` : ""))
      .then(JSONResponse);
  }
});
