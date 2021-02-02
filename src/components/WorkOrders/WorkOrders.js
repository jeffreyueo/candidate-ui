import React from 'react';
// axios would be imported here in order to fetch data
// import axios from 'axios';
import data from '../../stubs/workOrders.json';
import WorkOrder from './WorkOrder';
import headers from '../../constants/headers';
import { WorkOrdersWrapper, WorkOrdersHeader, WorkOrdersTable, WorkOrdersHeaderRow } from '../../styles/workOrders';

export default class WorkOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFetched: false,
            data: []
        }
    }

    componentDidMount() {
        //would call axios get here to hit UpKeeps API to grab the data using async and await
        // const data = await axios.get(path);
        this.setState({
            dataFetched: true,
            data: data.data.workOrders
        })
    }

    render() {
        console.log(this.state.dataFetched);
        if (!this.state.dataFetched) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <WorkOrdersWrapper>
                <WorkOrdersHeader>
                    Work Orders
                </WorkOrdersHeader>
                <WorkOrdersTable>
                    <thead>
                        <WorkOrdersHeaderRow>
                            {headers.map((header) => (
                                <th>{header}</th>
                            ))}
                        </WorkOrdersHeaderRow>
                    </thead>
                    <tbody>
                        {this.state.data.map((workOrder) => (
                            <WorkOrder workOrder={workOrder}/>
                        ))}
                    </tbody>
                </WorkOrdersTable>
            </WorkOrdersWrapper>
        );
    }
}