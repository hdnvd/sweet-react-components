import React from 'react';
import SweetPage from './SweetPage';
import ListTopBar from '../ListTopBar';

export default class SweetListPage extends SweetPage {
    state =
        {
            ...super.state,
            nextStartRow: 0,
            SearchText: '',
            SearchFields: null,
            isLoading: false,
            isRefreshing: false,
            // displaySearchPage: false,
            sortField:'id',
        };
    _loadData = (isRefreshing) => {
        throw new Error("SweetError: Please Implement LoadData in the ListPage")
    };
    _getFlatList(data,renderItem)
    {
        return "";
    }
    _getTopBar(sortFields,onSearchClick)
    {
        return <ListTopBar sortFields={sortFields}
                           onSortFieldSelect={(optionKey) => {
                               this.setState({sortField: optionKey}, () => {
                                   this._loadData(true);
                               });
                           }} onSearchClick={onSearchClick}

                           displaySearchTitleBar={this.state.SearchFields != null}
                           onCancelSearch={this._onCancelSearch}
        />
    }
    _onCancelSearch=() => {
        this.setState({
            SearchText: '',
            SearchFields: null,
        }, () => {
            this._loadData(true);
        });
    }

}
