import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResult';

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '8859906-a0de5a498b3fd22f2641f2c3f',
        images: []
    };

    onTextChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({'images': res.data.hits}))
                .catch(err => console.log(err));
        })
    };

    onAmountChange = (e,index,value) => {
        this.setState({'amount': value })
    } 

    render() {
        console.log(this.state);
        return (
            <div>
                <TextField
                    name="searchText"
                    floatingLabelText="Seach For Images"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}/>
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    fullWidth={true}>
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                </SelectField>
            </div>
        )
    }
}
