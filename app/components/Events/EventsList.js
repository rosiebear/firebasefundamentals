import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

const EventsList = () => (
    <List>
        <ListItem primaryText="Inbox"
                  secondaryText="Jan 9, 2014"
                  leftIcon={<ContentInbox />}
                  rightIcon={<ActionInfo />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
);

export default EventsList;