const generateConfig = (url) => {
   let accessToken=`Bearer ya29.a0ARrdaM_iiehtnKkwXWYvmpGVpaavvq1v38Tbts6jF5V7ttUBVV76aUFNmw7lD1kKjM9SK9ku6IMEwV4e_N_lBUWryS2jEPzVonuBAbkwL3Jwf89FpKwa3if6EspALXSgJ3H0PTN-wcgLyLpmEUxYySPJpuwg `
    return {
      method: "get",
      url: url,
      headers: {
        Authorization: accessToken,
        "Content-type": "application/json",
      },
    };
  };
  
  module.exports = { generateConfig };