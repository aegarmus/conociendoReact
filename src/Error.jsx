import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, messageError: error.message}
    }

    componentDidCatch(error) {
        console.log('componentDidCatch', error.message)
    }

    render() {
        if(this.state.hasError) {
            return (
                <h3>Ups! tenemos un error fatal </h3>
            )
        }
    
    return this.props.children
    }
}

export default ErrorBoundary