import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configuração do localizer para usar moment.js
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    // Defina eventos de exemplo, se desejar
    const events = [
        {
            title: 'Reserva 1',
            start: new Date(2024, 7, 1, 10, 0), // 1 de Agosto de 2024 às 10:00
            end: new Date(2024, 7, 1, 12, 0),   // 1 de Agosto de 2024 às 12:00
            allDay: false,
        },
        {
            title: 'Reserva 2',
            start: new Date(2024, 7, 5, 14, 0), // 5 de Agosto de 2024 às 14:00
            end: new Date(2024, 7, 5, 16, 0),   // 5 de Agosto de 2024 às 16:00
            allDay: false,
        },
    ];

    return (
        <div style={{ height: '100vh' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                views={['month', 'week', 'day']} // Configura quais visualizações serão exibidas
            />
        </div>
    );
};

export default CalendarComponent;
