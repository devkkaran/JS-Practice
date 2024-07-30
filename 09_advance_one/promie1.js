async function getUserAll() {
    try {
        // Attempt to fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the response is not OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Simulate an error by trying to access a property that doesn't exist
        const data = await response.json();
        console.log(data);

        // Intentional error: trying to access a property of undefined
        console.log(data.nonExistentProperty.length); // This will throw an error if `data.nonExistentProperty` is undefined

    } catch (error) {
        // Handle errors, including those from JSON parsing or logical errors
        console.log('Caught an error:', error.message);
    }
}

getUserAll();
