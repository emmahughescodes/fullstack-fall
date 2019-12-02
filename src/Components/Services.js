import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    getAllServices = () => {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch('/api/books', fetchOptions)
        .then(response => response.json())
        .then(data => {this.setState({ services: data})})
    }

    componentDidMount() {
        this.getAllServices();
    }

    render() {
        return (
            <div>
                {
                    (this.state.services.data) ? this.state.services.data.map((service, i) => {
                        return (
                            <>
                                { <ServiceCard props={service} /> }
                            </>
                        )
                    } ) : null
                }
            </div>
        )
    }
}

export default Services;
