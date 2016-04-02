const firebaseSchema = {
    "owners": {
        "schedule_id_1": {
            "user_id_1": true
        }
    },

    "collaborators": {
        "schedule_id_1": {
            "name": "User Name",
            "bio": "blob data"
        }
    },

    // schedules contains only meta info about each schedule
    // stored under the schedule's unique ID
    "members": {
        "schedule_id_1": {
            "user_id_1": true
        },
        "schedule_id_2": {},
        "schedule_id_3": {}
    },

    "schedules": {
        "owner_id_1": {
            "schedule_id_1": {
                "name": "schedule name",
                "url": "scheule url"
            }
        }
    },

// events are separate from data we may want to iterate quickly
// but still easily paginated and queried, and organized by schedule ID
    "events": {
        "schedule_id_1": {
            event_id_1: {
                "title": "test title",
                "hostedBy": {
                    "user_id_1": "User Name"
                },
                address: {
                    "address_id": "address name"
                },
                tags: ["filter name"],
                maxAttendees: 10,
                dateInfo: {
                    startDateTime: "00/00/00",
                    endDateTime: "00/00/00"
                },
                repeat: {
                    type: 'WEEKLY',
                    finalDate: "12/12/2012",
                    interval: 1,
                    count: 0,
                    daysOfWeek: [1, 2],
                    excludeDays: ["12/12/2012"]
                }
            }
        }
    },
    "addresses": {
        "schedule_id_1": {
            "address_id_1": {
                "name": "string",
                "address1": "String",
                "address2": "String",
                "zip": "String",
                "country": "UK"
                }
            }
        }
    }
}