import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";

const Calendar = () => {
    const handleResourceMount = (info) => {
        // Accéder à l'élément DOM de la ressource
        if (info.resource.id === "terrain1") {
            info.el.style.backgroundColor = "green";
            info.el.style.color = "white";
        } else if (info.resource.id === "terrain2") {
            info.el.style.backgroundColor = "orange";
            info.el.style.color = "black";
        } else if (info.resource.id === "terrain3") {
            info.el.style.backgroundColor = "blue";
            info.el.style.color = "white";
        } else if (info.resource.id === "terrain4") {
            info.el.style.backgroundColor = "red";
            info.el.style.color = "white";
        }
    };

    const [events, setEvents] = useState([
        {
            id: "1",
            resourceId: "terrain1",
            title: "Emilie Devaud",
            start: "2024-11-29T07:00:00",
            end: "2024-11-29T08:30:00",
            backgroundColor: "green", // Changer la couleur de fond
            borderColor: "darkgreen", // Couleur de bordure
            textColor: "white", // Couleur du texte
        },
        {
            id: "2",
            resourceId: "terrain2",
            title: "Sergio Monetti",
            start: "2024-11-29T09:00:00",
            end: "2024-11-29T10:00:00",
        },
    ]);

    const [resources] = useState([
        { id: "terrain1", title: "Terrain 1", color: 'yellow', className: "terrain-green" },
        { id: "terrain2", title: "Terrain 2", className: "terrain-orange" },
        { id: "terrain3", title: "Terrain 3", className: "terrain-blue" },
        { id: "terrain4", title: "Terrain 4", className: "terrain-red" },
    ]);

    const handleRefresh = () => {
        alert("Actualiser le calendrier !");
        // Ici, vous pouvez recharger les données d'événements ou effectuer d'autres actions
    };

    const renderEventContent = (eventInfo) => {
        const { title, start, end } = eventInfo.event;
        const calculateDuration = (start, end) => {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diff = (endDate - startDate) / (1000 * 60);
            const hours = Math.floor(diff / 60);
            const minutes = diff % 60;
            return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
        };
        const duration = calculateDuration(start, end);

        return (
            <Stack sx={{ height: '100%', width: '100%' }} direction={'row'} spacing={1.5}>
                <div style={{ height: '100%', width: '3px', background: 'cyan' }} />
                <div style={{ textAlign: 'start' }}>
                    <div style={{ fontWeight: "bold" }}>{title}</div>
                    <div>{`${new Date(start).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })} - ${new Date(end).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}`}</div>
                    <div style={{ color: "#555" }}>{duration}</div>
                </div>
            </Stack>
        );
    };

    const handleEventClick = (clickInfo) => {
        // Récupérer les informations sur l'événement cliqué
        const { title, start, end, id } = clickInfo.event;

        // Par exemple, afficher un message ou lancer une action personnalisée
        alert(`Vous avez cliqué sur l'événement : 
- ID : ${id}
- Titre : ${title}
- Début : ${new Date(start).toLocaleString()}
- Fin : ${new Date(end).toLocaleString()}`);
    };

    return (
        <div style={{ margin: "20px" }}>
            <FullCalendar
                plugins={[resourceTimeGridPlugin, interactionPlugin]}
                initialView="resourceTimeGridDay"
                locale="fr"
                editable={true}
                selectable={true}
                resources={resources}
                resourceDidMount={handleResourceMount} // Appliquer les styles au montage des ressources
                events={events}
                headerToolbar={{
                    left: "prev,next today refreshButton",
                    center: `title`,
                    right: "resourceTimeGridDay",
                }}
                titleFormat={{
                    year: "numeric", // Année complète (ex : 2024)
                    month: "long",   // Mois en lettres (ex : novembre)
                    day: "numeric",  // Jour (ex : 28)
                    weekday: "short", // Nom du jour (ex : jeudi)
                  }}
                customButtons={{
                    refreshButton: {
                        text: "Actualiser",
                        click: handleRefresh,
                        className: "custom-refresh-button", // Ajout de la classe
                        didMount: function (element) {
                            element.style.backgroundColor = "red";
                            element.style.color = "white";
                            element.style.border = "none";
                            element.style.borderRadius = "5px";
                            element.style.padding = "5px 10px";
                            element.style.cursor = "pointer";
                        },
                    },
                }}
                eventContent={renderEventContent} // Customisation des événements
                eventClick={handleEventClick} // Gestion du clic sur un événement
                height="auto"
            />
        </div>
    );
};

export default Calendar;
