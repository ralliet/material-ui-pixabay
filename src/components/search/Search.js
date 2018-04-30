import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '8859906-a0de5a498b3fd22f2641f2c3f',
        images: []
    }

   /*  onTextChange(value) {
        state.searchText = value;
    }

    onAmountChange(value) {
        state.searchText = value;
    } */

    render() {
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
