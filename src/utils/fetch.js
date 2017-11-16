
// let fetchData = (url, opts, callback) => {
// 	fetch(url, {
// 		headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
// 		},
// 		method: 'post',
// 		body: JSON.stringify(opts)
// 	})
// 		.then(response => response.json())
// 		.then(res => {
// 			callback(res);
// 		})
// }
// export default fetchData;

export function Request(url, data) {
	return fetch(url, {
	  method: "POST",
	  headers: {
	    "Accept": "application/json",
	    "Content-Type": "application/json"
	  },
	  body: JSON.stringify(data)
	})
	  .then((res) => {
	    if (res.ok) {
		return res.json().then((json) => {
		  return json;
		})
	    } else {
		return;
	    }
	  })
	  .catch((e) => {
	    console.log("error")
	  })
    }
     