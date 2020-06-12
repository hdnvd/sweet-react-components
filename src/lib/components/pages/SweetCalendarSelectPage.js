import React from 'react';
import SweetPage from './SweetPage';
import jMoment from 'moment-jalaali';

export default class SweetCalendarSelectPage extends SweetPage {
    state =
        {
            ...super.state,
            duration:'1',
            selectedStartDate: null,
            selectedStartTimeStamp: null,
            selectedEndDate: null,
            selectedEndTimeStamp:null,
            isLoading: false,
        };
    constructor(props) {
        super(props);
        this.onDateChange = this.onDateChange.bind(this);

    }
    onFullRangeSelect()
    {

    }
    onDateChange(date,type) {
        let DateTime=jMoment.utc(date);
        let DateString=DateTime.format("jYYYY/jMM/jDD");
        if(type==='START_DATE')
            this.setState({ selectedStartDate: DateString ,selectedEndDate:null,selectedStartTimeStamp:date});
        else
        {
            const dayLength=3600*24*1000;
            let Duration=parseInt((date-this.state.selectedStartTimeStamp)/dayLength);
            this.setState({selectedEndDate:DateString,duration:Duration+"",selectedEndTimeStamp:date},()=>{
                this.onFullRangeSelect();
            });
        }

    }

}
