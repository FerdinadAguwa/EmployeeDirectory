import React, { Component } from "react";
import API from "../../utils/API";
import Record from "../Record";
import Wrapper from "../Wrapper";
import SearchBar from "../searchBar";
import Title from "../Title";


class Results extends Component {
    state = {
        result: {},
        search: ""
    };
 
    componentDidMount(){
        this.getEmployee()
    }

    getEmployee = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    };
    


    render() {
        return (

            <div>
                {console.log(this.state.result)}
                <Wrapper>
                    <Title>Employee Directory</Title>
                </Wrapper>

                <SearchBar />

                <Record />
            </div>

        );
    }

};

export default Results;