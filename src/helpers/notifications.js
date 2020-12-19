import React from 'react';
import { toastr } from 'react-redux-toastr';

export const notificationHelper = (title, message, type)=> toastr[type](title, {
    component: () => <div dangerouslySetInnerHTML={{__html: message}} />,
});
