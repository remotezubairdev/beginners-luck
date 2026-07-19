export async function fetchData(url) {
        const access = localStorage.getItem("access")
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })
        // If access token has expired
        if (response.status === 401) {
            const refresh = localStorage.getItem("refresh");
            const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refresh: refresh
                })
            });
            // If Refresh token has also expired
            if (!refreshResponse.ok) {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                // Redirect user to login
                return null;
            }
            // Once token has been refreshed, save that to localstorage
            const newAccessToken = await refreshResponse.json();
            localStorage.setItem('access', newAccessToken.access);

            const retryResponse = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                }
            })
            const data = await retryResponse.json();
            return data;
        }
        const data = await response.json()
        return data;
}