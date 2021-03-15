import React, { Component } from "react";
import API from "../../utils/API";
import Record from "../Record";
import Wrapper from "../Wrapper";
import SearchBar from "../searchBar";
import Title from "../Title";


class Results extends Component {
    state = {
        result: null,
        search: "",
        allResults:[],
        orderSortedBy: "descend"
    };


 
    componentDidMount(){
        this.getEmployee()
    }

    sortFunction = (heading)=>{
        const sortedNames = this.state.result.sort();
        this.setState({ result: sortedNames})
        console.log(heading)
    
    }



    getEmployee = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let searchResult = event.target.value.toLowerCase();
        //console.log(searchResult);
        let newEmployees = this.state.allResults.filter(person => `${person.name.first.toLowerCase()}`.includes(searchResult))
        if (!searchResult) {
          this.setState({
            search: searchResult,
            results: this.state.allResults
          })
        } else {
          this.setState({
            search: searchResult,
            results: newEmployees
          })
        }
      };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search)
    }
    


    render() {
        return (

            <div>
                {console.log(this.state.result)}
                <Wrapper>
                    <Title>Employee Directory</Title>
                </Wrapper>

                <SearchBar 
                search ={this.state.search}
                handleInputChange ={this.handleInputChange}
                handleFormSubmit ={this.handleFormSubmit}
                />

                <Record
                results = {this.state.result}
                sortFunction = {this.sortFunction}
                />
            </div>

        );
    }

};

export default Results;