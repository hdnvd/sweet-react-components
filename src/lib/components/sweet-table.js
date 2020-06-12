// @flow

import * as React from "react";
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
class SweetTable extends React.Component{
    constructor(props) {
        super(props);
            if(props.rowLink!==undefined){
                this.props.getTrProps=(state, rowInfo, column)=> {
                return {
                    onClick: () => {
                        this.props.history.push(this.props.rowLink(rowInfo.original.id))

                    }
                }
            }
            }
        };

        render()
        {

            return <div>
                {/*<CSVLink*/}
                    {/*data={this.getDataArray()}*/}
                    {/*filename={"exportData.csv"}*/}
                    {/*className="btn btn-primary"*/}
                    {/*target="_blank"*/}
                {/*>*/}
                    {/*<img className={'excelicon'} src={excelicon} onClick={()=>*/}
                        {/*alert('Exporting Excel File')} />*/}
                {/*</CSVLink>*/}
                <ReactTable
                getTableProps={() => ({ style: { display: 'block' } })}
                nextText={'صفحه بعد'}
                noDataText={'هیچ داده ای وجود ندارد'}
                pageText={'صفحه'}
                ofText={'از'}
                rowsText={null}
                showPageSizeOptions={false}
                pageJumpText={'برو به صفحه'}
                rowsSelectorText={'سطر در صفحه'}
                previousText={'ضفحه قبل'}
                {...this.props}
            /> </div>;
        }
    getDataArray()
    {

        let result=[];
        // let content=[];
        let title=[];
        for (let i=0;i<this.props.columns.length;i++)
        {
            title.push(this.props.columns[i].Header);
        }
        result.push(title);
        for(let j=0;j<this.props.data.length;j++)
        {
            let row=[];
            for (let i=0;i<this.props.columns.length;i++)
            {
                let key=this.props.columns[i].accessor;
                row.push(this.props.data[j][key]);
            }
            result.push(row);
        }
        console.log(result);
        return result;
    };

}
export default SweetTable;
