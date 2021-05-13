import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            searchInput: ''
        }
    }
    searchInput = (input) => {
        this.setState({
            searchInput: input
        })
    }

        

        handleFormSubmit = (event) => {
            event.preventDefault()
            const query = this.state.searchInput;

            const url = `http://www.omdbapi.com/?apikey=10bc3869&t=${query}`

            axios({
                url: url,
                method: 'GET'
            }).then((response) =>{
                console.log(response.data)
            })


        }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form action="sumbit">
                                <div className="input-group mb-3" />
                                <label htmlFor="query" className="label">What Movie would you like to search for?</label>
                                <input type="text" className="form-control" placeholder="Movie Search" value={this.state.searchInput} onChange={(event) => { this.searchInput(event.target.value) }} />
                               <Link to='/results'> <button onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Lets find that movie!</button> </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






        );
    }
}

export default Search;