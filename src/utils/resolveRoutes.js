const resolveroutes = (route) => {
    if (route.length <= 3) {
        let valiRoute = route === '/' ? route : '/:id'
        return valiRoute
    }
    return `/${route}`
}

export default resolveroutes