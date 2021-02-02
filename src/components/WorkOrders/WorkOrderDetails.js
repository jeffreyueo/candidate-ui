import React from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { WorkOrderDetailsWrapper, WorkOrderDetailsHeader, WorkOrderDetailsContent, WorkOrderDetailsInfo, WorkOrderDetailsDescription, WorkOrderDetailsData } from '../../styles/workOrders';

const WorkOrderDetails = () => {
    const location = useLocation();
    const state = location.state;
    const { workOrderDetails } = state;
    const { priority, updatedAt, number, title, description, category, createdAt, totalTime, additionalCosts } = workOrderDetails;

    return (
        <WorkOrderDetailsWrapper>
            <WorkOrderDetailsContent>
                <WorkOrderDetailsHeader>
                    Details
                </WorkOrderDetailsHeader>
                <WorkOrderDetailsInfo>
                    <div>
                        Priority: {priority}
                    </div>
                    <div>
                        Updated: {moment(updatedAt).format('MM/DD/YY h:mm:ss a')}
                    </div>
                    <div>
                        #{number}
                    </div>
                </WorkOrderDetailsInfo>
                <WorkOrderDetailsDescription>
                    <div>
                        {title}
                    </div>
                    <div>
                        {description}
                    </div>
                </WorkOrderDetailsDescription>
                <WorkOrderDetailsData>
                    <div>
                        Category: {category}
                    </div>
                    <div>
                        Created: {moment(createdAt).format('MM/DD/YY h:mm:ss a')}
                    </div>
                    <div>
                        Time: {totalTime}
                    </div>
                    <div>
                        Additional Costs: {additionalCosts}
                    </div>
                </WorkOrderDetailsData>
            </WorkOrderDetailsContent>
        </WorkOrderDetailsWrapper>
    )
};

export default WorkOrderDetails;