export const get = (url: string) => {
	return fetch(url).then((res) => res.json())
}

export const post = (url: string, payload: any) => {
	return fetch(url, { method: 'POST', body: payload }).then((res) => res.json())
}
