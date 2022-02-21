
import React, { Component } from 'react';
export default class Main extends Component {
    state = {
        appTitle: "Customer", customersCount: '5',
        customers: [{ id: '1', Name: 'barkat', phone: '44334434343', address: { city: 'lahore', country: 'pakistan' } },
        { id: '2', Name: 'ali', phone: '44334434343', address: { city: 'lahore', country: 'pakistan' } },
        { id: '3', Name: 'danish', phone: '44334434343', address: { city: 'lahore', country: 'pakistan' } }],
    };
    render() {
        return (
            <React.Fragment>
                <h4 className='border-bottom m-1 p-1'>{this.state.appTitle}
                    <span className='badge badge-warning m-2'>{this.state.customersCount}</span>
                    <button className='btn btn-outline-info' onClick={this.customerCount}>Refresh</button>
                </h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((cust) => {
                            return (
                                <tr key={cust.id}>
                                    <td>{cust.id}</td>
                                    <td>{cust.Name}</td>
                                    <td>{cust.phone}</td>
                                    <td>{cust.address.city}</td>
                                    <td>{cust.address.country}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
    customerCount = () => {
        this.setState({
            customerCount: '7'
        });
    }

}